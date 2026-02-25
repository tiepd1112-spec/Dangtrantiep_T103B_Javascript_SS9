let names = ["Laptop", "Chuột", "Bàn phím", "Tai nghe", "Màn hình"];
let prices = [1500, 200, 350, 500, 3000];
let stocks = [5, 0, 10, 3, 2];
//code case 1
const filterHighEndProducts = () => {
  let result = names.filter((name, i) => prices[i] > 500);

  if (result.length == 0) {
    alert("Không có sản phẩm nào giá trên 500");
  } else {
    alert("Sản phẩm cao cấp:\n" + result.join(", "));
  }
};

// code case 2 
const checkStockStatus = () => {
  let hasOutOfStock = stocks.some(stock => stock === 0);
  let allAbove100 = prices.every(price => price > 100);

  alert(
    "Có sản phẩm hết hàng: " + (hasOutOfStock ? "CÓ" : "KHÔNG") +
    "Tất cả sản phẩm > 100: \n" + (allAbove100 ? "CÓ" : "KHÔNG")
  );
};
// code case 3 
const calculateTotalValue = () => {
  let sum = prices.reduce((acc, price, index) => {
    return acc + price * stocks[index];
  }, 0);
  return sum;
};

let totalValue = calculateTotalValue();
alert("Tổng giá trị kho hàng: " + totalValue);

// code case 4
const applyDiscount = () => {
  prices = prices.map(price => price * 0.9);
  alert("Đã giảm giá 10% cho tất cả sản phẩm");
};

let choice;

do {
  choice = prompt(`
===== QUẢN LÝ KHO HÀNG =====
1. Lọc sản phẩm cao cấp (giá > 500)
2. Kiểm tra trạng thái kho
3. Tính tổng giá trị kho
4. Giảm giá 10%
5. Tìm sản phẩm theo tên
6. Báo cáo tồn kho
7. Thoát chương trình
Nhập lựa chọn (1-7):
`);

  switch (choice) {
    case "1":
      filterHighEndProducts();
      break;
    case "2":
      checkStockStatus();
      break;
    case "3":
      calculateTotalValue();
      break;
    case "4":
      applyDiscount();
      break;
    case "5":
      break;
    case "6":
      break;
    case "7":
      alert("Đã thoát chương trình");
      break;
    default:
      alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
  }
} while (choice !== "7");
