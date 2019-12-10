function testArguments() {
    function generateError(numArgs) {
        var err = new Error('Invalid arguments')
        err.stack=`Function needs 3 arguments, but only ${numArgs} present`
        err.name="Application"
        throw err
    }

    try {
        arguments.length >= 3 ? null : generateError(arguments.length)
    }
    catch (err) {
        console.error(`${err.name}: ${err.message}\n${err.stack}`)
    }
}

testArguments("Google")