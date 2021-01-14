const stringArray = [...str.toLowerCase()];
    let xCount = 0;
    let oCount = 0;
    stringArray.forEach(element => {
        element == 'x' ? xCount++ : 0;
        element == 'o' ? oCount++ : 0;
    });
    return xCount == oCount ? true : false;