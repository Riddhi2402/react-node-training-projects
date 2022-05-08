const graphql = require('graphql');
const { Book, Author } = require('../data');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql;

//BookType
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    authorId: { type: GraphQLID },
    author: {
      type: AuthorType,
      resolve(parent) {
        return Author.find((author) => author.id === parent.authorId);
      },
    },
  }),
});

//AuthorType
const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent) {
        var books = [];
        Book.map((book) => {
          if (book.authorId === parent.id) {
            books.push(book);
          }
        });
        return books;
      },
    },
  }),
});

//RootQueries
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    //get Book by id
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(args) {
        return Book.map((book) => {
          if (book.id === args.id) {
            return book;
          }
        });
      },
    },
    //get All Books
    books: {
      type: new GraphQLList(BookType),
      resolve() {
        return Book;
      },
    },
    //get All Authors
    authors: {
      type: new GraphQLList(AuthorType),
      resolve() {
        return Author;
      },
    },
  },
});

//Mutations
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    //AddBook mutation
    addBook: {
      type: BookType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(args) {
        Book.push({
          id: args.id,
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        });
        console.log(Book);
      },
    },
    //UpdateBook mutation
    updateBook: {
      type: BookType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        authorId: { type: GraphQLID },
      },
      resolve(args) {
        return Book.update(
          {
            name: args.name,
            genre: args.genre,
            authorId: args.authorId,
          },
          {
            where: { id: args.id },
          }
        );
      },
    },
    //DeleteBook mutation
    deleteBook: {
      type: BookType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(args) {
        return Book.destroy({
          where: { id: args.id },
        });
      },
    },
  },
});

//Schema
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
