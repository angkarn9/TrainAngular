function MyController($scope, MyFactory) {
    /*$scope.customers = [
        { name: 'Dav1', city: 'TH'},
        { name: 'Bac1', city: 'EN'},
        { name: 'Bac2', city: 'EN'}
    ];*/

    $scope.customers = MyFactory.getCustomers();

    $scope.addCustomer = function(){
        $scope.customers.push(
            {
                name : $scope.newCustomer.name,
                city : $scope.newCustomer.city
            }
        );
    };
}