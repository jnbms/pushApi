const cheerio = require("cheerio");
const axios = require("axios");

const getHTML = async (url) => {
    try {
        return await axios.get(url);
    } catch (error) {
        console.error(error);
    }
};

getHTML("https://www.youtube.com/watch?v=PcbWja0vwjE&list=PLRJlCCZ2jiSyE8Q2f9m3FJ8A4YxcHg3Ic&index=6")
    .then(html => {
        const $ = cheerio.load(html.data);
        console.log($(".text").html());
    })
