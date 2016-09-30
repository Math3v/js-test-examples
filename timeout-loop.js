
// setTimeout in loop

for( var i = 0; i < 5; i++ ) {
    setTimeout(function() {
        console.log( i );
    }, 500);
}