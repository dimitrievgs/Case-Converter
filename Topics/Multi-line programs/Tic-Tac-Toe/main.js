let dictionary;
dictionary = ["O", "X"];
let values;
values = [3, 2, 4];
for (let i = 0; i < 3; i++) {
    let binaryValues = values[i].toString(2).split('').reverse();
    if (binaryValues.length < 3) {
        binaryValues[2] = '0';
    }
    let strLine = "";
    for (let k = 0; k < 3; k++) {
        strLine += dictionary[binaryValues[k]];
        if (k < 2) {
            strLine += " ";
        }
    }
    console.log(strLine);
}