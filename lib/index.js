const program = require('commander')
const path = require('path')
const fs = require('fs')
const copy = require('./copy')

program
	.version('v1.0')
	.option('-n,--name [value]','文件夹名称')
	.parse(process.argv)

// 获取命令执行位置
let actionPath = process.cwd()
let tplPath = path.join(__dirname,'../tpl/express-pro')


module.exports=program

// 传入值为字符串则进行处理
if(typeof program.name==='string'){
	console.log('项目创建位置'+path.join(actionPath,program.name))
	let newPath = path.join(actionPath,program.name)
	createDir(newPath)
	copy(tplPath,newPath)
}

// // 创建指定项目名称的文件夹
function createDir(path){
	if(fs.existsSync(path)){
		console.log('存在与当前项目同名的文件夹,请检查')
		return
	}
	fs.mkdirSync(path)
}