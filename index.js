//requires the express.js npm install
var express = require('express');
var app = express();
//require the pg database module
const { Client } = require('pg');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//sets EJS as the view engine
app.set('view engine', 'ejs');

//require the node.js file system module
var fs = require('fs');
var files = fs.readdirSync('public/music/');

//Create database connect file for it's self
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'project_music_player',
    password: 'password',
    port: 5432,
})

client.connect()
    //creates the database if it doesnt exist with id and songs
client.query(`
    CREATE TABLE IF NOT EXISTS "playlists" (
        "id" SERIAL,
        "songs" text[],
        "name" text,
        PRIMARY KEY ("id")
    );`, (err, res) => {
        console.log(err, res)
        client.end()
    })
    //Doing this songs list may lead to the memory may run out if there are too many songs

app.post('/create/playlist', function(req, res) {
    const name = req.body.playlist_name
    const songs = req.body.playlist_song
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'project_music_player',
        password: 'password',
        port: 5432,
    })
    client.connect()
        // update playlists
    client.query(`
        INSERT INTO playlists(name,songs) VALUES('${name}' ,'{${songs}}'); 
       `, (err, res) => {
        console.log(err, res)
        client.end()
    })
    res.send('POST request to the homepage')
})


//Used to serve static assests (using CSS Javascript Images with a public directory)
app.use(express.static("public"));
app.get("/", function(req, res) {
    //Sends the file to the user domain
    res.render('index', { files: files });
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("At http://%s:%s", host, port)
})