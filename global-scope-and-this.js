var foo = 3;

(function (){
    var foo;

    this.foo = 5;

    console.log( foo );
})();

console.log( foo );