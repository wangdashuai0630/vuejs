//块作用域
// if(true){
//     var x=2;
// }
// console.log(x);

// if(true){
//     let x = 2
// }
// console.log(x);

//衡量const
// const fruit = 'apple';
// console.log(fruit);
// fruit = 'lemon';

// const fruit = [];//值可以改变，指针不变
// fruit.push('apple');
// console.log(fruit);

//默认参数
// function breakfast(dessert='bread'){
//     console.log(dessert);
// }
// breakfast();
//箭头函数
// let breakfast = function(dessert){
//     return dessert;
// }
// console.log(breakfast('bread'))
// let breakfast = (dessert) =>  dessert;
// console.log(breakfast('bread'));
// export default 'name'



//模块化开发
'use strict';
let fruit = 'lemon';
let dessert = 'cake';

export {
    fruit,
    dessert as default//默认
};




