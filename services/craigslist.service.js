const axios = require('axios');
const Parser = require('rss-parser');
const parser = new Parser();

module.exports = { getSkooliesCL };

async function getSkooliesCL() {
    const CLCities = [
        'https://denver.craigslist.org/search/sss?format=rss&query=skoolie&sort=rel',
        'https://sandiego.craigslist.org/search/sss?format=rss&query=skoolie&sort=rel',
        'https://seattle.craigslist.org/search/sss?format=rss&query=skoolie&sort=rel',
        'https://portland.craigslist.org/search/sss?format=rss&query=skoolie&sort=rel',
        'https://santafe.craigslist.org/search/sss?format=rss&query=skoolie&sort=rel',
        'https://austin.craigslist.org/search/sss?format=rss&query=skoolie&sort=rel',
        'https://chattanooga.craigslist.org/search/sss?format=rss&query=skoolie&sort=rel',
        'https://bend.craigslist.org/search/sss?format=rss&query=skoolie&sort=rel',
        'https://sfbay.craigslist.org/search/sss?format=rss&query=skoolie&sort=rel',
        'https://missoula.craigslist.org/search/sss?format=rss&query=skoolie&sort=rel',
        'https://rockies.craigslist.org/search/sss?format=rss&query=skoolie&sort=rel',
        'https://westslope.craigslist.org/search/sss?format=rss&query=skoolie&sort=rel',
        'https://asheville.craigslist.org/search/sss?format=rss&query=skoolie&sort=rel'
    ];

    const promises = CLCities.map(city => axios.get(city));
    const responses = await Promise.all(promises);
    return responses
        .map(res => res.data)
        .reduce(async (accumP, val) => {
            let accum = await accumP;
            const parserData = await parser.parseString(val);
            if (parserData && parserData.items && Array.isArray(parserData.items)) {
                accum = accum.concat(parserData.items);
            }
            return accum;
        }, Promise.resolve([]));
}