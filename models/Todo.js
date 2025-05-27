// Bring mongoose to the file so we can use it
const mongoose = require('mongoose');

// Create the blueprint for what's going into the MongoDB collection
// Each todo document should have these two fields
const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

// model is a function takes the name of the model and the schema
// Todo -> is the name of the collection
// Todo is an object

// Creates and exports a Mongoose model
// Todo is the model name (also becomes the collection name in MongoDB) as todos (pluralized automatically)
// An instance of a model (collection) is called a document
// The model is tied to the TodoSchema
module.exports = mongoose.model('Todo', TodoSchema);
