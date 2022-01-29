const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const communitySchema = new Schema({
    name: String,
    contributors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contributor"
    }],
    recipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe"
    }],
    openToStrangers: {
        type: Boolean,
        require: true
    },
    key: {
        type: String,
        require: true,
        unique: true
    }
})

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;