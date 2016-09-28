// Write a simple JAVA-like iterator
// Example usage
// var it = new Iterator( [1, 2, 3] );
// while( it.hasNext() ) {
//     console.log( it.getNext() );
// }

var Iterator = function( values ) {
    var _values = values.slice();
    var _currentIndex = 0;

    this.hasNext = function() {
        return _currentIndex < _values.length;
    }

    this.getNext = function() {
        return _values[_currentIndex++];
    }
}

var it = new Iterator( [1, 2, 3] );

while( it.hasNext() ) {
    console.log( it.getNext() );
}
