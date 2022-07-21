import React from "react";
import { useSelector } from "react-redux";

function KetQuaTroChoi() {
  const { soBanThang, soBanChoi, ketQua } = useSelector((state) => state.OanTuXiReducer);
  return (
    <div className="mt-5">
      <div className="text-yellow-500 font-bold" style={{ fontSize: "40px" }}>
        {ketQua}
      </div>
      <div className="text-green-400" style={{ fontSize: "40px" }}>
        Số bàn thắng: <span className="text-yellow-500">{soBanThang}</span>
      </div>
      <div className="text-green-400" style={{ fontSize: "40px" }}>
        Tổng số bàn chơi: <span className="text-yellow-500">{soBanChoi}</span>
      </div>
    </div>
  );
}

export default KetQuaTroChoi;
