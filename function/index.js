// 构造函数
function Foo () {
  // 没有var声明，是全局变量赋值
  // 如果Foo没有执行，下面赋值行为是肯定不进行的
  getName = function () {
    console.log(1);
  }
  return this;
}

// 函数Foo上的静态方法 -> 一个函数对象上的方法/属性
Foo.getName = function () {
  console.log(2);
}

// 扩展函数原型上的方法
// var foo = new Foo() -> foo.getName
// new Foo().getName
Foo.prototype.getName = function () {
  console.log(3);
}

// 给全局变量赋值为一个匿名函数
// 其实函数声明优先级高于变量声明，变量赋值覆盖函数。是因为浏览器在解析js文件时初始化先拿到所有的声明，由于函数声明优先级高于变量声明，所以一开始拿到是函数，然后代码再从上往下解析，后面输出变量时由于前面已对该变量进行了赋值，所以输出的是赋值数。
var getName = function () {
  console.log(4);
}

// 函数声明
function getName () {
  console.log(5)
}

Foo.getName(); // -> 2 -> Foo函数上的静态方法
getName(); // -> 4 -> 访问全局变量的getName
Foo().getName(); // -> 1 -> Foo()执行完，getName重新赋值; Foo() -> 返回this -> 指向window -> window.getName()
getName(); // -> 1
new Foo.getName(); // -> 2 -> 访问Foo对象下的getName，Foo函数上的静态方法Foo.getName()

// var foo = new Foo()
// foo.getName()  -> Foo.prototype.getName
new Foo().getName(); // -> 3
new new Foo().getName(); // -> 3
