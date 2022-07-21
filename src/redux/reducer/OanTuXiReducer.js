const stateDefault = {
  mangChon: [
    { ma: "keo", hinhAnh: require("../../assets/img/keo.png"), banChon: true },
    { ma: "bua", hinhAnh: require("../../assets/img/bua.png"), banChon: false },
    { ma: "bao", hinhAnh: require("../../assets/img/bao.png"), banChon: false },
  ],
  ketQua: "I love u 3000 <3 <3",
  soBanThang: 0,
  soBanChoi: 0,
  computer: {
    ma: "keo",
    hinhAnh: require("../../assets/img/bao.png"),
  },
};

const OanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "BAN_CHON": {
      let mangChonUpdate = [...state.mangChon];
      mangChonUpdate = mangChonUpdate.map((item, index) => {
        if (item.ma === action.maChon) {
          return { ...item, banChon: true };
        }
        return { ...item, banChon: false };
      });
      state.mangChon = mangChonUpdate;
      return { ...state };
    }
    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let itemNgauNhien = state.mangChon[soNgauNhien];
      state.computer = itemNgauNhien;
      // console.log("random",action)
      return { ...state };
    }
    case "GAME_RULE": {
      let player = state.mangChon.find((item) => item.banChon === true);
      let computer = state.computer;
      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hòa rồi, chơi lại nha";
          } else if (computer.ma === "bua") {
            state.ketQua = "Aish, thua rồi";
          } else {
            state.ketQua = "Hehe, thắng rồi nha";
            state.soBanThang += 1;
          }
          break;
        case "bua":
          if (computer.ma === "keo") {
            state.ketQua = "Hehe, thắng rồi nha, liu liu";
            state.soBanThang += 1;
          } else if (computer.ma === "bua") {
            state.ketQua = "Hòa rồi, chơi lại nha";
          } else {
            state.ketQua = "Aishh, chết tiệt thua rồi";
          }
          break;
        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "Aishh, chết tiệt thua rồi";
          } else if (computer.ma === "bua") {
            state.ketQua = "Hehe, thắng rồi nha, liu liu";
            state.soBanThang += 1;
          } else {
            state.ketQua = "Hòa rồi, chơi lại nha";
          }
          break;
        default:
          state.ketQua = "I Love U 3000 !!!";
          return { ...state };
      }
      state.soBanChoi += 1;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default OanTuXiReducer;
