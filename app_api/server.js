
/******************************************************************************
/******** Don't neeed to change any of the following  ********************************
**** This is a simple to user server 
*********************************************************************************/
/******* waw-st --- (2)  ***

this file will contain the content that will be handeled by the server and should be integrated with express  ******/

var express  = require('express');
var app      = express();
var http = require('http');
var path = require('path');   /// node module that 
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var morgan       = require('morgan');
var wawform = require ('./waw-form/wawForm.routes');
var appConfig = require ('./config/app.config.js');

//////////////// 

////******* server routes   *******/

app.use(bodyParser.json());   // get data in json format
app.use('/wawForm', wawform);


/** * Create HTTP server. */

var server = http.createServer(app);

///*** VIP :::: this should be added at the end  ************/
/*** Dfault reply from server with the rout after all other routes so you can get the get requests from them****/
app.use(express.static(path.join(__dirname, appConfig.client_folder)));// require the files for client  static assets 
app.get('/*', function(req, res) {
res.sendFile(appConfig.index_file); // the default html page for the site 
        });


/** * Listen on provided port, on all network interfaces. */

server.listen(3000, function() {
   console.log('Server listening on port 3000');
});



module.exports = app ;