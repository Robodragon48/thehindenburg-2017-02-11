angular.module('app.controllers', [])
     
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('pitScoutingCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


}])
   
.controller('matchScoutingCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    
    $scope.showIfButtonClicked = function(sectionName) {
        if (sectionName == $scope.buttonClicked) {
            return true;
        }
        return false;
    }
    
    $scope.buttonClick = function(buttonName) {
        $scope.buttonClicked = buttonName;
    }

}])
   
.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 