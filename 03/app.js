function NewConstructor() {
    this.addProperty = function (name,value) {
        this[name]=value
    }

}

var sample =new NewConstructor()
sample.addProperty('someName','someValue')