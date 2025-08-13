// open dialog
const dialog = document.querySelector('dialog')
const showBtn = document.querySelector('.add')

// showBtn.addEventListener('click', () => {
//     dialog.showModal()
// })


function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
}

const orwell = new Book('1984', 'George Orwell', '329', 'Finished')


const library = []


const titleBox = document.querySelector('.tit')
const authorBox = document.querySelector('.auth')
const pageBox = document.querySelector('.page')
const readBox = document.querySelector('.read')
// const submitBtn = document.querySelector('.submit')
const form = document.querySelector("form")
form.addEventListener('submit', addToLib())

function addToLib() {
    form.addEventListener('submit', (e) => {
        // dialog.close()
        e.preventDefault()
        const tit = titleBox.value
        const auth = authorBox.value
        const page = pageBox.value
        const status = readBox.value

        const newBook = new Book(tit, auth, page, status)

        library.push(newBook)
        console.log(library)

        displayBook(tit, auth, page, status)
    })
}

function displayBook(newTitle, newAuth, newPage, newStatus) {
    // const titleDisp = document.querySelector('.title')
    // const authorDisp = document.querySelector('.author')
    // const numDisp = document.querySelector('.num')
    // const statusDisp = document.querySelector('.status')

    const bookCont = document.querySelector('.book-cont')
    // const oneBook = document.querySelector('.book')
    // const groupA = document.querySelector('.grp1')
    // const groupB = document.querySelector('.grp2')

    library.forEach(() => {
        const content = document.createElement('div')
        content.classList.add('book')
        bookCont.appendChild(content)

        const grpA = document.createElement('div')
        grpA.classList.add('grp1')
        content.appendChild(grpA)

        const grpB = document.createElement('div')
        grpB.classList.add('grp2')
        content.appendChild(grpB)


        const nameBox = document.createElement('h3')
        nameBox.classList.add('title')
        grpA.appendChild(nameBox)
        
        const authBox = document.createElement('h4')
        nameBox.classList.add('author')
        grpA.appendChild(authBox)
        
        const numBox = document.createElement('p')
        nameBox.classList.add('num')
        grpB.appendChild(numBox)
        
        const statBox = document.createElement('p')
        nameBox.classList.add('status')
        grpB.appendChild(statBox)

        const newDel = document.createElement('button')
        newDel.textContent = Delete
        newDel.classList.add('delete')
        grpB.appendChild(newDel)

        nameBox.textContent = newTitle
        authBox.textContent = newAuth
        numBox.textContent = newPage
        statBox.textContent = newStatus

        
    }) 
}

const del = document.querySelector('.delete')

// del.addEventListener('click', () => {
//     library.pop()
// })