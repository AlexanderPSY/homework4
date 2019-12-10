function LibraryBook(bookName="default name", bookYear="1970", bookAutor="default autor") {
    var title = bookName
    var year = bookYear
    var author = bookAutor
    var readerName = ''
    var readerData = ''

    function giveTheBook(client) {
        readerName = client
        readerData = new Date()
    }

    this.getBookInfo = function () {
        console.log(readerData);
    }
    this.getTheBook = function (client) {
        if (readerName) return null
        else giveTheBook(client)
        return title
    }
    this.returnBook = function () {
        readerName = ''
        readerData = ''
    }
}

var abc = new LibraryBook('abc')
abc.getTheBook('Vasa')
abc.getTheBook('Baz')
