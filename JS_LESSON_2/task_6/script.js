const dialog = () => {
    let response;
    let name;

    response = confirm('Виски?');

    if (response) {
        name = prompt('Как к вам обращаться сэр?');
    }
    return name === undefined ?
        alert('Для меня вы никто') :
        alert(`Добро пожаловать в клуб ${name}`);
};

dialog();