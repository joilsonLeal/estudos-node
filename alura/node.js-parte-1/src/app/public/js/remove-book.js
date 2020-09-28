let booksTable = document.querySelector('#books');
booksTable.addEventListener('click', (evento) => {
    let clickedElement = evento.target;

    if (clickedElement.dataset.type == 'remove') {
        let bookId = clickedElement.dataset.ref;
        fetch(`http://localhost:3000/books/${bookId}`, { method: 'DELETE' })
            .then(resposta => {
                let tr = clickedElement.closest(`#book_${bookId}`);
                tr.remove();
            })
            .catch(err => console.log(err));
    }
});