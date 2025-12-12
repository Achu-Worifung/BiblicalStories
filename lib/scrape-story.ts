
'use server'
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrapeStory(ref :string, translation: string = "KJV") 
{
    console.log("ref", ref);
    try 
    {
        const url = `https://www.biblegateway.com/passage/?search=${ref}&version=${translation}`;

        const res = await axios.get(url);
        const $ = cheerio.load(res.data);
        let story = '';
        $('p:has(span)').each((index: number, element) => 
        {
             story += '<p className = "text-start" >'  + $(element).text() + '</p><br/>';

        })
        console.log("hrtr id yhr story",story);
        
        return story;
    } catch (error) 
    {
        console.error(error);
        return '';
    }
}