angular.module('blogDetalhes', []).controller('detalhesController', function($scope, $http) {
    console.log(window.location.search);
    let params = new URLSearchParams(window.location.search);
    let index = params.get('index');
    console.log(index);
    if (index !== undefined) {
        $http.get(`https://api-rest-post-diegocandido.herokuapp.com/postagem/${index}`)
            .then(function(response) {
                console.log(response.data);
                $scope.selectedPost = response.data;
            })
            .catch(function(error) {
                console.error('Error fetching data:', error);
            });
    }
});
