const express = require('express');
const app = express();
const morgan = require('morgan');

const weaponRoutes = require('./api/routes/weapons');
const passiveRoutes = require('./api/routes/passives');
const arcanaRoutes = require('./api/routes/arcanas');
const characterRoutes = require('./api/routes/characters');
const relicRoutes = require('./api/routes/relics');

app.use(morgan('dev'));

// Routes to handle requests
app.use('/weapons', weaponRoutes);
app.use('/passives', passiveRoutes);
app.use('/arcanas', arcanaRoutes);
app.use('/characters', characterRoutes);
app.use('/relics', relicRoutes);


module.exports = app;