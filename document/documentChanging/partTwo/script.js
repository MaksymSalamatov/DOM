
function liCounter() {
    let elements = document.querySelectorAll('li');

    for(let key of elements) {
        let count = key.querySelectorAll('li').length;

        if(!count) continue;

        key.firstChild.data += '[' + count + ']';
    }
}

liCounter()