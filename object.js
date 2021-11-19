// object
const player = {
	name: "kim",
	points: 10,
	fat: true,
};

// object로 접근하는 방법
console.log(player);
console.log(player.name);

console.log(player);
player.lastName = "lee"; // 위에는 없지만 콘솔창에 추가되어 출력
player.points = 15; // 값이 변경 후 출력
console.log(player);
