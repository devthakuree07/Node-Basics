
const getUsers = (req,res) => {
    res.json[{
        id: 1, name: "Ali"
    }, {
        id: 2, name: "Dev"
    }]
};

const createUser = (req, res) => {
    const { name } = req.body;
    res.status(201).json({ message: `User ${name} created!` });
};

module.exports = { getUsers, createUser };