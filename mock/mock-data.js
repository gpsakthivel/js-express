// Mock data
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Sam Smith', email: 'sam@example.com' },
];

const posts = [
    { id: 1, title: 'First Post', content: 'This is the first post', userId: 1 },
    { id: 2, title: 'Second Post', content: 'This is the second post', userId: 2 },
];

const categories = [
    { id: 1, name: 'Tech', posts: [1] },
    { id: 2, name: 'Lifestyle', posts: [2] },
];

export {
    users, 
    posts,
    categories
};