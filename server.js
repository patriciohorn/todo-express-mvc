const express = require('express');
const app = express();
// run the module require(...) and give me whatever it exports. I'm exporting the function itself, it evaluates to the function not the calling
const connectToDB = require('./config/database');

const homeRoutes = require('./routes/home');
const todosRoutes = require('./routes/todos');
require('dotenv').config({ path: './config/.env' });

connectToDB();

/// Middlewares
app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
// Find and serves the public files
app.use(express.static('public'));
// Handles raw data e.g a fetch from the client
app.use(express.json());

/// Routers
// mounts the router into the main app at given path
// mounting our mini app into the main app
app.use('/', homeRoutes);
app.use('/todos', todosRoutes);

/// Running the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
