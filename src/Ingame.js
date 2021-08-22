import { useEffect } from "react"

export function Ingame(props){

    const handleClick = e => {
        console.log(e.target) 

    }
    

    return (<div id="ingame">
        <p>{props.turn}</p>

        <div id="cells">
            <div onClick={e => handleClick(e)} id="topLeft"></div>
            <div onClick={e => handleClick(e)} id="top"></div>
            <div onClick={e => handleClick(e)} id="topRight"></div>
            <div onClick={e => handleClick(e)} id="left"></div>
            <div onClick={e => handleClick(e)} id="middle"></div>
            <div onClick={e => handleClick(e)} id="right"></div>
            <div onClick={e => handleClick(e)} id="bottomLeft"></div>
            <div onClick={e => handleClick(e)} id="bottom"></div>
            <div onClick={e => handleClick(e)} id="bottomRight"></div>
        </div>
    </div>)
}