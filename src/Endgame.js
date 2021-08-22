export function Endgame(props){
    return (<div id="endgame" className="hide" ref={props.endgameRef}>
        <p>{props.endgameMessage}</p>
        <button onClick={e => props.playAgain(e)}>PLAY AGAIN</button>
    </div>)
}