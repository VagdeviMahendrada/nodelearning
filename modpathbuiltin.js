const path=require('path')
console.log(path)
console.log(path.sep)
//created 2 new folders inside node learn folder mainfol,subfol(inside main),file inside sub
const filepath=path.join('/mainfol/','subfol','fileinsub.txt')
console.log(filepath)
const base=path.basename(filepath)
console.log(base)
const absolute=path.resolve(__dirname,'mainfol','subfol','fileinsub.txt')
console.log(absolute)