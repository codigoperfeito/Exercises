// with create a filter of prototype

Array.prototype.filter2 = function (callback) {
    newArrey = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            newArrey.push(this[i])
        }
    }
    return newArrey
}
const casa = [0,2,3,4]
console.log(casa.filter2((i)=>{
    if (i >= 2){
        return true
    }else{
        return false
    }
}))

//value will be trued 
