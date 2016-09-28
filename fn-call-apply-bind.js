var JohnSnow = {
    firstName: 'John',
    surName:   'Snow'
};

function sayHello() {
    console.log( 'Hello from ' + this.firstName + ' '+ this.surName );
}

sayHello.call( JohnSnow );
sayHello.apply( JohnSnow );
(sayHello.bind( JohnSnow ))();