'use strict';
describe('TPCtrl', function () {
  // load the controller's module
  beforeEach(module('tpApp'));
  var TPMainCtrl, httpBackend, scope;
  beforeEach(inject(function ($controller, $httpBackend, $rootScope) {
    scope = $rootScope.$new();
    httpBackend =$httpBackend;
    TPMainCtrl = $controller('TPMainCtrl', {
      $scope: scope
    });
  }));
  it('should request movies to omdbapi when showMovies() is called', function () {
    //Définition des réponses du serveur
    httpBackend.when('GET','https://www.omdbapi.com/?&s=the&type=movie&y=2016').respond(200, {"Search":[{"Title":"The 5th Wave","Year":"2016","imdbID":"tt2304933","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjQwOTc0Mzg3Nl5BMl5BanBnXkFtZTgwOTg3NjI2NzE@._V1_SX300.jpg"}],"totalResults":"4526","Response":"True"});
    httpBackend.expect('GET', 'https://www.omdbapi.com/?&s=the&type=movie&y=2016');
    //Appelle la fonction à tester
    scope.showMovies();
    //Exécute les requêtes en attente
    httpBackend.flush();
  });
});
