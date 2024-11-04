const express = require('express');
const app = express();
const port = 5001;
const { Sequelize, DataTypes } = require('sequelize');
var bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.json())

const sequelize = new Sequelize('mysql://root:QWer150274@localhost:3306/ipz');

/*
clients == book
masters == registration
services == order
*/

const book = sequelize.define('books', {
    book_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,

    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false
});

const registration = sequelize.define('registrations', {
    registration_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,

    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false// Model options
});

const order = sequelize.define('orders', {
    order_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,

    },
    customerName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_of_birth: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false// Model options
});

(async () => {
    // Synchronize the models with the database (create tables)
    await sequelize.sync();
})();

module.exports = { book, registration, order };


app.get('/api/books', async (req, res) => {
    try {
        const tt = await book.findAll();
        res.json(tt);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
})

app.get('/api/books/:book_id', async (req, res) => {
    try {
        // Отримуємо ID книги з параметрів запиту
        const bookId = req.params.book_id;

        // Знаходимо книгу за її ID
        const tt = await book.findByPk(bookId);

        // Перевіряємо, чи книга знайдена
        if (tt) {
            res.json(tt); // Повертаємо книгу у відповіді
        } else {
            res.status(404).send('Book not found'); // Повертаємо 404, якщо книга не знайдена
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
})

app.get('/api/registrations', async (req, res) => {
    try {
        const tt = await registration.findAll();
        res.json(tt);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
})

app.get('/api/orders', async (req, res) => {
    try {
        const tt = await order.findAll();
        res.json(tt);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
})

app.post('/api/books', async (req, res) => {
    try {
        // Отримуємо дані з тіла запиту
        const { title, author, genre, year } = req.body;

        // Створюємо нового клієнта
        const book_obj = await book.create({ title, author, genre, year });

        // Повертаємо створеного клієнта у відповідь на запит
        res.json(book_obj);
    } catch (error) {
        // Обробляємо помилку, якщо вона виникла
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.post('/api/registrations', async (req, res) => {
    try {
        // Отримуємо дані з тіла запиту
        const { username, email, password } = req.body;

        // Створюємо нового майстра
        const registration_obj = await registration.create({ username, email, password });

        // Повертаємо створеного майстра у відповідь на запит
        res.json(registration_obj);
    } catch (error) {
        // Обробляємо помилку, якщо вона виникла
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/api/orders', async (req, res) => {
    try {
        const { customerName, address, date_of_birth, phoneNumber, paymentMethod } = req.body;

        // Validate incoming data (you may want to do this via a library like Joi or validate here)

        const order_obj = await order.create({
            customerName,
            phoneNumber,
            address,
            date_of_birth,
            paymentMethod
        });

        res.status(201).json(order_obj);
    } catch (error) {
        console.error('Error creating order:', error); // Log the specific error
        res.status(500).json({ message: 'Internal Server Error' });
    }
});





// jdbc:mysql://127.0.0.1:3306/?user=root

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})