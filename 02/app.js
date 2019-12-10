

function LibraryBook(){
    var title
    var year
    var author
    var readerName


}
    🔑 title ( название книги ),
🔑 year ( год издания ),
🔑 author ( автор ),
    🔑 readerName ( кому выдана ),
🔑 readerData ( когда выдана )

📦 Приватный метод 🔑 giveTheBook ( client ):
внесение изменений в свойства:
    🔑 readerName ( client )
            🔑 readerData ( текущая дата )

📋 Публичные методы:
    📋 getBookInfo () - посмотреть информацию о наличии книги
( вывести в консоль readerData )
📋 getTheBook ( client ) -  получить книгу:
    проверка, что книга не выдана на руки
( приватное свойство readerName
должно быть пустой строкой )
если выдана - вернуть null
если не выдана, то вызвать приватный метод
giveTheBook ( client ) и вернуть bookTitle
    📋 returnBook () - вернуть книгу:
    сбросить значения приватных свойств
readerName, readerData