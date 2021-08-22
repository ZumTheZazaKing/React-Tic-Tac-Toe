import { useEffect } from "react";

export function Ingame(props){

    const handleClick = e => {
        if(props.turn !== "Your Turn"){
            return;
        } else {

            if(e.target.innerHTML !== "")return;

            e.target.innerHTML = "X";
            props.setTurn("Computer's Turn");

            const ingame = document.querySelector("#ingame");
            const cells = ingame.querySelectorAll("div");

            let strike = 0;

            for(var i = 1; i < cells.length; i++){
                if(cells[i].innerHTML !== ""){
                    strike++;
                    if(strike === 9){
                        props.endgameRef.current.className = "";
                        props.setEndgameMessage("DRAW");
                        return;
                    }
                }
            }

            let indexPicker = Math.floor(Math.random()*cells.length);
            if(indexPicker === 0){indexPicker++}

            while(cells[indexPicker].innerHTML !== ""){
                indexPicker = Math.floor(Math.random()*cells.length);
                if(indexPicker === 0){indexPicker++}
            }

            setTimeout(() => {
                props.setTurn("Your Turn");
                cells[indexPicker].innerHTML = "O";
            },1000)

        }

    }
    

    return (<div id="ingame">
        <p>{props.turn}</p>

        <div id="cells">
            <div onClick={e => handleClick(e)} id="topLeft" ref={props.cellRef}></div>
            <div onClick={e => handleClick(e)} id="top" ref={props.cellRef}></div>
            <div onClick={e => handleClick(e)} id="topRight" ref={props.cellRef}></div>
            <div onClick={e => handleClick(e)} id="left" ref={props.cellRef}></div>
            <div onClick={e => handleClick(e)} id="middle" ref={props.cellRef}></div>
            <div onClick={e => handleClick(e)} id="right" ref={props.cellRef}></div>
            <div onClick={e => handleClick(e)} id="bottomLeft" ref={props.cellRef}></div>
            <div onClick={e => handleClick(e)} id="bottom" ref={props.cellRef}></div>
            <div onClick={e => handleClick(e)} id="bottomRight" ref={props.cellRef}></div>
        </div>
    </div>)
}