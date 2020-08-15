const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const Playlist = require('./src/models/ormModel');
//const routes = require('./src/routes/ormRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

//bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//routes(app);

//GET request to check if the server is up and running
app.get('/', (req, res) => {
    res.send(`Node and express server running on port ${PORT}`);
});


//get all playlists
app.get('/api/playlists', (req, res) => {
    Playlist.findAll().then((playlists) => {
        res.json(playlists);
    });
});

//post a new playlist
app.post('/api/playlists', (req, res) => {
    Playlist.create(req.body)
    .then(playlist =>
        res.json(playlist));
});

app.route('/api/playlists/:id')
    //get a specific playlist
    .get((req, res) => {
        Playlist.findByPk(req.params.id)
        .then(playlist => {
            if(playlist)
                res.json(playlist);
            else
                res.status(404).send();
        });
    })

    //update a specific playlist
    .put((req, res) => {
        Playlist.update({name: req.body.name}, {
            returning: true, where: {
                id: req.params.id
            }
        }).then(playlist =>
                res.json({message: "successfully updated playlist"}));
    })

    //delete a specific playlist
    .delete((req, res) => {
        Playlist.destroy({
            where: {
                id: req.params.id
            }
        }).then(playlist =>
                res.json({message: "successfully deleted playlist"}));
    });


app.listen(PORT, (req, res) => {
    console.log(`Your server is running on port ${PORT}`);
});
