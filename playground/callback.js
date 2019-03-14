
add = (x,y, callback) => {
    setTimeout(() => {
        callback(x+y);
    }, 2000);
}




add (4,6, (result) => {
    console.log(result);
});

//call function
//set callback function
//implement callback