
function rectangleInfo(width: number, height: number) {
  const perimeter = 2 * (width + height);
  const area = width * height;

  return { perimeter, area };
}

const w = 5;
const h = 10;
const result = rectangleInfo(w, h);

console.log(`Chiều rộng: ${w}, Chiều dài: ${h}`);
console.log(`Chu vi: ${result.perimeter}`);
console.log(`Diện tích: ${result.area}`);
 