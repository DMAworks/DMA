// // // // // // function showFirstMessage(text) {
// // // // // //     alert(text);

// // // // // // }

// // // // // function calc(a,b) {
// // // // //     return (a + b);
// // // // // }

// // // // // console.log (calc(3,4));

// // // // // console.log (calc(4,4));

// // // // // function retVar() {
// // // // //     let num = 50;
// // // // //     return num;
// // // // // }

// // // // // let anotherNum = retVar();
// // // // // console.log(anotherNum);


// // // // // let str = "test";
// // // // // console.log(str.length);

// // // // // console.log(str.toUpperCase());
// // // // // console.log(str.toLowerCase());

// // // // // let twelve = "12.2px";
// // // // // // console.log(Math.round(twelve));
// // // // // console.log(parseInt(twelve));
// // // // // console.log(parseFloat(twelve));

// // // // // function learnJS(lang,callback) {
// // // // //     console.log("I'm learning" + lang);
// // // // //     callback();
// // // // // }

// // // // // function done() {
// // // // //     console.log("I learnd 3-rd lesson!");
// // // // // }

// // // // // learnJS("JavaScript", done);

// // // // let options = {
// // // //     width: 1024,
// // // //     height: 1024,
// // // //     name: "test"
// // // // };

// // // // console.log(options.name);

// // // // options.bool = false;
// // // // options.colors = {
// // // //     border: "black",
// // // //     bg: "red"
// // // // };

// // // // delete options.bool;

// // // // console.log(options);

// // // // for(let key in options) {
// // // //     console.log("Свойство " + key + " имеет значение " + options[key]);
// // // // }

// // // // console.log(Object.keys(options).length);

// // // let arr = ["first" ,2 ,3 ,"four" ,5];


// // // // for (let i = 0; i < arr.length; i++) {
// // // //     console.log(arr[i]);
// // // // }

// // // arr.forEach(function(item, i, mass) {
// // //     console.log(i + " " + item + "(массив: " + mass + ")");
// // // });

// // // console.log(arr);

// // // let mass = [1,2,3,4,5,6,7];

// // // for (let key of mass) {
// // //     console.log(key);
// // // }

// // let ans = prompt("", ""),
// //     arr = [];

// // arr = ans.split(",");   
// // console.log(arr);

// let arr = ["arr", "zzz", "asd", "rrr"],
//     i = arr.join(", ");

//     console.log(i);

let arr = [1, 15, 4, 17],
        i = arr.sort();

function compareNum(a, b) {
        return a - b;
}

console.log(i);

let soldier = {
        health: 400,
        armor: 100
};

let john = {
        health: 100
};

john.__proto__ = soldier;
 console.log(john);
 console.log(john.armor);       