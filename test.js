function drawDiamond(size) {
    let diamondArray = []; // Initialize an array to hold the diamond shape
    let halfSize = Math.floor(size / 2); // Calculate the half size of the diamond
  
    // Draw the top half of the diamond
    for (let i = 0; i <= halfSize; i++) {
      let row = " ".repeat(halfSize - i) + "*".repeat(i * 2 + 1);
      diamondArray.push(row);
    }
  
    // Draw the bottom half of the diamond
    for (let i = halfSize - 1; i >= 0; i--) {
      let row = " ".repeat(halfSize - i) + "*".repeat(i * 2 + 1);
      diamondArray.push(row);
    }
  
    // Return an array of positions instead of the diamond shape
    let positionsArray = [];
    let y = halfSize;
    for (let i = 0; i < diamondArray.length; i++) {
      let row = diamondArray[i];
      let x = Math.floor((size - row.length) / 2);
      for (let j = 0; j < row.length; j++) {
        if (row[j] === "*") {
          positionsArray.push({ x: x + j, y: y });
        }
      }
      y++;
    }
    return positionsArray;
  }
  
  console.log(drawDiamond(7));