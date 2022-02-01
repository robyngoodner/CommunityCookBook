const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    contributor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contributor"
    },
    community: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Community"
    },
    title: {
        type: String,
        require: true
    },
    ingredients: [{
        type: String,
        require: true
    }],
    tools: [{
        type: String,
        require: true
    }],
    instructions: [{
        type: String,
        require: true
    }]
}, 
    {timestamps: true}
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;