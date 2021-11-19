// 비효율적이며 원하는 값을 불러올 수 없음
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "whu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

// array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// daysOfWeek가 나열된다.
console.log(daysOfWeek);

// array daysOfWeek의 5번째 (0~5) sat가 출력
console.log(daysOfWeek[5]);

// array에서 하나 추가하기
daysOfWeek.push("sun");
console.log(daysOfWeek);

// array 안에는 무슨 타입이던 들어갈 수 있다.
const nonsense = [1, 2, "hello", false, null, true, undefined, "kim"];
console.log(nonsense);
