// Bài 1: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.

// while(a.length !== 10 || );
// let a = [];
// for (let i = 0; i < 10; i++) {
//   let n = +prompt(`moi ban nhap phan tu thu ${i}`);
//   while (!Number.isInteger(n)) {
//     n = +prompt(`Phan tu khong hop le moi ban nhap lai phan tu thu ${i}`);
//   }
//   a.push(n);
// }
// console.log(a);

// let count = 0;
// for (let j = 0; j < 10; j++) {
//   if (a[j] >= 10) {
//     count++;
//   }
// }
// console.log(count);
// ========================================================================================
// Bài 2: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử khác nhau. Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.

// let a = [];
// for (let i = 0; i < 10; i++) {
//   let n = +prompt(`moi ban nhap phan tu thu ${i}`);
//   while (!Number.isInteger(n) || a.indexOf(n) !== -1) {
//     n = +prompt(`Phan tu khong hop le moi ban nhap lai phan tu thu ${i}`);
//   }
//   a.push(n);
// }
// console.log(a);
// let max = a[0];
// for (let j = 1; j < 10; j++) {
//   if (max < a[j]) {
//     max = a[j];
//   }
// }
// console.log(max);
// ========================================================================================

// Bài 3: Viết chương trình khởi tạo nhập vào một mảng số nguyên. Hiển hiện giá trị lớn nhất trong mảng đó và giá trị trung bình của các phần tử trong mảng.
// let a = [2, 3, 4, 5, 6, 7, 8, 9];
// let max = a[0];
// let sum = 0;
// for (let i = 1; i < a.length; i++) {
//   if (max < a[i]) {
//     max = a[i];
//   }
//   sum += a[i];
// }
// console.log(`gia tri lon nhat cua mang la ${max}`);
// console.log(`Gia tri trung binh cua mang la ${sum / a.length}`);

// ========================================================================================

// Bài 4: Viết chương trình khởi tạo nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó.
// let a = [2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i <= a.length / 2; i++) {
//   let x = a[i];
//   a[i] = a[a.length - 1 - i];
//   a[a.length - 1 - i] = x;
// }
// console.log(a);
// ========================================================================================

// Bài 5: Viết chương trình đếm số nguyên âm trong một chuỗi.
// let a = [2, 3, 4, -5, 6, 7, -8, -9];
// let count = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] < 0) {
//     count++;
//   }
// }
// console.log(`Mang a co ${count} phan tu am`);
// ========================================================================================

// Bài 6: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. Nhập phần tử số nguyên và tìm xem số đó có nằm trong mảng số nguyên không? Nếu có thuộc mảng số nguyên thì in ra "Number X is in the array" còn lại in ra "Number X is not in the array".
// tạo 1 biến check
// let a = [];
// for (let i = 0; i < 10; i++) {
//   let n = +prompt(`moi ban nhap phan tu thu ${i}`);
//   while (!Number.isInteger(n)) {
//     n = +prompt(`Phan tu khong hop le moi ban nhap lai phan tu thu ${i}`);
//   }
//   a.push(n);
// }
// console.log(a);

// let x = +prompt(`moi ban nhap mot so nguyen`);
// while(!Number.isInteger(x)){
//      x = +prompt(`gia tri khong hop le moi ban nhap lai`);
// }
// if(a.indexOf(x) !== -1){
//     console.log(`${x} thuoc mang a`)
// }

// ========================================================================================

// Bài 7: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. Nhập phần tử số nguyên và kiểm tra xem số đó có thuộc mảng đã cho không? Nếu có thuộc mảng đã cho xoá số đó khỏi mảng.
// Gợi ý: Việc xoá ở đây tức là dịch phần tử ở bên phải số đã nhập sang vị trí của số đó, và gán 0 cho phần tử cuối cùng của mảng.
// let a = [];
// for (let i = 0; i < 10; i++) {
//   let n = +prompt(`moi ban nhap phan tu thu ${i}`);
//   while (!Number.isInteger(n)) {
//     n = +prompt(`Phan tu khong hop le moi ban nhap lai phan tu thu ${i}`);
//   }
//   a.push(n);
// }
// console.log(a);

// let x = +prompt(`moi ban nhap mot so nguyen`);
// while (!Number.isInteger(x)) {
//   x = +prompt(`gia tri khong hop le moi ban nhap lai`);
// }
// if (a.indexOf(x) !== -1) {
//   a.splice(a.indexOf(x), 1);
//   a.push(0);
// }
// console.log(a);

// ========================================================================================

// Bài 8: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.

// let a = [1, 3, -4, 5, -6, 7, 8];
// for (let i = 0; i < 10; i++) {
//   let n = +prompt(`moi ban nhap phan tu thu ${i}`);
//   while (!Number.isInteger(n)) {
//     n = +prompt(`Phan tu khong hop le moi ban nhap lai phan tu thu ${i}`);
//   }
//   a.push(n);
// }
// console.log(a);

// for (let i = 0; i < a.length - 2; i++) {
//   for (let j = 1; j < a.length - 1; j++) {
//     if (a[i] < a[j]) {
//       let x = a[i];
//       a[i] = a[j];
//       a[j] = x;
//       i
//     }
//   }
// }
// console.log(a);

// for (let j = 0; j < a.length - 1; j++) {
//   for (let i = 0; i < a.length - 1 - j; i++) {
//     if (a[i] < a[i + 1]) {
//       let x = a[i];
//       a[i] = a[i + 1];
//       a[i + 1] = x;
//     }
//   }
// }
// console.log(a);

// ========================================================================================

// Bài 9: Viết chương trình khởi tạo nhập vào 2 mảng số nguyên gồm 10 phần tử, gọi là mảng a và b. Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên. Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c. Hiển thị mảng c.
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let b = [11, 23, 34, 45, 56, 67, 78, 89, 90, 123];

// let c = [...a, ...b]; //spread
// console.log(c);
// let d = a.concat(b);
// console.log(d);
// let e = a.push(b);
// console.log(d);

// ========================================================================================

// let a = [];
// let b = [];
// let x = +prompt("Moi ban nhap vao so phan tu cua 2 mang");
// while (!Number.isInteger(x) || x < 0) {
//   x = +prompt(`Gia tri khong hop le moi ban nhap lai`);
// }
// for (let i = 0; i < x; i++) {
//   let n = +prompt(`moi ban nhap phan tu thu ${i} cua mang a`);
//   while (!Number.isInteger(n)) {
//     n = +prompt(
//       `Phan tu khong hop le moi ban nhap lai phan tu thu ${i}cua mang a`
//     );
//   }
//   a.push(n);
// }
// for (let j = 0; j < x; j++) {
//   let m = +prompt(`moi ban nhap phan tu thu ${j} cua mang b`);
//   while (!Number.isInteger(m)) {
//     m = +prompt(
//       `Phan tu khong hop le moi ban nhap lai phan tu thu ${j} cua mang b`
//     );
//   }
//   b.push(m);
// }

// console.log(a);
// console.log(b);

// let c = [];
// for (let k = 0; k < a.length; k++) {
//   c.push(a[k], b[k]);
// }
// console.log(c);
// ========================================================================================

// Bài 1: Viết chương trình khởi tạo mảng 2 chiều, gồm một bộ các phần tử có sẵn, in ra các phần tử trong mảng.
// let a = [
//   [5, 12, 17, 9, 3],
//   [13, 4, 8, 14, 1],
//   [9, 6, 3, 7, 21],
// ];
// // array[row][column]
// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < a[i].length; j++) {
//     console.log(a[i][j]);
//   }
// }
// Bài 2: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược. Ví dụ, nếu một mảng chứa các ký tự [ 'c', 's', 'c', '2', '6', '1' ]sau khi thực hiện đảo ngược sẽ là "162csc".
// let a = ["c", "s", "c", "2", "6", "1"];
// let b = [];
// for (let i = 0; i < a.length; i++) {
//   b[i] = a[a.length - 1 - i];
// }
// console.log(b.join(""));

// Bài 3: Viết một chương trình khai báo một mảng ký tự. In ra số “ký tự số” trong mảng.
// let n = prompt("Moi ban nhap vao chuoi a");
// let num = "0123456789";
// let a = n.split("");
// console.log(a);
// let b = num.split("");
// console.log(b);
// let c = [];
// for (let i = 0; i < a.length - 1; i++) {
//   if (b.indexOf(a[i]) !== -1) {
//     c.push(a[i]);
//   }
// }
// console.log(c);

// Bài 4: Viết một chương trình để đếm số từ trong một chuỗi.
// let a = "Linh ";

// let count = 1;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] == " ") {
//     count++;
//   }
// }
// console.log(count);

// let a = "Lorem   ipsum   dolor, sit   amet   consectetur adipisicing elit.";
// // let b = a.split(" ");
// // console.log(b);
// //  ['Lorem', '', '', 'ipsum', 'dolor,', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit.']
// a = a.replace(/\s+/g, " "); // thay the tat ca cac khoang trang bien thanh 1 khoang trang
// console.log(a);
// let b = a.split(" ");
// console.log(b);
// console.log(` so tu trong chuoi la ${b.length}`);
//

// Bài 5: Viết một chương trình nhập vào 2 chuỗi, sau đó kiểm tra xem hai chuỗi có giống nhau hay không.
// let a = [1, 2, 3, 4, 5];
// let b = [1, 2, 3, 4, 5];
// let count = 0;
// if (a.length == b.length) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] == b[i]) {
//       count++;
//     }
//   }
//   if (count !== a.length) {
//     alert("Hai chuoi khong bang nhau");
//   } else {
//     alert("Hai chuoi ==== bang nhau");
//   }
// } else {
//   alert("Hai chuoi khong bang nhau");
// }

// Bài 6: Viết chương trình nhập vào một mảng ký tự, tìm tất cả các ký tự trong mảng là (-) và thay thế các ký tự này bởi ký tự ( _ )
// let a = [1, 2, 3, "-", 4, "-", 5];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] == "-") {
//     a[i] = "_";
//   }
// }
// console.log(a);
