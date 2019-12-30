const days = ["Mon", "Tues", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];

const allDays = [...days, ...otherDays];

console.log(allDays);

// 출력 결과
// [ [ 'Mon', 'Tues', 'Wed' ], [ 'Thu', 'Fri', 'Sat' ] ]

const func = args => console.log(...args)
func(['1','2','3'])

// 출력 결과
// 1 2 3