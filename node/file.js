const fs = require('fs')

//read file -----------------------------------------
// fs.readFile('./document/doc.txt', (err,data)=>{
//     if(err)
//     console.log("file err", err)
//     console.log(data.toString())
// })
//read file end --------------------------------------
//write file -----------------------------------------
// fs.writeFile('./document/doc2.txt', "this is from write file", (value)=>{
// 	console.log(value, "new file write!")
// })
//write file end--------------------------------------

//dirctories -----------------------------------------

if (!fs.existsSync('./assets')){
	fs.mkdir("./assets", (err)=>{
		if(err){
			console.log(err)
		}
		console.log("new folder created")
	})
}else {
	fs.rmdir('./assets', (err)=>{
		if(err)console.log(err)
		console.log("remove file done!")
	})
}


//deleting file ----------------------------
fs.unlink('./document/deleteme.txt' , (err)=>{
	if(err) fs.writeFile('document/deleteme.txt', "" , ()=>{
		
	})
	console.log("the file is deleted")
})


