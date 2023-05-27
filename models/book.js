const mongoose = require('mongoose');
const sendEmail = require('../controllers/sendEmail');

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
    email: {
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

bookSchema.post('save', async function () {
    let msg = `Hi ${this.author}, Your Book "${this.name}" has been added to Book Dictionary Successfully`
    await sendEmail(this.email, msg, 'Added Book ');
});

bookSchema.post('findOneAndUpdate', async function (obj) {
    let msg = `Hi ${obj.author}, Your Book "${obj.name}" has been updated Successfully`;
    await sendEmail(obj.email, msg, "Updated book details");
})

bookSchema.post('findOneAndDelete', async function (obj) {
    let msg = `Hi ${obj.author}, Your Book "${obj.name}" has been removed Successfully`;
    await sendEmail(obj.email, msg, "Removed book");
})
module.exports = mongoose.model('book', bookSchema);

