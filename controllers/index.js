const { getSkooliesCL } = require('../services/craigslist.service');

module.exports = { getSkoolies };

async function getSkoolies(req, res, next) {
    try {
        const skoolies = await getSkooliesCL();
        res.render('index', { title: 'Skoolie Web Scraper', skoolies });
    } catch (e) {
        next(e);
    }
}
