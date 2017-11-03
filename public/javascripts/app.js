var app = window.angular.module('app', [])

app.factory('messageFetcher', messageFetcher)
app.controller('mainCtrl', mainCtrl)

function messageFetcher ($http) {

  var API_ROOT = 'message'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }

}

function mainCtrl ($scope, messageFetcher, $http) {

  $scope.message = []

  messageFetcher.get()
    .then(function (data) {
      $scope.message = data
    })

  $scope.addMes = function() {
    var formData = {name:$scope.Name,mes:$scope.Mes};
    console.log(formData);
    var mesURL = 'message';
    $http({
       url: mesURL,
       method: "POST",
       data: formData
    }).success(function(data, status, headers, config) {
      console.log("Post worked");
    }).error(function(data, status, headers, config) {
      console.log("Post failed");
    });
    function refresh() {
      window.location.reload();
    }
    refresh();
  }
}


/*angular.module('app', [])
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
*/
