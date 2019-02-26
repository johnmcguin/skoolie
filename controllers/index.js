const { getAllSkoolies } = require('../services/index');

module.exports = { getSkoolies };

async function getSkoolies() {
    return await getAllSkoolies();
}
