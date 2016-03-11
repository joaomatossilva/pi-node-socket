module.exports = function(io) {
    var express = require('express');
    var router = express.Router();

    /* GET home page. */
    router.get('/', function(req, res, next) {
        //res.render('index', { title: 'Express' });
        res.sendFile('index.html', { root: path.join(__dirname, '../public') });
    });

    router.post('/', function(req, res, next) {
        //res.render('index', { title: 'Express' });
        console.log(req.body);
        io.emit('pushState', { state: req.body.state })
        res.send('done');
        //res.sendFile('index.html', { root: path.join(__dirname, '../public') });
    });

    //io.on('my other event', function (socket, data) {
    //    console.log(data);
    //    socket.to("all").emit('oi', { my: 'hey' });
    //});
    return router;
}
