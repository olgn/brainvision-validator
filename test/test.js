var expect = require("chai").expect;
var path = require("path");
var validator = require("../validator.js");

describe("Assert BrainVision Triplet", function(){
    it("will return true.", function() {
        var vhdrPath = path.join(__dirname, 'data/test.vhdr');
        var foundTriplet = validator.assertBVTriplet(vhdrPath);
        expect(foundTriplet).to.equal(true);
    });
});
