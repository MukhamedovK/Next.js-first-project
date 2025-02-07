export function generateUniqueColor(length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    let red, green, blue;
    let isUnique = false;
    while (!isUnique) {
      red = Math.floor(Math.random() * 256);
      green = Math.floor(Math.random() * 256);
      blue = Math.floor(Math.random() * 256);
      var color = "rgb(" + red + "," + green + "," + blue + ")";
      if (!arr.includes(color)) {
        arr.push(color);
        isUnique = true;
      }
    }
  }
  return arr;
}
