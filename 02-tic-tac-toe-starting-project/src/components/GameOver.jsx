export default function GameOver({winner}){
    console.log(winner)
    return (
        <div id="game-over">
            <h2>Game over!</h2>
            {winner ? <p>{winner} is winner!</p> : <p>Match draw! </p>}
            <p><button onClick={() => location.reload()}>Rematch!</button></p>
        </div>
    );
}