//siempre hambriento
function siempreHambriento (arr){
    let sum = 0;
    let nums = "";
    for (let i = 0 ; i<arr.length; i++){
        if(arr[i]== "comida"){
            nums = "delicioso";
            console.log(nums);
        }

        sum += arr[i];

    }
    if(typeof sum === 'number')
    {
        console.log("tengo hambre");
    }    
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
siempreHambriento([4, 1, 5, 7, 2]);

//Pasa alto
function highPass(arr,cutoff){
    let arry =[];
    for(let i = 0; i<arr.length;i++){
        if(arr[i]>cutoff){
            arry.push(arr[i]);
        }
    }
    return arry
}

let result = highPass([6, 8, 3, 10, -2, 5, 9], 5)
console.log(result)

//Mejor que el promedio
function mayorquePromedio(arr){
    let sum=0;
    let cont=0;
    for(let i = 0; i<arr.length;i++){
        sum = sum + arr[i];
    }
    let prom=sum/arr.length;
    for (let i = 0; i<arr.length;i++){
        if(arr[i]>prom){
            cont+=1;
        }
    }
    return cont
}

let mayor = mayorquePromedio([6, 8, 3, 10, -2, 5, 9]);
console.log(mayor);

//invertido
function invertido(arr){
    let a = arr.length;
    let arry = [];
    for(let i = 0; i<arr.length;i++){
        arry.push(arr[a-1]);
        a--;
    }
    return arry;
}
let inv = invertido(["a", "b", "c", "d", "e"]);
console.log(inv);

//fibunachi
function fibonacci(num){
    arr=[0,1];
    if (num==1){
        arr.pop()
    }
    else if (num>=2){
        for(let i=2;i<num;i++){
            arr.push((arr[i-2]+arr[i-1])) 
        }
    }
    return arr
}
let fib = fibonacci(10);
console.log(fib);