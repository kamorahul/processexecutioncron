var exec = require("child_process").exec
var spawn = require("child_process").spawn

var ls = spawn("ls",["-ax"]);

ls.stderr.on("data", (data) => {
    console.log(data.toString())
})
ls.stdout.on("data",(data) => {
    console.log(data.toString())
})
ls.on("exit", (code) => {
    
    console.log("code >> >>"+code)
    
})