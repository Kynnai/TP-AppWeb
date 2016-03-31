'use strict';
describe('TP1RegistrationCtrl', function () {
  // load the controller's module
  beforeEach(module('tpApp'));
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
    $controller('TP1RegistrationCtrl', { $scope: $scope });
    $scope.user.name = "";
    $scope.btnSubmit();
    expect($scope.alert).toEqual("alert alert-danger");
  });

  it('Prenom utilisateur vide retourne un message d erreur', function () {
    var $scope = {};
    $controller('TP1RegistrationCtrl', { $scope: $scope });
    $scope.user.firstName = "";
    $scope.user.name = "Ly";
    $scope.user.email = "exemple@fournisseur.com";
    $scope.user.password = "Qwerty123";
    $scope.user.confPassword = "Qwerty123";
    $scope.btnSubmit();
    expect($scope.errorMessage[0]).toEqual("Prénom d'utilisateur vide");
  });

  it('Nom utilisateur vide retourne un message d erreur', function () {
    var $scope = {};
    $controller('TP1RegistrationCtrl', { $scope: $scope });
    $scope.user.firstName = "Alice";
    $scope.user.name = "";
    $scope.user.email = "exemple@fournisseur.com";
    $scope.user.password = "Qwerty123";
    $scope.user.confPassword = "Qwerty123";
    $scope.btnSubmit();
    expect($scope.errorMessage[0]).toEqual("Nom d'utilisateur vide");
  });

  it('Adresse courriel vide retourne un message d erreur', function () {
    var $scope = {};
    $controller('TP1RegistrationCtrl', { $scope: $scope });
    $scope.user.firstName = "Alice";
    $scope.user.name = "Ly";
    $scope.user.email = "";
    $scope.user.password = "Qwerty123";
    $scope.user.confPassword = "Qwerty123";
    $scope.btnSubmit();
    expect($scope.errorMessage[0]).toEqual("Adresse courriel invalide");
  });

  it('Mot de passe vide retourne un message d erreur', function () {
    var $scope = {};
    $controller('TP1RegistrationCtrl', { $scope: $scope });
    $scope.user.firstName = "Alice";
    $scope.user.name = "Ly";
    $scope.user.email = "exemple@fournisseur.com";
    $scope.user.password = "";
    $scope.user.confPassword = "Qwerty123";
    $scope.btnSubmit();
    expect($scope.errorMessage[0]).toEqual("Mot de passe vide");
  });

  it('Confirmation mot de passe vide retourne un message d erreur', function () {
    var $scope = {};
    $controller('TP1RegistrationCtrl', { $scope: $scope });
    $scope.user.firstName = "Alice";
    $scope.user.name = "Ly";
    $scope.user.email = "exemple@fournisseur.com";
    $scope.user.password = "Qwerty123";
    $scope.user.confPassword = "";
    $scope.btnSubmit();
    expect($scope.errorMessage[0]).toEqual("Confirmation mot de passe vide");
  });

  it('Confirmation mot de passe different du mot de passe retourne un message d erreur', function () {
    var $scope = {};
    $controller('TP1RegistrationCtrl', { $scope: $scope });
    $scope.user.firstName = "Alice";
    $scope.user.name = "Ly";
    $scope.user.email = "exemple@fournisseur.com";
    $scope.user.password = "Qwerty123";
    $scope.user.confPassword = "Qwerty124";
    $scope.btnSubmit();
    expect($scope.errorMessage[0]).toEqual("La confirmation du mot de passe n'est pas identique au mot de passe choisis");
  });

  it('Tout es vide retourne plusieurs message d erreur', function () {
    var $scope = {};
    $controller('TP1RegistrationCtrl', { $scope: $scope });

    $scope.btnSubmit();
    expect($scope.errorMessage[0]).toEqual("Prénom d'utilisateur vide");
    expect($scope.errorMessage[1]).toEqual("Nom d'utilisateur vide");
    expect($scope.errorMessage[2]).toEqual("Adresse courriel invalide");
    expect($scope.errorMessage[3]).toEqual("Mot de passe vide");
    expect($scope.errorMessage[4]).toEqual("Confirmation mot de passe vide");
  });

  it('Apres la correction de toutes les erreurs le fond du message d erreur et les messages disparait', function () {
    var $scope = {};
    $controller('TP1RegistrationCtrl', { $scope: $scope });

    $scope.btnSubmit();

    var $scope = {};
    $controller('TP1RegistrationCtrl', { $scope: $scope });
    $scope.user.firstName = "Alice";
    $scope.user.name = "Ly";
    $scope.user.email = "exemple@fournisseur.com";
    $scope.user.password = "Qwerty123";
    $scope.user.confPassword = "Qwerty123";
    $scope.btnSubmit();

    expect($scope.alert).toEqual("");
  });

  it('Apres la correction de toutes les erreurs le fond du message d erreur disparait et le message de confirmation apparait', function () {
    var $scope = {};
    $controller('TP1RegistrationCtrl', { $scope: $scope });

    $scope.btnSubmit();

    var $scope = {};
    $controller('TP1RegistrationCtrl', { $scope: $scope });
    $scope.user.firstName = "Alice";
    $scope.user.name = "Ly";
    $scope.user.email = "exemple@fournisseur.com";
    $scope.user.password = "Qwerty123";
    $scope.user.confPassword = "Qwerty123";
    $scope.btnSubmit();

    expect($scope.alert).toEqual("");
    expect($scope.hideSuccess).toEqual(false);
  });

});
