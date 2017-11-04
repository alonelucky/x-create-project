const program = require('commander')
const path = require('path')
const fs = require('fs')
const copy = require('./copy')

program
	.version('v1.0')
	.option('-n,--name [value]','本地创建项目文件夹名称')
	.option('-p,--program [value]','需要web框架创建的项目')
	.parse(process.argv)

// 获取命令执行位置
let actionPath = process.cwd()
let tplPath = _checkProgram(program.program)


module.exports=program

// 传入值为字符串则进行处理
if(typeof program.name==='string'){
	console.log('项目创建位置'+path.join(actionPath,program.name))
	let newPath = path.join(actionPath,program.name)
	createDir(newPath)
	copy(tplPath,newPath)
}

//	 创建指定项目名称的文件夹
/* 
	@params 	String		项目名称路径

*/
function createDir(path){
	if(fs.existsSync(path)){
		console.log('存在与当前项目同名的文件夹,请检查')
		return
	}
	fs.mkdirSync(path)
}

/* 
	检查传入的web矿建参数,并返回模板路径
	@params 	String 		传入的-p/-program的数据
	@return		String 		返回模板放置的路径
*/
function _checkProgram(programName){
	switch (programName){
		case 'koa':
			return path.join(__dirname,"../tpl/koa-pro")
			break
		case "express":
			return path.join(__dirname,"../tpl/express-pro")
			break
		default :
			return false
	}
}