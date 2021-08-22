export function Navbar(props){
    return (<div id="navbar">
        <p>Wins: {props.wins}</p>
        <p>Defeats: {props.defeats}</p>
    </div>)
}