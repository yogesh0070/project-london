function checkprime(num){
    
let count=0
for(let i=1;i<=num;i++){
    if(i%2==0){
        count++

    }
}
if(count===2){
    return true


}
    return false
    

}
let b=checkprime()