var request = require('request');
var http    = require('http');
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
          if( body.results ){

              res.send(body.results);
          }

      }

});

};