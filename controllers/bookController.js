const Book = require('../models/book');
const { StatusCodes } = require('http-status-codes');

const createBook = async (req, res) => {
    console.log(req.body);
    const book = await Book.create(req.body);
    res.status(StatusCodes.CREATED).json({ book });
};

const getAllbook = async (req, res) => {
    const allBook = await Book.find({})
    res.status(StatusCodes.OK).json({ allBook, bookCount: allBook.length });
}

const getsingleBook = async (req, res) => {
    const { id } = req.params;
    const singleBook = await Book.findOne({ isbn: id })
    if (!singleBook) {
        return res.status(StatusCodes.NOT_FOUND);
    }
    res.status(StatusCodes.OK).json({ singleBook });
};

const updateBook = async (req, res) => {
    const { id } = req.params;

    const book = await Book.findOneAndUpdate({ isbn: id }, req.body, { new: true });
    if (!book) {
        return res.status(StatusCodes.NOT_FOUND);
    }
    res.status(StatusCodes.OK).json({ book });
};

const deleteBook = async (req, res) => {
    const { id } = req.params;

    const book = await Book.findOneAndRemove({ isbn: id });

    if (!book) {
        return res.status(StatusCodes.NOT_FOUND);
    }
    res.status(StatusCodes.OK).json({ msg: `${book.name} is successfully deleted` });
}

module.exports = {
    createBook,
    getAllbook,
    getsingleBook,
    updateBook,
    deleteBook
}
