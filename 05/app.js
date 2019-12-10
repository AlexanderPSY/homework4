function sampleFunc () {
    console.info ( `Symbols in my code: ${arguments.callee + 0}` )
}

function modificator(func) {
    func.valueOf = () => String(func).length
}

modificator(sampleFunc)

sampleFunc()