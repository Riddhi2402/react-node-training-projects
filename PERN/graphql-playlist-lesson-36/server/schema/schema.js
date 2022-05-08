const graphql = require('graphql');
const Book = require('../models/book');
const Author = require('../models/author');
const { MongodbPubSub } = require('graphql-mongoose-subscriptions');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql;

//PubSub
const pubsub = new MongodbPubSub({
  mongooseOptions: {
    url: 'mongodb://user:test@cluster1-shard-00-00.enjzx.mongodb.net:27017,cluster1-shard-00-01.enjzx.mongodb.net:27017,cluster1-shard-00-02.enjzx.mongodb.net:27017/GraphQLDatabase?ssl=true&replicaSet=atlas-eq0nr3-shard-0&authSource=admin&retryWrites=true&w=majority',
    options: { useNewUrlParser: true, useUnifiedTopology: true },
  },
});

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return Author.findById(parent.authorId);
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find({ authorId: parent.id });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    //Query for get book by id
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Book.findById(args.id);
      },
    },
    //Query for get author by id
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Author.findById(args.id);
      },
    },
    //Query for get all books
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find({});
      },
    },
    //Query for get all authors
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return Author.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    //Mutation for add Author
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve(parent, args) {
        let author = new Author({
          name: args.name,
          age: args.age,
        });
        return author.save();
      },
    },
    //Mutation for add Book
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        });
        pubsub.publish('BOOK_ADDED', {
          bookAdded: {
            data: book,
          },
        });
        return book.save();
      },
    },
    updateBook: {
      type: BookType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        authorId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Book.findByIdAndUpdate(args.id, {
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        });
      },
    },
    deleteBook: {
      type: BookType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Book.findByIdAndRemove(args.id);
      },
    },
  },
});

const Subscription = new GraphQLObjectType({
  name: 'Subscription',
  fields: {
    bookAdded: {
      type: BookType,
      resolve() {
        return pubsub.asyncIterator('BOOK_ADDED');
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
  subscription: Subscription,
});
