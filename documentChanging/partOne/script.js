// let elem = document.createElement('div');
// elem.classList.add('alert');
// elem.innerHTML = 'Hello its me';
// document.body.append(elem)
//
// let elem2 = elem.cloneNode(true);
// elem.after(elem2)

/////////////////////////////////////////////////////////////////////

//Напишите интерфейс для создания списка.
//
// Для каждого пункта:
//
// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Процесс прерывается, когда пользователь нажимает Esc или вводит пустую строку.
// Все элементы должны создаваться динамически.
//
// Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный текст.


// let cover = document.createElement('div');
// document.body.prepend(cover);
// let title = document.createElement('h2');
// title.innerHTML = 'Create list';
// cover.append(title);
// let ul = document.createElement('ul');
// cover.append(ul);
//
// function creteList(){
//     let answer = prompt('write text', );
//         if(answer !== false && answer !== '' && answer !== null) {
//             let li = document.createElement('li');
//             li.innerHTML = answer;
//             ul.append(li);
//             creteList();
//         } else {
//             return answer
//         }
// }
//
// creteList()


//////////////////////////////////


//Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.


let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    },
    "лошади": {},
    "свиньи": {
        "pink": {}
    }
};

function createTree(container, obj) {
    container.append(createTreeDom(obj))
}

function createTreeDom(obj) {
    let ul = document.createElement('ul');

    for(let key in obj) {
        let li = document.createElement('li');
        li.innerHTML = key;

        let childrenUl = createTreeDom(obj[key]);
        if(childrenUl) {
            li.append(childrenUl);
        }
        ul.append(li);
    }

    return ul;
}

let container = document.querySelector('.container');
createTree(container, data);


