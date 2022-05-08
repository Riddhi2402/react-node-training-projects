const { PubSub } = require('graphql-subscriptions');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Models
const Book = require('../models/book');
const Author = require('../models/author');
const User = require('../models/user');

const pubsub = new PubSub();

module.exports = {
  Book: {
    author(parent, _) {
      return Author.findById(parent.authorId);
    },
  },
  Author: {
    books(parent, _) {
      return Book.find({ authorId: parent.id });
    },
  },
  Query: {
    books() {
      return Book.find();
    },
    authors() {
      return Author.find();
    },
    book(_, args) {
      return Book.findById(args.id);
    },
    author(_, args) {
      return Author.findById(args.id);
    },
    login: async (_, args) => {
      const user = await User.findOne({ email: args.email });
      if (!user) {
        throw new Error('Invalid Cradentials');
      }

      const isEqual = await bcrypt.compare(args.password, user.password);

      if (!isEqual) {
        throw new Error('Invalid Cradentials');
      }

      const token = await jwt.sign({ userId: user.id, email: user.email }, 'somesecretkey', {
        expiresIn: '1h',
      });

      return { userId: user.id, token: token, tokenExpiration: 1 };
    },
  },
  Mutation: {
    addBook(_, args) {
      const book = new Book({
        name: args.name,
        genre: args.genre,
        authorId: args.authorId,
      });
      book.save();

      pubsub.publish('BOOK_ADDED', {
        bookAdded: {
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        },
      });
      return book;
    },
    updateBook(_, args) {
      const book = Book.findByIdAndUpdate(args.id, {
        name: args.name,
        genre: args.genre,
        authorId: args.authorId,
      });

      pubsub.publish('BOOK_UPDATED', {
        bookUpdated: {
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        },
      });
      return book;
    },
    deleteBook(_, args) {
      const book = Book.findByIdAndRemove(args.id);

      pubsub.publish('BOOK_DELETED', {
        bookDeleted: {
          name: null,
          genre: null,
          authorId: null,
        },
      });
      return book;
    },
    createUser: async (_, args) => {
      try {
        const existingUser = await User.findOne({ email: args.email });

        if (existingUser) {
          throw new Error('User Exists Already!');
        }

        const hashedPassword = await bcrypt.hash(args.password, 12);

        const user = new User({
          email: args.email,
          password: hashedPassword,
        });

        const result = await user.save();

        return { ...result._doc, password: null, id: result.id };
      } catch (error) {
        throw error;
      }
    },
  },

  Subscription: {
    bookAdded: {
      subscribe: () => {
        return pubsub.asyncIterator(['BOOK_ADDED']);
      },
    },
    bookUpdated: {
      subscribe: () => {
        return pubsub.asyncIterator(['BOOK_UPDATED']);
      },
    },
    bookDeleted: {
      subscribe: () => {
        return pubsub.asyncIterator(['BOOK_DELETED']);
      },
    },
  },
};
