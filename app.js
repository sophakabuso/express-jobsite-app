// Import required modules
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

// Set 'views' directory for EJS templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware for logging requests
app.use(morgan('dev'));

const students = [
    {
        name: 'Ayanda',
        surname: 'Ndama',
        age: '20'
    },
    {
        name: 'Lwand',
        surname: 'Jama',
        age: '23'
    },
    {
        name: 'Bongo',
        surname: 'Masoma',
        age: '29'
    }
];

// Middleware for serving static files from the 'public' directory
app.use(express.static('public'));

// Route for the Home page
app.get('/', (req, res) => {
    res.render('index', { students, title: 'nodejs course' });
});

// Route for the About page
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// Route for the 404 page
app.get('*', (req, res) => {
    res.status(404).render('404', { title: '404' });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
