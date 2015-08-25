app.controller('mainController', ['$scope', function($scope) {
  loadImages();

  $scope.setImage = function(index) {
    //$scope.currentImageSource = $scope.imageSources[index];
    document.getElementById('slide').src = $scope.slideImages[index].src;
    //alert('Source set to ' + $scope.slideImages[index].src);
  };

  function loadImages() {
    $scope.slideImages = [];
    $scope.slideImages.push(new Image());
    $scope.slideImages[0].src = ('./images/MIT.jpg');
    $scope.slideImages.push(new Image());
    $scope.slideImages[1].src = ('./images/snow.jpg');
    $scope.slideImages.push(new Image());
    $scope.slideImages[2].src = ('./images/sunset.jpg');
  }

  $scope.toggleBold = function(index) {
    var buttons = $('.slide-button');
    buttons.removeClass('bold');
    buttons[index].className = buttons[index].className + ' bold';
  };
}]);

$(document).ready(function() {  //set the first slide button to selected
  var firstButton = $('.slide-button')[0];
  firstButton.className = firstButton.className + ' bold';
  $('.button-collapse').sideNav();

  // sets the correct offset (accounts for both mobile and desktop versions)
  var offset = $('.nav-wrapper').height();

  $('.side-nav').css('margin-top', offset);
});
