const { getSkooliesCL } = require('./craigslist.service');

module.exports = { getAllSkoolies };

async function getAllSkoolies() {
    return await getSkooliesCL();
}