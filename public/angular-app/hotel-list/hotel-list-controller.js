angular.module('meanhotel').controller("Hotelcontroller",HotelsController);

function HotelsController($http){
    var vm = this;
    vm.title = 'MEAN Hotel App';
    $http.get('/api/hotels').then(function(respose){
        console.log(respose);
    });
}