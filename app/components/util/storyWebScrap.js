const axios = require('axios');
const cheerio = require('cheerio');
export async function fetchStories(verse, translation) {
    try 
    {
        // console.log('fetching stories');
        
        let url = `https://www.biblegateway.com/passage/?search=${verse}&version=${translation}`;
        const res = await axios.get(url);
        const $ = cheerio.load(res.data);
        let story = '';
        $('p:has(span)').each((index, element) => 
        {
             story += '<p className = "text-start" >'  + $(element).text() + '</p><br/>';

        })
        // console.log(story);
        
        return story;
        
        
    }catch(err)
    {
        console.log('Error occurred while fetching story',err);
    }

}