document.addEventListener( "DOMContentLoaded", () => {
    let squares = document.querySelectorAll( ".square" );
    squares.forEach( ( square ) => {
        square.addEventListener( 'click', handleClick );
    } );
} );

function handleClick ( event ) {
    if ( handleMove( event.target.id ) ) {
        setTimeout( () => {
            var winner = document.getElementById( 'winner' );
            winner.innerHTML = `Fim de Jogo!`;
        }, 15 );
    };
    updateSquares();
}

function updateSquares () {
    let squares = document.querySelectorAll( ".square" );
    squares.forEach( ( square ) => {
        let position = square.id;
        let symbol = board[position];
        if ( symbol != "" ) {
            square.innerHTML = `<div class ='${symbol}'></div>`;
        }
    } );

}
addEventListener( "click", ( e ) => {
    if ( e.target.id == "restart" ) {
        window.location.reload();
    }
} );