app.controller('mainController', ['$scope', function($scope) {
  loadImages();

  $scope.setImage = function(index) {
    $scope.currentImageSource = $scope.imageSources[index];
  };

  function loadImages() {
    $scope.imageSources = [];
    $scope.imageSources.push('./images/snow.jpg');
    $scope.imageSources.push('./images/colors.jpg');
    $scope.imageSources.push('./images/MIT.jpg');
    $scope.imageSources.push('./images/sunset.jpg');

    $scope.currentImageSource = $scope.imageSources[0];
  }
}]);
