var request = require('request');
var http    = require('http');
var fs      = require('fs');

var monthNames =  { 1 :"Jan",
                    2 : "Feb",
                    3:"Mar",
                    4: "Apr",
                    5: "May",
                    6: "June",
                    7: "July",
                    8: "Aug",
                    9: "Sep",
                    10: "Oct",
                    11: "Nov",
                    12: "Dec"};
/*
 * GET users listing.
 */

exports.search = function(req,res){
    var zipCode = req.body.zipCode;
    var url = "http://search.ams.usda.gov/FarmersMarkets/v1/data.svc/zipSearch?zip=" + zipCode;
    request({
        uri: url,
        method: "GET",
        headers:  {
            'content-type' : 'application/json',
            'charset'      : 'utf-8'
        }
}, function(error, response, body) {

      if(response.statusCode == 200 )
      {
        res.send(body);
      }

    });
};

//GET - seasonal product information
exports.getSeasonalProducts = function(req,res){

  var currentDate = new Date();
  var monthName = monthNames[currentDate.getMonth() + 1];
  var fileName = 'products.json';
  var dirname = __dirname+"/../data/"

    fs.readFile(dirname+"products.json", 'utf8', function(err, data){
        if(err){
            console.log("Could not read the file.");
            return;
        }
        products = JSON.parse(data);
        res.send(products); 
    });


  //Based on the current date.
  //Find the current month
  //Open the CSV file and parse the list.
  //Find all Products for the current month.
  //return the list to the client.
};
