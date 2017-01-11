function MyFactory(){
    var factory = {};
    var customers = [
        { name: 'TTT1', city: 'TH'},
        { name: 'TTT2', city: 'EN'},
        { name: 'TTT3', city: 'EN'}
    ];
    factory.getCustomers = function(){
        return customers;
    }

    return factory;
}