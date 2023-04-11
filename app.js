// Question 1
// let  num = 5;
// function addee(num2){
//  return function(){
//  return console.log(num2 + num);
// }
// }
// let print = addee(6677);
// print();


// Question 2

// const myArray = [1, 2, 3, 4, 5,6,7];
// const myValue = 9;

// function searchArray(arr, val) {
//     if (arr.length === 0) { 
//       return false;
//     } else if (arr[0] === val) { 
//       return true;
//     } else { 
//       return searchArray(arr.slice(1), val);
//     }
//   }
//   if (searchArray(myArray, myValue)) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
// qUESTION 3

// function addParagraph(text) {
//   const newParagraph = document.createElement('p');
//   newParagraph.textContent = text;
//   const body = document.querySelector('body');
//   body.appendChild(newParagraph);
// }

// question 4

// function addLi(text) {
//   const newListItem = document.createElement('li');
//   newListItem.textContent = text;
//   const unorderedList = document.querySelector('ul');
//   unorderedList.appendChild(newListItem);
// }

// question 5
// function changeme(ref, newcolor) {
//   ref.style.backgroundColor = newcolor;
// }
// const reff = document.getElementById('refff');
// changeme(reff, 'yellow');

// question 6

// const myObject = { name: "Uzair", rollno: 444  };
// function save(key, obj) {
//   const objJson = JSON.stringify(obj);
//   localStorage.setItem(key, objJson);
// }
// save('student', myObject);

// question 7
// function getback(key) {
//   const objJson = localStorage.getItem(key);
//   const obj = JSON.parse(objJson);
//   return obj;
// }
// const myObj = getback('student');
// console.log(myObj);

// question 8
// const myObj = { name: 'uzair', rollno : 33 , cnic : 356425636 };

// function saveObject(object) {
//   for (const property in object) {
//     localStorage.setItem(property, object[property]);
//   }
//     const newObj = {};
//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);
//         newObj[key] = value;
//   }  
//   return newObj;
// }
// const retrievedObj = saveObject(myObj);
// console.log(retrievedObj);







