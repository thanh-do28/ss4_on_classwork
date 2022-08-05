// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// let a = 1;
// let b = 2;
// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log(a);
// console.log(b);

// let entry = ("Enter your name")
// let entryArray=[]

// for (i=0; i<entry.length; i++){
//     entryArray[i] = entry.charAt([i]);
// }
// console.log(entryArray);

// const myString = '5,6,7,8,9,3'
// const splits = myString.split(',');

// console.log(splits)

// const a = [4, 5, 7, -8];
// console.log(...a);


// bài 1
// let a = prompt('nhập các số');
// let b = a.split(',');
// let c = 0;
// for (let i = 0; i < b.length; i++) {
//     c += Number(b[i]);
// }
// console.log(c);

//bài 2
// let a = prompt('nhập các số');
// let b = a.split(',');
// let c = [];
// for (let i = 0; i < b.length; i++) {
//      c.push(Number(b[i]));
// }
// c.sort(function(a, b) {
//     return b - a;
//   }); 
// console.log("max= ",c[0]);
// console.log("min= ",c[c.length-1]);
  
//cách 2
// let a = prompt('nhập các số');
// let b = a.split(',');
// let c = [];
// for (let i = 0; i < b.length; i++) {
//      c.push(Number(b[i]));
// }
// let max_val = Math.max.apply(null, c);
// let min_val = Math.min.apply(null, c);

// console.log("max= ",max_val);
// console.log("min= ",min_val);

// bài 3
// let a =[2,6,9,7,11,14,19,17];
// let b = Number(prompt('nhập số muốn tìm'));
// let c = -1;
// for (let i = 0; i <= a.length - 1; i = i + 1) {
//     if (b === a[i]) {
//     c = i;
//     }
// }
// if(c===-1){
//     console.log(`${b} is not found in my array` );
// }else {
//     console.log(`${b} is  found in my array at index ${c}`);
// }

//bài 4
// let todoList = ["Do homework at 8pm", "Read document at 12pm"];
// let state = true;
// while(state) {
//     let a = prompt('Nhập vào 5 chữ cái C/R/U/D/E');
//     if (a === 'C') {
//         alert('bạn thêm todo nào')
//         let b = prompt('nhập vào nội dung của todo mới');
//         todoList.push(b);
//         for(let i = 0 ; i < todoList.length; i++) {
//             let c = todoList[i];
//             console.log(i + 1, c);
//         }
//     } else if (a === 'R') {
//         for(let i = 0 ; i < todoList.length; i++) {
//             let c = todoList[i];
//             console.log(i + 1, c);
//         }
//     } else if (a === 'U') {
//         let d = prompt('bạn muốn update todo tại vị trí  nào');
//         let e = prompt('nhập nội dung');
//         todoList[d]=e;
//         for(let i = 0 ; i < todoList.length; i++) {
//             let c = todoList[i];
//             console.log(i + 1, c);
//         }
//     } else if (a === 'D'){
//         let f = prompt('vị trí todo muốn xóa');
//         todoList.splice(f, 1);
//         for(let i = 0 ; i < todoList.length; i++) {
//             let c = todoList[i];
//             console.log(i + 1, c);
//         }
//     } else if (a === 'E') {
//         alert('thank you');
//         state = false
//     }
// }


//bài 5
// let store = [“chocolate”, “marshmallow”, “cookies”, “chips”];
// let cart = [["Chocolate",1]];
// for(let i = 0 ; i < store.length; i++) {
//     let store1 = store[i];
//     console.log(i + 1, store1);
// }
// let state = true;
// while (state) {
// let a = prompt('nhập vào chữ cái C/R/U/D/E').toLowerCase();
// if (a === 'c') {
//     alert('bạn muốn kt item nào');
//     let b = prompt('nhập item muốm kt');
//     let c = store.indexOf(b);
//     if (c != -1){
//     let findIndex2 = -1;
//         for (let i = 0; i <= cart.length - 1; i = i + 1) {
//         if (b === cart[i][0]) {
//             findIndex2 = i;
//             }
//         }
//         if (findIndex2 === -1) {
//         let number = Number(prompt("nhập số lượng"));
//         cart.push([b, number]);
//         } else {
//         let number = Number(prompt("nhập số lượng"));
//         cart[findIndex2][1] = cart[findIndex2][1] + number;
//         }
//         for (let i = 0; i <= cart.length - 1; i = i + 1) {
//             console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
//         }

//     } else{
//         console.log('Item is not available');
//     }
// } else if (a === 'r') {
//     for(let i = 0 ; i < store.length; i++) {
//         let store1 = store[i];
//         console.log(i + 1, store1);
//     }
//     for(let k = 0;k < cart.length; k++){
//         let l = cart[k];
//         console.log(k + 1, l[0], l[1]);
//     }
// } else if (a === 'u') {
//     let updatedItem = prompt("Please input updated item name");
//     let findIndex = -1;
//     for (let i = 0; i <= cart.length - 1; i = i + 1) {
//       if (updatedItem === cart[i][0]) {
//         findIndex = i;
//       }
//     }
//     if (findIndex === -1) {
//       console.log("Item is not in cart");
//     } else {
//       let newNumber = prompt("Please input new number");
//       cart[findIndex][1] = newNumber;
//       for (let i = 0; i <= cart.length - 1; i = i + 1) {
//         console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
//       }
//     }
// } else if (a === 'd') {
//     let g = prompt("nhập tên item");
//     let h = -1;
//     for (let i = 0; i <= cart.length - 1; i = i + 1) {
//       if (g === cart[i][0]) {
//         h = i;
//       }
//     }
// if (h === -1) {
//       console.log("Item is not in cart");
//     } else {
//       cart.splice(h, 1);
//       for (let i = 0; i <= cart.length - 1; i = i + 1) {
//         console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
//       }
//     }
//   } else if (a === "e") {
//     console.log("Thank you for shopping");
//     state = false;
//   } else {
//     console.log("Invalid command");
//   }
// }


//bài 6
// let a = prompt('enter a sequence of names');
// let b = a.split(',');
// let c =[];
// for (let i = 0; i < b.length; i++) {
//     c.push(`<${b[i]}>`);
// }
// console.log(`${b}=>  ${c}`);


//bài 7
// let a = prompt('nhập dãy số');
// let b = a.split(',');
// let c = [];
// for (let i = 0; i < b.length; i++) {
//     if (Number(b[i]) % 2 == 1) {
//         c.push(b[i]);
//     }
// }
// console.log(`${b} => ${c}`);


// // bài 8
// let numbers = [32, 52, 1, 9, -1, 8, 4, 3, 10];
// //tìm số lớn nhất
// let max_val = Math.max.apply(null, numbers);
// console.log("max= ",max_val)
// //tìm số bé nhất
// let min_val = Math.min.apply(null, numbers);
// console.log("min= ",min_val);
// //tính tổng
// let sum = 0;
// for(let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum);
// //tính tích
// let tich = 1;
// for(let i = 0; i < numbers.length; i++) {
//     tich *= numbers[i];
// }
// console.log(tich);
// //tb cong
// let sum1 = 0;
// for(let i = 0; i < numbers.length; i++) {
//     sum1 += numbers[i];
// }
// let tbcong = sum1/numbers.length;
// console.log(tbcong);
// //theo chiều thuận và nghịch
// let number1 = numbers.sort(function(a, b) {
//     return a - b;
// });
// console.log(number1);

// let number2 = numbers.sort(function(a, b) {
//     return b - a;
// });
// console.log(number1);
// //thứ tự tăng dần
// let number3 = numbers.sort(function(a, b) {
//     return a - b;
// });
// console.log(number3);

// // bài 9
// let a = prompt('nhập chuỗi sting');
// let b = a.split('').reverse().join('');
// console.log(b);
// //split : tách chuỗi
// // reverse : đảo chuõi
// // join : hợp chuỗi

//bài 10
// let str = prompt('nhập vào chuỗi bất kỳ');
// let str1 = str.toLowerCase().split(' ');
// for(let i = 0; i < str1.length; i++) {
//     str1[i] = str1[i][0].toUpperCase() + str1[i].slice(1);
// }
// let str3 = str1.join(' ');
// console.log(str3);

// bài 11
let a = prompt('nhập chuỗi vào');
let b = a.split(' ');
let maxc = 0;
let n = '';
for(let i = 0; i < b.length; i++) {
    if(b[i].length > maxc) {
        maxc = b[i].length;
        n = b[i];
    } else if( b[i].length == maxc) {
        n = n+' '+b[i];
    }
        
}
console.log(b);
console.log(maxc);
console.log(`chữ dài nhất là : ${n}`);

//bài 12

// let a = prompt('nhập số từ 100 --> 999').split('');
// let c = [];
// for(let i = 0; i < a.length; i++) {
//     c.push(Number(a[i]));
//     console.log(a[i]);
// }

// //doc so o hang tram
// let b = "";
//     switch(c[0]) {
//         case 0:
//             b = ("Khong Tram");
//             break;
//         case 1:
//             b =("Mot Tram");
//             break;
//         case 2:
//             b = ("Hai Tram");
//             break;
//         case 3:
//             b = ("Ba Tram");
//             break;
//         case 4:
//             b = ("Bon Tram");
//             break;
//         case 5:
//             b = ("Nam Tram");
//             break;
//         case 6:
//             b = ("Sau Tram");
//             break;
//         case 7:
//             b = ("Bay Tram");
//             break;
//         case 8:
//             b = ("Tam Tram");
//             break;
//         case 9:
//             b = ("Chin Tram");
//             break;
//     }


// //doc so o hang chuc
// let d = "";
//     switch(c[1]){
//         case 0:
//             if(c[2] == 0){
//                 d = "";
//             } else {
//                 d = ("ling");
//             }
//             break;
//         case 1:
//             d = ("Muoi");
//             break;
//         case 2:
//             d = ("Hai Muoi");
//             break;
//         case 3:
//             d = ("Ba Muoi");
//             break;
//         case 4:
//             d = ("Bon Muoi");
//             break;
//         case 5:
//             d = ("Nam Muoi");
//             break;
//         case 6:
//             d = ("Sau Muoi");
//             break;
//         case 7:
//             d = ("Bay Muoi");
//             break;
//         case 8:
//             d = ("Tam Muoi");
//             break;
//         case 9:
//             d = ("Chin Muoi");
//             break;
//     }

// //doc so o hang don vi
// let e = "";
//     switch(c[2]){
//         case 0:
//             e = ("");
//             break;
//         case 1:
//             e = ("Mot");
//             break;
//         case 2:
//             e = ("Hai");
//             break;
//         case 3:
//             e = ("Ba");
//             break;
//         case 4:
//             e = ("Tu");
//             break;
//         case 5:
//             e = ("Nam");
//             break;
//         case 6:
//             e = ("Sau");
//             break;
//         case 7:
//             e = ("Bay");
//             break;
//         case 8:
//             e = ("Tam");
//             break;
//         case 9:
//             e = ("Chin");
//             break;
//     }
// console.log(`${b} ${d} ${e}`);

// 12.cách 2
// let tram = ["một trăm", "hai trăm", "ba trăm", "bốn trăm", "năm trăm", "sau trăm", "bảy trăm", "tam trăm", "chín trăm"];
// let chuc = ["mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sau mươi", "bảy mươi", "tam mươi", "chín mươi"];
// let donVi = ["một", "hai", "ba", "bốn", "năm", "sau", "bảy", "tam", "chín"];

// let inPut = prompt('nhap tiem').split('');
// let outPut = [];

// for (i=0; i<tram.length; i++){
//     if(inPut[0]==i){
//         outPut.push(tram[i]);
//     }
// }
// for (i=0; i<chuc.length; i++){
//     if(inPut[1]==i){
//         outPut.push(chuc[i]);
//     }
// }
// for (i=0; i<donVi.length; i++){
//     if(inPut[2]==i){
//         outPut.push(donVi[i]);
//     }
// }
// console.log(outPut.join(' '));








// /** Chap vao 1 so co co 1,2 hay nhieu chu so va <100.000 va doc so vua nhap vao **/

// void main()
// {
//     int n;
//     printf("\nNhap vao so tu 0 -> 999.999 :");
//     scanf("%d",&n);

//     //Tach cac so lan luot o hang tram nghin, chuc nhin, hang nghin, hang tram, hang chuc, hang don vi
//     int tng=n/100000;
//     int cng=(n/10000)%10;
//     int ng=(n/1000)%10;
//     int t=(n/100)%10;
//     int c=(n/10)%10;
//     int dv=n%10;

//     //Doc cac so vua tach o tren
//     printf("\nDoc: ");

//     tramnghin(tng); printf(" ");
//     chucnghin(cng); printf(" ");
//     nghin(ng);      printf(" ");
//     tram(t);        printf(" ");
//     chuc(c);        printf(" ");
//     donvi(dv);      printf(" ");
// }

// - (tìm ra số đầu đọc tên số đầu ) 322:100 =if(3>0) thêm chữ "trăm"
// - (tìm ra số thứ 2 đọc tên số thứ 2((322-3x100)/10 )) và 322:(3x10)=if(1.04>0) thêm chữ "mươi"
// - cuối cùng tìm ra số cuối cùng đọc tên nốt


