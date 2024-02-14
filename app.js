const arr=[1,2,3,4,5,6,7,8,9];
function sum(array,cb){
    let newarr=[];
    for(let i=0;i<array.length;i++){
       newarr[i]=cb(array[i],i,array);
      
    }
    console.log(newarr);

}



sum(arr,(value,index) =>{ 
    let somme=0;
    for(let i=0;i<=index;i++){
        
            somme+=arr[i];
        }
    return somme;
  }
      );







