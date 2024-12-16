 
 const express = require('express');
 const path = require('path');
 
 const app = express();
 
 // Serve the static files from the React app
 app.use(express.static(path.join(__dirname, 'dist')));
 
 // Handle React routing, return all requests to the React app
 app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
 });
 
 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
 });
 
