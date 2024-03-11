// index.js

const readline = require('readline');

// Tạo interface để đọc dữ liệu từ terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Hàm nhập vào 5 số và tính tổng của chúng
function addFiveNumbers() {
  const numbers = [];

  function inputNumber(index) {
    rl.question(Nhập số thứ ${index + 1}: , (input) => {
      const number = parseFloat(input);

      // Kiểm tra xem đầu vào có phải là số hợp lệ hay không
      if (!isNaN(number)) {
        numbers.push(number);

        // Nếu đã nhập đủ 5 số, tính tổng và hiển thị kết quả
        if (numbers.length === 5) {
          const sum = numbers.reduce((acc, curr) => acc + curr, 0);
          console.log(Tổng của 5 số là: ${sum});
          rl.close();
        } else {
          // Nếu chưa đủ, tiếp tục nhập số tiếp theo
          inputNumber(index + 1);
        }
      } else {
        console.log('Vui lòng nhập một số hợp lệ.');
        // Nếu đầu vào không hợp lệ, yêu cầu nhập lại số đó
        inputNumber(index);
      }
    });
  }

  // Bắt đầu nhập số
  inputNumber(0);
}

// Bắt đầu chương trình
addFiveNumbers();
