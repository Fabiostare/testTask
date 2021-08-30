const referenceArr = ['BMW', 'Toyota', 'Honda', 'Mazda', 'Lexus', 'Audi', 'Tesla', 'Ford', 'Nissan', 'Opel', 'Kia'];
const maxLength = 1000;

let arr = [];

for (let i = 0; i <= 1 + Math.random() * maxLength | 0; i++) {
  arr.push(referenceArr[Math.random() * referenceArr.length | 0]);
}

console.log('arr:', arr);

const countRepits = arr.map((name) => {
  return {count: 1, name: name};
})
.reduce((a, b) => {
  a[b.name] = (a[b.name] || 0) + b.count;
  
  return a;
}, {});

console.log('countRepits:', countRepits);

const srtArr = Object.keys(countRepits).sort((a, b) => countRepits[b] - countRepits[a]);

console.log('srtArr:', srtArr);