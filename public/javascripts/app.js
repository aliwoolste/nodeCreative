angular.module('app', [])
.controller('mainCtrl', mainCtrl)
.directive('chat', chatDirective);

function mainCtrl ($scope) {

$scope.users = [];
$scope.addNew = function (user) {
$scope.users.push({ 
    name: user.name,
    message: user.message,
});
user.name = '';
  user.message = ''; 
};
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