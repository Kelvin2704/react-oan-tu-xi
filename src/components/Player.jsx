import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Player() {
  const { mangChon } = useSelector((state) => state.OanTuXiReducer);
  const dispatch = useDispatch();
  console.log(mangChon);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="thinking">
        <img src={mangChon.find((item) => item.banChon === true).hinhAnh} width={100} alt="" />
      </div>
      <div className="speech-bubble"> </div>
      <img src={require("../assets/img/player.png")} alt="" width={200} height={200} />
      <div className="flex flex-row justify-between">
        {mangChon.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                dispatch({
                  type: "BAN_CHON",
                  maChon: item.ma,
                });
              }}
              className="border-2 border-green-600 w-[80px] h-[80px] flex items-center justify-center bg-white rounded-sm mx-2"
            >
              <img src={item.hinhAnh} width={60} height={60} alt="hinhAnh" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Player;
