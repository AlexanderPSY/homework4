//3 persons, different fields

var a = {
    name: 'Vas',
    surname: 'Vasis',
    fathername: 'Vasisovich'
}

var b = {
    name: 'Mas',
    surname: 'Masis',
    age: '20'
}

var c = {
    name: 'Kas',
    surname: 'Kasis',
    sex: 'F'
}

//fields check
function findExtraFilds(searchObj) {
    for (let key in searchObj) {
        if (key === 'age' || key === 'sex' || key === 'fathername') alert(`Found extra field - "${key}"`)
    }

}

findExtraFilds(a)
findExtraFilds(b)
findExtraFilds(c)

//array of persons
var persons = []
persons.push(a, b, c, {
    name: 'Bas',
    surname: 'Basis'
})

//loop of persons
for (let val of persons) {
    console.log(val)
}
//loop of loop of values
var personCount = 0
for (let obj of persons) {
    personCount++
    for (let key in obj) {
        console.log(`Person ${personCount} ${key} : ${obj[key]}`);
    }
}

//fullName
for (let obj of persons) {
    var personFullName = ''
    personFullName += `${obj.name} ${obj.surname}`
    if (obj.fathername) personFullName += ` ${obj.fathername}`
    obj.fullName = personFullName
}
console.log(persons)

//serialize
var jsonString = JSON.stringify(persons)
console.log(jsonString)

//deserialize
persons.push(JSON.parse(jsonString)[0])
console.log(persons);

//HTML
var str = "<table border='1'>"
str += `<tr><td>Имя</td><td>Фамилия</td></tr>`
for (let person of persons) {
    str += `<tr><td>${person.name}</td><td>${person.surname}</td></tr>`
}
str += "</table>"

console.log(str)
document.write(str)

//HTML optional fields

var str = "<table border='1'>"
str += `<tr><td>Имя</td><td>Фамилия</td><td>Отчество</td><td>Возраст</td><td>Пол</td></tr>`
for (let person of persons) {
    str += `<tr><td>${person.name}</td><td>${person.surname}</td>`
    person.fathername ? str += `<td>${person.fathername}</td>` : str += `<td></td>`
    person.age ? str += `<td>${person.age}</td>` : str += `<td></td>`
    person.sex ? str += `<td>${person.sex}</td>` : str += `<td></td>`
    str += "</tr>"
}
str += "</table>"

console.log(str)
document.write(str)

//HTML tr color
var str = "<table border='1'>"
str += `<tr><td>Имя</td><td>Фамилия</td><td>Отчество</td><td>Возраст</td><td>Пол</td></tr>`
var color = 0;
for (let person of persons) {
    (color % 2) ? str += `<tr>` : str += `<tr style="background:lightblue">`
    str += `<td>${person.name}</td><td>${person.surname}</td>`
    person.fathername ? str += `<td>${person.fathername}</td>` : str += `<td></td>`
    person.age ? str += `<td>${person.age}</td>` : str += `<td></td>`
    person.sex ? str += `<td>${person.sex}</td>` : str += `<td></td>`
    str += "</tr>"
    color++
}
str += "</table>"

console.log(str)
document.write(str)

//HTML th optional
var str = "<table border='1'>"
var arrOfKeys = []
str += `<tr>`
for (let person of persons) {
    for (let key in person) {
        if (arrOfKeys.indexOf(key) === -1) {
            str += `<td>${key}</td>`
            arrOfKeys.push(key)
        }
    }
}
str += `</tr>`
var color = 0;
for (let person of persons) {
    (color % 2) ? str += `<tr>` : str += `<tr style="background:lightblue">`
    for (let key of arrOfKeys) {
        person[key] ? str += `<td>${person[key]}</td>` : str += `<td></td>`
    }
    str += "</tr>"
    color++
}
str += "</table>"

console.log(str)
document.write(str)


//Задание на синий пояс.
var someTree = {
    tagName: "table", //html tag
    subTags: [ //вложенные тэги
        {
            tagName: "tr",
            subTags: [
                {
                    tagName: "td",
                    text: "some text",
                },
                {
                    tagName: "td",
                    text: "some text 2",
                }
            ]
        }
    ],
    attrs:
        {
            border: 1,
        },
}

var someTree2 = {
    tagName: "table", //html tag
    subTags: [ //вложенные тэги
        {
            tagName: "tr",
            subTags: [
                {
                    tagName: "td",
                    text: "some text",
                },
                {
                    tagName: "td",
                    text: "some text 2",
                }
            ]
        },
        {
            tagName: "tr",
            subTags: [
                {
                    tagName: "td",
                    text: "some text 11",
                },
                {
                    tagName: "td",
                    text: "some text 22",
                }
            ]
        },
        {
            tagName: "tr",
            subTags: [
                {
                    tagName: "td",
                    text: "some text 111",
                },
                {
                    tagName: "td",
                    subTags: [
                        {
                            tagName: "ul",
                            subTags: [
                                {
                                    tagName: "li",
                                    text: "some text",
                                },
                                {
                                    tagName: "li",
                                    text: "some text2",
                                },
                                {
                                    tagName: "li",
                                    text: "some text3",
                                },
                                {
                                    tagName: "li",
                                    text: "some text4",
                                }
                            ]
                        }
                    ]
                },

            ]
        }
    ],
    attrs:
        {
            border: 1,
        },
}


function makeHtmlTree(tree) {
    let str = `<${tree.tagName}`
    if (tree.attrs) for (let attr in tree.attrs) {
        str += ` ${attr} = "${tree.attrs[attr]}"`
    }
    str += `>`
    if (tree.text) str += tree.text
    if (tree.subTags) str += tree.subTags.reduce((accumulator, sub) => accumulator + makeHtmlTree(sub), '')
    return str + `</${tree.tagName}>`
}

document.write(makeHtmlTree(someTree))
document.write(makeHtmlTree(someTree2))