//импортируем базу данных
const data = require('../../data-sql');

module.exports = async (req, res) => {
    res.writeHead(200);
    res.end(JSON.stringify(await data.getUsers()));
}