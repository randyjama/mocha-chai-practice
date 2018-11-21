// uses chai
var expect = require("chai").expect;
// required to test HTTP requests
var request = require("request");

describe("Color Code Converter API", function() {

  describe("RGB to Hex conversion", function() {
    // store full path to resource we want to test in a var
    var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";
    it("returns status 200", function(done) {
        // request uses REQUEST package with 2 args: url to visit, function to be invoked when request completes
        request(url, function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
      });
    });

    it("returns the color in hex", function(done) {
      console.log("just anything just type something");

        request(url, function(error, response, body) {
          console.log("WHY WOULD YOU WAAAAIN");
            expect(body).to.equal("ffffff");
            done();
          });
        });
    });
  
  describe("Hex to RGB conversion", function() {
    var url = "http://localhost:3000/hexToRgb?hex=00ff00";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the color in RGB", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("[0,255,0]");
        done();
      });
    });
  });

});