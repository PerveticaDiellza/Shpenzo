const P = require('../models/p.model');

module.exports = {

    getAllP: (request, response) => {
        P.find()
        .sort({pType: 1})
        .then((allP) => {
            console.log(allP);
            response.json(allP)
        })
        .catch((err) => {
            console.log("Something went wrong with getAllP");
            response.json({message: "Something went wrong with getAllP", error: err});
        })
    },

    getOneP: (request, response) => {
        P.findOne({ _id: request.params.id})
        .then((oneP) => {
            console.log(oneP);
            response.json(oneP)
        })
        .catch((err) => {
            console.log("Something went wrong with getOneP");
            response.json({message: "Something went wrong with getOneP", error: err});
        })
    },

    createP: (request, response) => {
        P.create(request.body)
        .then((p) => {
            console.log(p);
            response.json(p)
        })
        .catch((err) => {
            console.log("Something went wrong with createP");
            response.status(400).json(err);
        })
    },

    updateP: (request, response) => {
        P.findOneAndUpdate(
            { _id: request.params.id}, request.body,
            {
                new: true,
                runValidators: true,
            }
        )
            .then((updateP) => {
                console.log(updateP);
                response.json(updateP)
            })
            .catch((err) => {
                console.log("Something went wrong with updateP");
                response.status(400).json(err);
            })
    },

    deleteP: (request, response) => {
        P.deleteOne({ _id: request.params.id})
        .then((deleteP) => {
            console.log(deleteP);
            response.json(deleteP);
        })
        .catch((err) => {
            console.log("Something went wrong with deleteP");
            response.json({message: "Something went wrong with deleteP", error: err});
        })
    }
}