import React from "react";
import { useSelector } from "react-redux";

function Computer() {
  const { computer } = useSelector((state) => state.OanTuXiReducer);
  let keyframe = `@keyframes randomItem${Date.now()}{
    0% {top:-50px;}
    25% {top:100px;}
    50% {top:-50px;}
    75% {top:100px;}
    100% {top:0;}
  }`;
  return (
    <div className="flex flex-col items-center justify-center">
      <style>{keyframe}</style>
      <div className="thinking relative">
        <img src={computer.hinhAnh} width={100} className="absolute" style={{ animation: `randomItem${Date.now()} 0.5s` }} alt="" />
      </div>
      <div className="speech-bubble"> </div>
      <img src={require("../assets/img/playerComputer.png")} alt="" width={200} height={200} />
    </div>
  );
}

export default Computer;
