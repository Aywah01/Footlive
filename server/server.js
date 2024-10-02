// server.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

// Create an express app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to the MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Polifoli135.',
    database: 'footlive' // Your database name
});

// Test the database connection
db.connect(err => {
    if (err) {
        console.log('Database connection failed:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// API endpoint to fetch team details
app.get('/api/teams/:id', (req, res) => {
    const teamId = req.params.id;
    const query = `SELECT * FROM TeamDetails WHERE id = ?`;
    
    db.query(query, [teamId], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
});

// API endpoint to save team details
app.post('/api/teams', (req, res) => {
    const team = req.body;
    const query = `INSERT INTO TeamDetails (id, name, code, country, founded_year, logo_url, venue_id, venue_name, venue_address, venue_city, venue_capacity, venue_surface, venue_image_url)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
    db.query(query, [
        team.id, team.name, team.code, team.country, team.founded_year, 
        team.logo_url, team.venue_id, team.venue_name, team.venue_address, 
        team.venue_city, team.venue_capacity, team.venue_surface, team.venue_image_url
    ], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send({ message: "Team details saved successfully." });
    });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
