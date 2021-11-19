/*
var a = 5; -> 과거 자바스크립트는 var로 선언을 해주었고 var은 언제 어디서나 수정이 가능하다.
const / let은 과거에는 없던 기능
var만 이용한다면 실수로 변수의 값을 변경했을시 언어가 얘기해주지 않음
*/
const a = 5; // let 은 변수의 값을 업데이트 할 때 사용
let b = 7; // constant는 변하지 않는 고정 값을 가진 변수 선언

console.log(a + b);
console.log(a * b);
console.log(a / b);

b = 10; // let으로 선언한 변수 'b'의 값을 변경할 수 있음 -> const로 선언했으면 변경 불가
// a = 6; -> 에러

console.log(a + b);

const amIFat = false;
let something;
// console.log(something);
