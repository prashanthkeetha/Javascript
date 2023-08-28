function myfunction(a, b) {
    if (a === "ibridge" && b === "digital") {
        console.log('Data is correct');
    } else {
        console.log('Data is incorrect');
    }
}

let app = myfunction("ibridge", "digital");


function sync(c, d) {
    if (c === "tech" && d === "soft") {
        console.log('working');
    } else {
        console.log('notworking');
    }
}

let data = sync("tech", "soft");

//Here synchronous is nothing but executing one line after another line (or) one function after another function.