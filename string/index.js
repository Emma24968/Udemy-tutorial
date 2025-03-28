const address={ 
    street:  '23 brooklyn redder',
    city: 'Newyork',
    zipCode: '12345',

};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key])
}
    showAddress(address)
