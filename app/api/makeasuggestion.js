// pages/api/makeasuggestion.js
import nextConnect from 'next-connect';
import { json } from 'express';

const handler = nextConnect();

// Use express.json() middleware
handler.use(json());

handler.post((req, res) => {
    const { reference, category, bot } = req.body;
    // console.log('req.body:', reference, category, bot);
    res.status(200).json({ reference, category, bot });
});

export default handler;
