function hello() {
	console.log("hi");
}

hello();
hello();
hello(); // 콘솔로 안 찍어도 "hi"가 세 번 출력

// hiHello(name)의 값을 콘솔로 출력시 아래 이름들이 차례대로 출력
function hiHello(name) {
	console.log(name);
}

hiHello("kim");
hiHello("lee");
hiHello("park");
hiHello("choi");

alert();
console.log();
hiHello();

function plus(a, b) {
	console.log(a + b);
}

plus(8, 60);

function divide(a, b) {
	console.log(a / b);
}
divide(60, 5);

const player = {
	name: "kim",
	sayHello: function (otherName) {
		console.log("hello " + otherName + " nice to meet u");
	},
};

player.sayHello("lee");
