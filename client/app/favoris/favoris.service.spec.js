'use strict';

describe('Service: favoris', function () {

  // load the service's module
  beforeEach(module('fs3App'));

  // instantiate service
  var favoris;
  beforeEach(inject(function (_favoris_) {
    favoris = _favoris_;
  }));

  it('should do something', function () {
    expect(!!favoris).toBe(true);
  });

});
