const PController = require('../controllers/p.controller');

module.exports = (app) => {
    app.get('/api/trip/p', PController.getAllP);
    app.get('/api/trip/p', PController.getAllP);
    app.post('/api/trip/p', PController.createP);
    app.get('/api/trip/p/:id', PController.getOneP);
    app.put('/api/trip/p/:id', PController.updateP);
    app.delete('/api/trip/p/:id', PController.deleteP);
}