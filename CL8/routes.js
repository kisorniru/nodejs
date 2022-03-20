/*
 * File: routes.js
 * Title: Routes
 * Description: Routes
 * Author: Noor-A-Alam Siddique
 * Date: 20/03/2022
 */

// Dependencies
const { sampleHandler } = require('./handlers/routeHandlers/handlers');
const { notFoundHandler } = require('./handlers/routeHandlers/notFoundHandler');

// Module scaffolding
const routes = {
    sample: sampleHandler,
    notFoundHandler,
};

// Configuration
routes.config = {};

// Export Module
module.exports = routes;
