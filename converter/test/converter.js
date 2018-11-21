// compare result of feature's implementation and expected result
var expect = require ("chai").expect;
var converter = require("../app/converter");


describe("Colour Code Converter", function() {
    describe("RGB to Hex conversion", function() {
        // expectations
        it("converts the basic colours", function() {
            var redHex   = converter.rgbToHex(255, 0, 0);
            var greenHex = converter.rgbToHex(0, 255, 0);
            var blueHex  = converter.rgbToHex(0, 0, 255);
            
            expect(redHex).to.equal("ff0000");
            expect(greenHex).to.equal("00ff00");
            expect(blueHex).to.equal("0000ff");
        });
    });

    describe("Hex to RGB conversion", function() {
        // expectations
        it("converts the basic colours", function() {
            var red   = converter.hexToRgb("ff0000");
            var green = converter.hexToRgb("00ff00");
            var blue  = converter.hexToRgb("0000ff");
      
            // to.deep is a matcher which matches result of feature with expected value.
            // need deep to match entire array object
            expect(red).to.deep.equal([255, 0, 0]);
            expect(green).to.deep.equal([0, 255, 0]);
            expect(blue).to.deep.equal([0, 0, 255]);
        });
    });
});