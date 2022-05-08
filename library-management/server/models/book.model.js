module.exports = (mongoose) => {
  const Book = mongoose.model(
    'books',
    mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      genre: {
        type: String,
      },
      author: {
        type: String,
        required: true,
      },
    })
  );
  return Book;
};
