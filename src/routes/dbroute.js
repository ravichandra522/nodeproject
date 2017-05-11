var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;



var eventdata = [{
               name: 'Event 1',
               description: 'The first event',
               date:'2017.05.10',
               time: '2:00pm',
               duration :'one hr',
               location: {
                   street: '2117',
                   city:'terre haute',
                   state: 'IN',
                   zip:'47802',
                   lon: 0,
                   lat: 0
               },
               capacity: 50
},
               {
               name: 'Event 2',
               description: 'The Second event',
               date: '2017.05.10',
               time: '2:00pm',
               duration :'one hr',
               location: {
                   street: '123',
                   city:'terre haute',
                   state: 'IN',
                   zip:'47802',
                   lon: 0,
                   lat: 0
               },
               capacity: 50
                   
               },
               {
               name: 'Event 3',
               description: 'The third event',
               date: '2017.05.10',
               time: '2:00pm',
               duration :'one hr',
               location: {
                   street: '2117',
                   city:'terre haute',
                   state: 'IN',
                   zip:'47802',
                   lon: 0,
                   lat: 0
               },
               capacity: 50
               },
               {
               name: 'Event 4',
               description: 'The fourth event',
               date: '2017.05.10',
               time: '2:00pm',
               duration :'one hr',
               location: {
                   street: '2117',
                   city:'terre haute',
                   state: 'IN',
                   zip:'47802',
                   lon: 0,
                   lat: 0
               },
               capacity: 50

               }
               

    ];
    
    
    
dbRouter.route('/AddEventData')
.get(function(req,res){
  // res.send('Succs');
  
  var url ='mongodb://localhost:27017/eventsApp';
  mongodb.connect(url,function(err, db){
      var collection = db.collection('events');
      collection.insertMany(eventdata, function(err, result){
          res.send(result);
          db.close();
          
          
          
      });
      
      
  });
  
    });
    
module.exports = dbRouter;