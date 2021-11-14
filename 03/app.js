const books = {
    '978-83-7278-000-3': {
        author: 'J.K. Rowling',
        title: {
            en: 'Harry Potter and the Philosopher\'s Stone',
            pl: 'Harry Potter i Kamień Filozoficzny',
        },
        translator: {
            en: null,
            pl: 'Andrzej Polkowski',
        }
    },
    '83-7278-007-2': {
        author: 'J.K. Rowling',
        title: {
            en: 'Harry Potter and the Chamber of Secrets',
            pl: 'Harry Potter i Komnata Tajemnic ',
        },
        translator: {
            en: null,
            pl: 'Andrzej Polkowski',
        }
    },
}

books.getAuthor = function(isbn) {
    // w tym przypadku this === books

    if(typeof this[isbn] === 'undefined') {
        // taki ISBN nie istnieje w moim spisie
        return null;
    }

    const author = this[isbn]['author'];
    if(author) {
        // zwracam informacje o autorze
        return author;
    }

    // brak informacji o autorze
    return false;
}

books.getTitle = function(isbn, lang) {

    if(typeof this[lang] === undefined){
        return null;
    }

    if(lang === 'pl'){
        const titlePl = this[isbn]['title']['pl'];
        return titlePl;
    }

    if(lang ==='en'){
        const titleEn = this[isbn]['title']['en'];
        return titleEn;
    }

}

books.getTranlator = function(isbn, lang) {

    if(typeof this[lang] === undefined){
        return null;
    }
    
    if(lang === 'pl'){
        const translatorPl = this[isbn]['translator']['pl'];
        return translatorPl;
    }

    if(this[isbn]['translator']['en'] !== null){
        const translatorEN = this[isbn]['translator']['en'];
        return translatorEN;
    }
    else {
        return false
    }
}

console.log( books.getAuthor('978-83-7278-000-3') ); // J.K. Rowling
console.log( books.getAuthor('000-00-0000-000-0') ); // null
console.log( books.getTitle('978-83-7278-000-3', 'pl') ); // Harry Potter i Kamień Filozoficzny
console.log( books.getTitle('978-83-7278-000-3', 'en') ); // Harry Potter and the Philosopher's Stone
console.log( books.getTranlator('83-7278-007-2', 'pl') ); // Andrzej Polkowski
console.log( books.getTranlator('83-7278-007-2', 'en') ); // false
console.log( books.getTranlator('83-7278-007-2', 'es') ); // sprawdzam czy działa spr czy właściwość istnieje