let timer = control.millis()
let str = ""

basic.forever(function () {
	str = "" + timer
	CS11.appendFile("bye.txt", "Hello\n")
	timer = control.millis()
})