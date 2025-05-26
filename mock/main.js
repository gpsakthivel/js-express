const express = require('express'); // Import Express.js library

const app = express(); // Create an instance of Express
const PORT = 3000; // Port where the server will listen

app.use(express.json()); // Middleware to parse JSON request bodies


// Create a User
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Create a Post
app.post('/posts', (req, res) => {
    const { title, content, userId } = req.body;
    if (!title || !content || !userId) {
        return res.status(400).json({ message: 'Title, content, and userId are required' });
    }
    const newPost = { id: posts.length + 1, title, content, userId };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// Create a Category
app.post('/categories', (req, res) => {
    const { name, posts } = req.body;
    if (!name || !Array.isArray(posts)) {
        return res.status(400).json({ message: 'Name and posts array are required' });
    }
    const newCategory = { id: categories.length + 1, name, posts };
    categories.push(newCategory);
    res.status(201).json(newCategory);
});

// Retrieve a Post with the associated User
app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id)); // Find post by ID
    if (!post) res.status(404).send('Post not found'); // Handle not found

    const user = users.find(u => u.id === post.userId); // Find associated user
    res.json({ ...post, user }); // Return post with user details
});

// Retrieve all Posts
app.get('/posts', (req, res) => {
    const detailedPosts = posts.map(post => {
        const user = users.find(u => u.id === post.userId); // Find user for each post
        return { ...post, user }; // Combine post with user details
    });
    res.json(detailedPosts); // Return combined data
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
