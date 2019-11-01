var arr= [ [1,2] , 3,[4,[5,[6]] , 7] ]
function even(arr){
var newarr=[]
function change(arr){
    for(var i=0;i<arr.length;i++)
    if (Array.isArray(arr[i]))    
        change(arr[i])
    else
    newarr.push(arr[i])
}
change(arr)
console.log(newarr)
}
even(arr)