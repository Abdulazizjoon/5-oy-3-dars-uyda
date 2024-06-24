//1-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   let  s= a(students);
//   function a(b) {

//     return console.log(s);
//   }

//2-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];

//   function funksiya(a) {
//     if (a.length === 0) {
//       return null;
//     }

//     let kop = a[0];
//     for (let i = 1; i < a.length; i++) {
//       if (a[i].score > kop.score) {
//         kopstudent = a[i];
//       }
//     }
//     return kop;
//   }
//   const kopball = funksiya(students);
//   console.log( kopball);

//4-masala
// function score(arr) {
//   let sum = 0;
//   arr.forEach((element) => {
//     sum += element.score;
//   });

//   let count = arr.length;
//   return sum / count;
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];

// console.log(score(students));

//5-masala

// function findstudent(arr) {
//     let result =arr.find(function (value) {
//         return value.name=='John'
//     })
//     return result
// }

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'John', age: 22, score: 92, status: 'inactive' },
//     { name: 'Bob', age: 23, score: 88, status: 'active' }
// ];
// console.log(findstudent(students));

//6-masala
// function findstudent(arr) {
//     let result =arr.findIndex(function(value) {
//         return value.score==92
//     })
//     return result
// }

// const students = [
//     { name: 'Alice', age: 20, score: 80, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 85, status: 'active' }
//   ];

// console.log(findstudent(students));

//7-masala
// function filtrlash(a) {
//     return a.filter(student => student.status === "active");
// }

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];

// let faol = filtrlash(students);
// console.log(faol);

//10-masala

// function findstudent(arr) {
//     let result=arr.find(function(value) {
//         return value.name='john'
//     })
//     return result
// }
// function margen(arr1,arr2) {
//     return arr1.concat(arr2)
// }

// const arr1 = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   const arr2 = [
//     { name: 'Charlie', age: 23, score: 88, status: 'active' },
//     { name: 'David', age: 21, score: 90, status: 'inactive' }
//   ];

//11-masala
// let fruits = ["olma", "anor", "anjir",'olma', "banan",'banan'];
// let result = [];
// fruits.forEach(function (value, indexForEach) {
//     let isexist=fruits.find(function(el,indexFind){
//         return el==value&&indexFind!=indexForEach
//     })
//     if (!isexist) {
//         result.push(value)
//     }
// });
// console.log(result);

//12-masala

// function ism(students) {
    
//     for (let i = 0; i < students.length; i++) {
       
//         students[i].name = students[i].name.toUpperCase();
//     }

    
//     return students;
// }


// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
    
//     let a = ism(students);
//     console.log(a);

//13-masala

// function get(arr) {
    
//     let result=arr.map(function(value) {
//         return value.score
//     })

    
//     return result;
// }


// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];

    
//     let a = get(students);
//     console.log(a);

//15-masala
// function a(result, ad) {
//     result.push(ad);
//     return result;
// }
// let students = ["Ali", "Vali", "Hasan"];
// let ad = "Husan";

// students = a(students, ad);
// console.log(students);



//19-masala
// function a(arr,student) {
//     let result=arr.map(function(value) {
//        if (value.name==student.name) {
//         value=student
//        }
//         return value;
//     })
//     return result
// }
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
// const updatedStudent = { name: 'Alice', age: 21, score: 90, status: 'active' };
// console.log(a(students,updatedStudent));


//20-masala
// function a(arr,student) {
//         let result=arr.map(function(value) {
//            if (value.name==student.name) {
//             value=student
//            }
//             return value;
//         })
//         return result
//     }
//     const students = [
//         { name: 'Alice', age: 20, score: 85, status: 'active' },
//         { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//       ];
//     const updatedStudent = { name: 'Alice', age: 21, score: 90, status: 'active' };
//     console.log(a(students,updatedStudent));
