import express from 'express';
import fetch from 'node-fetch'; // Import node-fetch as an ES module

const app = express();
const PORT = process.env.PORT || 3000;

// Define a route to handle GET requests for a random image
app.get('/api/image/random', async (req, res) => {
    try {
        // Fetch a random image from Unsplash
        const response = await fetch('https://source.unsplash.com/random');
        if (!response.ok) {
            throw new Error('Failed to fetch image');
        }
        // Redirect to the URL of the random image
        res.redirect(response.url);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch random image' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
