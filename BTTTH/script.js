const squad = [
    ["Nguyen Van A", 10, "FW"],
    ["Tran Van B", 5, "MF"],
    ["Le Van C", 2, "DF"],
    ["Pham Van D", 12, "FW"],
    ["Hoang Van E", 0, "GK"],
    ["Dang Van F", 7, "MF"]
];
let choice;
const displayMenu = () => {
    const choice = +prompt(`
 --- QUẢN LÝ ĐỘI BÓNG ---
1. Xem danh sách
2. Tìm kiếm (Find)
3. Lọc vị trí (Filter)
4. Tổng bàn thắng (Reduce)
5. Kiểm tra hiệu suất (Some/Every)
0. Thoát
        `);
};

do {
    displayMenu();
    switch(key) {
        case 1:
            //code case 1 
            break;
        case 2:
            //code case 2
            break;
        default:
            break;

    }
} while (choice != 0);

//Code hàm 1 
const displayListPerson = (listPlayer) => {
    listPlayer.forEach((player) => {
  console.log(`${player[0]} (${player[2]} ) : ${player[1]} bàn thắng`)
    });
};