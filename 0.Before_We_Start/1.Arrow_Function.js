// Arrow Function, 기본값 설정

const sayHello = (name="Sam") => "Hello " + name;

console.log("1." + sayHello("Michael"))
console.log("2." + sayHello())

// Arrow Function 응용: Button EventListener

button = document.querySelector('button')
button.addEventListener("click", event => console.log(event))