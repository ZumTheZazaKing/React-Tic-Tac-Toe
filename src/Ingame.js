export function Ingame(props){

    const winningConditions = [
        ["topLeft","top","topRight"],
        ["left","middle","right"],
        ["bottomLeft","bottom","bottomRight"],
        ["topLeft","left","bottomLeft"],
        ["top","middle","bottom"],
        ["topRight","right","bottomRight"],
        ["topLeft","middle","bottomRight"],
        ["topRight","middle","bottomLeft"]
    ]


    const handleClick = e => {
        if(props.turn !== "Your Turn"){
            return;
        } else {

            if(e.target.innerHTML !== "")return;

            e.target.innerHTML = "X";
            props.setPlayerFills([...props.playerFills, e.target.id]);

            

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
                        props.setTurn("GAME END");
                    }
                }
            }

            let indexPicker = Math.floor(Math.random()*cells.length);
            if(indexPicker === 0){indexPicker++}

            while(cells[indexPicker].innerHTML !== "" && strike !== 9){
                indexPicker = Math.floor(Math.random()*cells.length);
                if(indexPicker === 0){indexPicker++}
            }

            const computerAction = setTimeout(() => {
                props.setTurn("Your Turn");
                cells[indexPicker].innerHTML = "O";
                props.setComputerFills([...props.computerFills, cells[indexPicker].id])
            },1000)

            winningConditions.forEach(winningCondition => {
                if([...props.playerFills, e.target.id].includes(winningCondition[0])){
                    if([...props.playerFills, e.target.id].includes(winningCondition[1])){
                        if([...props.playerFills, e.target.id].includes(winningCondition[2])){
                            console.log("You win");
                            winningCondition.forEach(winningCell => {
                                ingame.querySelector(`#${winningCell}`).style.color = "green";
                            })
                            props.endgameRef.current.className = "";
                            props.setEndgameMessage("VICTORY")
                            props.setTurn("GAME END");
                            props.setWins(parseInt(props.wins) + 1);
                            localStorage.setItem("zum_tic_tac_toe_wins", parseInt(props.wins) + 1)
                            clearTimeout(computerAction);
                        }
                    }
                }
                else if ([...props.computerFills, cells[indexPicker].id].includes(winningCondition[0])){
                    if([...props.computerFills, cells[indexPicker].id].includes(winningCondition[1])){
                        if([...props.computerFills, cells[indexPicker].id].includes(winningCondition[2])){
                            if(props.turn !== "GAME END" && props.endgameRef.current.className === "hide"){
                                console.log("You lose");
                                setTimeout(() => {
                                    props.endgameRef.current.className = "";
                                    winningCondition.forEach(winningCell => {
                                        ingame.querySelector(`#${winningCell}`).style.color = "crimson";
                                    })
                                    props.setEndgameMessage("DEFEAT");
                                    props.setTurn("GAME END")
                                    props.setDefeats(parseInt(props.defeats) + 1);
                                    localStorage.setItem("zum_tic_tac_toe_defeats", parseInt(props.defeats) + 1);
                                    clearTimeout(computerAction);
                                },1100)
                            }
                        }
                    }
                }
            })

        }

    }
    

    return (<div id="ingame">
        <p>{props.turn}</p>

        <div id="cells">
            <div onClick={e => handleClick(e)} id="topLeft" ref={props.cellOneRef}></div>
            <div onClick={e => handleClick(e)} id="top" ref={props.cellTwoRef}></div>
            <div onClick={e => handleClick(e)} id="topRight" ref={props.cellThreeRef}></div>
            <div onClick={e => handleClick(e)} id="left" ref={props.cellFourRef}></div>
            <div onClick={e => handleClick(e)} id="middle" ref={props.cellFiveRef}></div>
            <div onClick={e => handleClick(e)} id="right" ref={props.cellSixRef}></div>
            <div onClick={e => handleClick(e)} id="bottomLeft" ref={props.cellSevenRef}></div>
            <div onClick={e => handleClick(e)} id="bottom" ref={props.cellEightRef}></div>
            <div onClick={e => handleClick(e)} id="bottomRight" ref={props.cellNineRef}></div>
        </div>
    </div>)
}