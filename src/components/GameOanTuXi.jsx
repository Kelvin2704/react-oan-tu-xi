import React from "react";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";
import Player from "./Player";
import bgImage from "../assets/img/bgGameOanTuXi.png";
import { useDispatch } from "react-redux";

function GameOanTuXi() {
  const dispatch = useDispatch()
  const randomItem = () => {
    let count = 0;
    let randomComputerItem = setInterval(()=>{
      dispatch({
        type:"RAN_DOM"
      });
      count++;
      if(count > 15) {
        clearInterval(randomComputerItem);
        dispatch({
          type:"GAME_RULE"
        })
      }
    })
  }

  return (
    <div className="gameOanTuXi fixed w-full h-screen z-0" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "100%" }}>
      <div className="grid grid-cols-3 text-center mt-4 text-white">
        <div className="">
          <Player />
        </div>
        <div>
          <KetQuaTroChoi />
          <button onClick={randomItem}
            className="bg-green-600 mt-4 p-2 rounded-sm"
            
          >
            Play Game
          </button>
        </div>
        <div>
          <Computer />
        </div>
      </div>
    </div>
  );
}

export default GameOanTuXi;
