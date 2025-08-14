// open dialog
const dialog = document.querySelector('dialog')
const showBtn = document.querySelector('.add')
const closeBtn = document.querySelector('.close')

showBtn.addEventListener('click', () => {
    dialog.showModal()
})

closeBtn.addEventListener('click', () => {
    dialog.close()
})

function Book(name, author, pages, read, bookID) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
    this.bookID = bookID
}

const library = []

const titleBox = document.querySelector('.tit')
const authorBox = document.querySelector('.auth')
const pageBox = document.querySelector('.page')
const readBox = document.querySelector('.read')
const form = document.querySelector("form")
form.addEventListener('submit', addToLib)

function addToLib(e) {
    e.preventDefault()
    const tit = titleBox.value
    const auth = authorBox.value
    const page = pageBox.value
    const status = readBox.value
    const isbn = crypto.randomUUID()

    const newBook = new Book(tit, auth, page, status, isbn)

    library.push(newBook)
    console.log(library)

    dialog.close()
    displayBook(newBook)
    form.reset()
}

function displayBook(newBook) {
    const bookCont = document.querySelector('.book-cont')

    const content = document.createElement('div')
    content.classList.add('book')
    content.dataset.id = newBook.bookID
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
    authBox.classList.add('author')
    grpA.appendChild(authBox)
    
    const numBox = document.createElement('p')
    numBox.classList.add('num')
    numBox.textContent = `{$book.pages} pages`
    grpB.appendChild(numBox)
    
    const statBox = document.createElement('p')
    statBox.classList.add('status')
    grpB.appendChild(statBox)

    const newDel = document.createElement('button')
    newDel.textContent = 'Delete'
    newDel.classList.add('delete')
    grpB.appendChild(newDel)

    nameBox.textContent = newBook.tit
    authBox.textContent = newBook.author
    numBox.textContent = `${newBook.pages} pages`
    statBox.textContent = `Status: ${newBook.read}`
    
    newDel.addEventListener('click', () => {
        // library.pop()
        const id = content.dataset.id
        const idx = library.findIndex(b => b.bookID === id)
        if (idx !== -1) library.splice(idx, 1)
        console.log(library)
        content.remove()
    })
    
}

