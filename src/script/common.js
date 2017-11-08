/**
 * Created by aaa on 2017/11/3.
 */
// module.exports = "didididii"
// class Person{
//     constructor(name, age){
//       this.name = name;
//       this.age = age;
//     }
  
//     say(){
//       return `我是${this.name},我今年${this.age}岁了。`;
//     }
//   }
   // let Person = 'ieieiei'
  
 // export default Person;
 var $ = require('./lib/jquery.js');
 $.ajax({
   url:'/api/list',
   success:function(data){
     console.log(data);
   }
 })