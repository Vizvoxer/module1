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

function concatArr() {
    var firstArr = ['a', 'b', 'c'];
    var secondArr = [1, 2, 3];
    var concated = firstArr.concat(secondArr);

    console.log(concated);
}

concatArr();

function pushToArr() {
    var arr = ['a', 'b', 'c'];

    arr.push(1,2,3);

    console.log(arr);
}

pushToArr();

function displayAsync() {
    var arr = [1, 2, 3, 4, 5, 6 ];

    arr.forEach(function (i) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    })
}

displayAsync();

(function() {
    var a = 5;
    var b = a;

    console.log(b);
})();

function findElement(arr, n) {
    var i = 0;

    for (i; i < arr.length; i++) {
        if (arr[i] === n) {
            console.log(i);

            return
        }

    }
    console.log("Not found");
}

findElement([1,3,5], 5);


// var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
// var btnIndex = 0;
//
// for (btnIndex; btnIndex < prizes.length; btnIndex++) {
//     (function (btnIndex) {
//         document.getElementById('btn-' + btnIndex).onclick = function () {
//             console.log(prizes[btnIndex]);
//             };
//         })(btnIndex);
//
//     }

var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
var btnIndex = 0;

function showText(el,ind) {
    return function ret() {
        console.log(el[ind]);
    }
};

for (btnIndex; btnIndex < prizes.length; btnIndex++) {
    (function (btnIndex) {
        document.getElementById('btn-' + btnIndex).onclick = showText(prizes,btnIndex);
    })(btnIndex);

}

function setInputValue() {
    var input = document.querySelector("input");
    var button = document.querySelector(".change");

    function initValue() {
        input.setAttribute("value", "It is awesome");
    }

    button.addEventListener("click", initValue);
}

setInputValue()

function exchangeValues() {
    var firstInput = document.querySelector(".exchange");
    var secondInput = document.querySelector(".exchange2");
    var button = document.querySelector(".reset");
    var firstValue = firstInput.value;
    var secondValue = secondInput.value;
    var colors = ["red", "green", "blue"];
    var colorIndex = 0;

    function reset() {
        if (firstInput.value !== firstValue) {
            firstValue = firstInput.value;
            secondValue = firstInput.value;
            secondInput.value = firstInput.value;
        } else if (secondInput.value !== secondValue) {
            secondValue = secondInput.value;
            firstValue = secondInput.value;
            firstInput.value = secondInput.value;
        }

        firstInput.style.color = colors[colorIndex];
        secondInput.style.color = colors[colorIndex]

        if (colorIndex < 2) {
            colorIndex++;
        } else {
            colorIndex = 0;
        }
    }

    button.addEventListener("click", reset);
}

exchangeValues();

function addInput() {
var container = document.querySelector(".toAppend");
var button = document.querySelector(".append");
var example = document.createElement("input");
example.setAttribute("type","text");

function pushInput() {
    container.appendChild(example);
}

button.addEventListener("click", pushInput);
}

addInput();
