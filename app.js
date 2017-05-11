var express = require('express');
var app = express();
var dbRouter = require('./src/routes/dbroute');

var port = process.env.PORT;
var eventRouter = require('./src/routes/eventRoutes');

app.use(express.static('public'));
app.use(express.static('bower_components'))


app.set('views', './src/views');
app.set('view engine','ejs');


app.use('/Events', eventRouter )
app.use('/Db', dbRouter);

app.get('/', function(req, res){
    //res.send('ravi hi');
    res.render('index',{ list: ['first val', 'second val','third val'],
                nav: [{Link: 'Services', Text: 'Services'},
                {Link: 'Portfolio',Text: 'Portfolio'},
                {Link: 'About',Text: 'About'},
                {Link: 'Team',Text:'Team'},
                {Link: 'Contact',Text:'Contact'},
                {Link: 'Events' , Text: 'Events'}
                
                ]
    });
});




app.get('/routing', function(req, res){
    res.send('ravi hi Routing');
});


app.listen(port, function(err){
    console.log('The server is running on port :' +port);
    
});