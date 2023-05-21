const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        default: "----"
    },
    author: {
        type: String,
        required: true
    },
    isbn: {
        type: mongoose.Schema.Types.ObjectId,
        default: function () {
            return new mongoose.Types.ObjectId();
        }
    }

});

module.exports = mongoose.model('book', bookSchema);

