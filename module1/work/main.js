function pow(number, power) {
    return Math.pow(number,power);
}

console.log(pow(3,2));

function isEqual(a,b){
    if (a === b) {
        return true;
    } else {
     return false;
     }
}

console.log(isEqual(2,3));

function makeNumberList() {
    var i = 1;
    while(i <= 50){
        console.log(i)
        i++;
    }
}

makeNumberList();

function doNumberList() {
    var i = 1;
    for (i; i <= 50; i++) {
        console.log(i);
    }
}

doNumberList();



function makeStatement() {
    var obj = {
        'Оттава': 'Канада',
        'Киев': 'Украина'
    };
    var el;

    for (el in obj) {
        if (obj.hasOwnProperty(el)) {
            console.log(`${el} - это ${obj[el]}`);
        }
    }
}

makeStatement();

function displayMoreThen() {
    var arr = [2, 5, 9, 15, 0, 4];
    var i = 0;

    for (i; i < arr.length; i++) {
        if (arr[i] > 3 && arr[i] < 10) {
            console.log(arr[i]);
        }
    }
}

displayMoreThen();

function joinArray() {
    var arr = ['я', 'учу', 'javascript', '!'];
    var joinedWithSymbol = arr.join("+");
    var joinedWithSpace = arr.join(" ");
    
    console.log(joinedWithSymbol);
    console.log(joinedWithSpace);
}

joinArray();

