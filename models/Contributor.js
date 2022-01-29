const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contributorSchema = new Schema ({
    name: {
        type: String,
        require: true
    },
    bio: String,
    recipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe"
    }],
    communities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Community"
    }]
})

const Contributor = mongoose.model("Contributor", contributorSchema);

module.exports = Contributor;