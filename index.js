const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname, 'abhi');
const filepath = `${dirpath}/apple.txt`; // Use backticks (`) for template strings

//fs.writeFileSync(filepath, "This is the first try for CRUD");
// fs.readFile(filepath,'utf-8',(err,item)=>{
//     console.log(item)

// })
// fs.appendFile(filepath,'hello i want to update u',(err)=>{
//     if(!err){
//         console.log("this file is upadted")
//     }
// })

// fs.rename(filepath,`${dirpath}/yadav.txt`,(err)=>{
//     if(!err){
//         console.log("filename is upadtead")
//     }
// })
fs.unlinkSync(`${dirpath}/yadav.txt`)