function sampleFunc() {
    console.log(`${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}`)
}

function modificator(func) {
    return function () {return func("test", "sample")}
}

testFunc = modificator(sampleFunc)

testFunc()