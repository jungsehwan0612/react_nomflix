const human = {
  name: "Sam",
  lastName: "Jung",
  nationality: "Korean",
  food: {
  	breakfast: "Apple",
  	lunch: "Gukbap",
  	dinner: "Cheeze Doncatsu"
  }
}

const { name, lastName, nationality, food:{ breakfast, lunch, dinner }} = human;

console.log(`나의 이름은 ${name} ${lastName} 이고, 국적은 ${nationality}입니다.`)
console.log(`오늘 아침은 ${breakfast}을, 점심은 ${lunch}을, 그리고 저녁은 ${dinner}를 먹었습니다. `);
