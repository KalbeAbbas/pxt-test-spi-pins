let timer = control.millis()
let str = ""

basic.showNumber(0)

basic.forever(function () {
	CS11.appendFile("bye.txt", "Pakistan\n")
	basic.showNumber(1)
})