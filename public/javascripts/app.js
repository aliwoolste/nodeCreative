angular.module('app', [])
.controller('mainCtrl', mainCtrl)
.directive('chat', chatDirective);


function mainCtrl ($scope, $http) {
    $scope.users = []; //pushing stuff into array 'users'. i need to send this info to the back end
    $scope.addNew = function(user) {
      var formData = {name: user.name,message:user.message};
      console.log(formData);
      var messageURL = 'message';
      $http({
         url: messageURL,
         method: "POST",
         data: formData
      }).success(function(data, status, headers, config) {
        console.log("Post worked");
          user.message = ''; 
      }).error(function(data, status, headers, config) {
        console.log("Post failed");
      });
    }
}


function chatDirective () {
return {
  scope: {
    user: '=' 
  },
  restrict: 'E', 
  replace: 'true',
  template: (
    '<div class="Chat1">' +
        '<h4>{{user.name}}</h4>' +
  '<h4>{{user.message}}</h4>' +
    '</div>'
  ), 
};
}

