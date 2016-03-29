'use strict';
describe('TP1AboutCtrl', function () {
  // load the controller's module
  beforeEach(module('tp1App'));
  var $controller;
  beforeEach(inject(function (_$controller_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  it('Retourne «Vrai» dans toutes les situations', function () {
    expect(true).toEqual(true);
  });

 it('Lors d une erreur le fond du message devien rouge', function () {
    var $scope = {};
    $controller('TP1AboutCtrl', { $scope: $scope });
    $scope.user.name = "";
    $scope.btnSend();
    expect($scope.alert).toEqual("alert alert-danger");
  });

  it('Nom utilisateur vide retourne un message d erreur', function () {
    var $scope = {};
    $controller('TP1AboutCtrl', { $scope: $scope });
    $scope.user.name = "";
    $scope.user.reason = "Bug trouvé"
    $scope.user.email = "exemple@fournisseur.com";
    $scope.user.message = "J'ai bien aimer votre site. Continuer comme sa!";
    $scope.btnSend();
    expect($scope.errorMessage[0]).toEqual("Nom d'utilisateur vide");
  });

  it('Raison vide retourne un message d erreur', function () {
    var $scope = {};
    $controller('TP1AboutCtrl', { $scope: $scope });
    $scope.user.name = "Alice";
    $scope.user.reason = ""
    $scope.user.email = "exemple@fournisseur.com";
    $scope.user.message = "J'ai bien aimer votre site. Continuer comme sa!";
    $scope.btnSend();
    expect($scope.errorMessage[0]).toEqual("Vous devez sélectionner une raison");
  });

  it('Adresse courriel vide retourne un message d erreur', function () {
    var $scope = {};
    $controller('TP1AboutCtrl', { $scope: $scope });
    $scope.user.name = "Alice";
    $scope.user.reason = "Bug trouvé"
    $scope.user.email = "";
    $scope.user.message = "J'ai bien aimer votre site. Continuer comme sa!";
    $scope.btnSend();
    expect($scope.errorMessage[0]).toEqual("Adresse courriel invalide");
  });

  it('Message vide retourne un message d erreur', function () {
    var $scope = {};
    $controller('TP1AboutCtrl', { $scope: $scope });
    $scope.user.name = "Alice";
    $scope.user.reason = "Bug trouvé"
    $scope.user.email = "exemple@fournisseur.com";
    $scope.user.message = "";
    $scope.btnSend();
    expect($scope.errorMessage[0]).toEqual("Message vide");
  });

  it('Tout es vide retourne plusieurs message d erreur', function () {
    var $scope = {};
    $controller('TP1AboutCtrl', { $scope: $scope });

    $scope.btnSend();
    expect($scope.errorMessage[0]).toEqual("Nom d'utilisateur vide");
    expect($scope.errorMessage[1]).toEqual("Vous devez sélectionner une raison");
    expect($scope.errorMessage[2]).toEqual("Adresse courriel invalide");
    expect($scope.errorMessage[3]).toEqual("Message vide");
  });

  it('Apres la correction de toutes les erreurs le fond du message d erreur disparait', function () {
    var $scope = {};
    $controller('TP1AboutCtrl', { $scope: $scope });

    $scope.btnSend();

    $scope.user.name = "Alice";
    $scope.user.reason = "Bug trouvé"
    $scope.user.email = "exemple@fournisseur.com";
    $scope.user.message = "J'ai bien aimer votre site. Continuer comme sa!";
    $scope.btnSend();

    expect($scope.alert).toEqual("");
  });

  it('Apres la correction de toutes les erreurs le fond du message d erreur disparait et le message de confirmation apparait', function () {
    var $scope = {};
    $controller('TP1AboutCtrl', { $scope: $scope });

    $scope.btnSend();

    $scope.user.name = "Alice";
    $scope.user.reason = "Bug trouvé"
    $scope.user.email = "exemple@fournisseur.com";
    $scope.user.message = "J'ai bien aimer votre site. Continuer comme sa!";
    $scope.btnSend();

    expect($scope.alert).toEqual("");
    expect($scope.hideSuccess).toEqual(false);
  });

});
//# sourceMappingURL=main.controller.spec.js.map
