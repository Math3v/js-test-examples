function deepEqual( obj1, obj2 ) {
    var obj1Keys = Object.keys( obj1 );
    var obj2Keys = Object.keys( obj2 );

    if( typeof obj1 !== 'object' && typeof obj2 !== 'object' ) {
        return obj1 === obj2;
    }

    if( obj1Keys.length !== obj2Keys.length ) {
        return false;
    }

    for( var i = 0; i < obj1Keys.length; i++ ) {
        var key = obj1Keys[i];

        if( obj2Keys.indexOf( key ) < 0 ) {
            return false;
        }

        if( typeof obj1[key] !== typeof obj2[key] ) {
            return false;
        }

        if( typeof obj1[key] === 'object' ) {
            return deepEqual( obj1[key], obj2[key] );
        } else {
            return obj1[key] === obj2[key];
        }
    }
}


console.log( deepEqual(2, 2) );
console.log( deepEqual(2, "2") );
console.log( deepEqual({
    x: 3,
    y: 'abc',
    z: {
        a: 2
    }
}, {
    x: 3,
    y: 'abc',
    z: {
        a: 2
    }
}));
console.log( deepEqual({
    x: 3,
    y: 'abc',
    z: {
        a: 2
    }
}, {
    x: 3,
    y: 'abc',
    z: {
        a: 1
    }
}));