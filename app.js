const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const weaponRoutes = require('./api/routes/weapons');
const passiveRoutes = require('./api/routes/passives');
const arcanaRoutes = require('./api/routes/arcanas');
const characterRoutes = require('./api/routes/characters');
const relicRoutes = require('./api/routes/relics');

app.use(morgan('dev'));
// true lets you parse rich bodies
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes to handle requests
app.use('/weapons', weaponRoutes);
app.use('/passives', passiveRoutes);
app.use('/arcanas', arcanaRoutes);
app.use('/characters', characterRoutes);
app.use('/relics', relicRoutes);

// Error Handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})
module.exports = app;