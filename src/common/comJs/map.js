let a = [1,2,3,4]
a.forEach((item,index) => {
    console.log(`item = ${item},index = ${index}`);
})

let b = a.map((item,index) => {
    console.log(`item = ${item},index = ${index}`);
    if( item == 2) {
        return item + 1;
    }else{
        return item;
    }
})

console.log(a);  
console.log(b);