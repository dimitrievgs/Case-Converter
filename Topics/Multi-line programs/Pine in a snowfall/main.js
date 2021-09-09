let values = [1, 3, 5, 1];
let lineWidth = 7;
for (let n in values) {
    let value = values[n];
    let end = lineWidth - (lineWidth - value) / 2;
    let start = lineWidth - end + 1;
    let line = "";
    for (let k = 1; k <= lineWidth; k++) {
        if (k < start || k > end) {
            line += ".";
        } else {
            line += "#";
        }
    }
    console.log(line);
}