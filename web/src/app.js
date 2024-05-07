// File: app.js
// Author:  Szamosfalvi Szonja
// Copyright: 2024, Szamosfalvi Szonja
// Group: Szoft I-1-N
// Date: 2024-05-07
// Github: https://github.com/szonia/
// Licenc: GNU GPL


const doc = {
    booksBody: document.querySelector('#booksBody')
}

const state = {
    booksList: []
}

function getBooks() {
    const url = 'http://localhost:8000/books';
    fetch(url)
    .then(response => response.json())
    .then(result => {
        state.booksList = result
        renderTable();
    });
}

function renderTable() {
    console.log('renderelés...');
    state.booksList.forEach( books => 
    {
        var tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${books.id}</td>
            <td>${books.title}</td>
            <td>${books.author}</td>
            <td>${books.price}</td>
        `;
        doc.booksBody.append(tr);
    })
}

getBooks();








// const doc = {
//     bookBody: document.querySelector
//     ('#bookBody')
// } 
// const state = {
//     bookList: []
// }

// function getBooks() {
//     const url = 'http://localhost:8000/books';
//     fetch(url)
//     .then(response => response.json())
//     .then(result => {
//         console.log(result)
//         state.bookList = result
//         renderTable();
//     });
// }

// function renderTable() {
//     console.log('renderelés')
//     state.bookList.forEach( book => {
//         var tr = document.createElement('tr');
//         tr.innerHTML = `
//                     <td>${book.id}</td>
//                     <td>${book.name}</td>
//                     <td>${book.city}</td>
//                     <td>${book.salary}</td>
//         `;
//         doc.bookBody.append(tr);
//     })
// }

// getBooks();
