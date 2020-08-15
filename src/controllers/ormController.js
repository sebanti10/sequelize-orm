const Sequelize = require('sequelize');



//1. Passing a connection URI (for sqlite)
module.exports = new Sequelize('sqlite:chinook.db');

//2. Passing parameters separately (for other dialects)
/*module.exports = new Sequelize('chinook', process.env.USERNAME, '', {
    host: 'localhost',
    // one of 'mysql' | 'mariadb' | 'postgres' | 'mssql'
    dialect: 'mysql'
});*/





















/*
//get all playlists
const getPlaylists = (req, res) => {
    Playlist.findAll().
    then(playlists =>
        res.json(playlists));
}

//post a new playlist
const addNewPlaylist = (req, res) => {
    Playlist.create(req.body)
    .then(playlist =>
        res.json(playlist));
}


//get a specific playlist
const getPlaylistWithID = (req, res) => {
    Playlist.findByPk(req.params.id)
    .then(playlist => {
        if(playlist)
            res.json(playlist);
        else
            res.status(404).send();
    });
}

//update a specific playlist
const updatePlaylist = (req, res) => {
    Playlist.update({
        name: req.body.name
    }, {
        returning: true, 
        where: {
            id: req.params.id
        }
    }).then(playlist =>
            res.json({message: "successfully updated playlist"}));
}

//delete a specific playlist
const deletePlaylist = (req, res) => {
    Playlist.destroy({
            where: {
                id: req.params.id
            }
        }).then(playlist =>
                res.json({message: "successfully deleted playlist"}));
}

module.exports = {
    getPlaylists,
    addNewPlaylist,
    getPlaylistWithID,
    updatePlaylist,
    deletePlaylist
};*/