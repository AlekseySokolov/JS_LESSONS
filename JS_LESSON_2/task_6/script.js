const dialog = () => {
    let name;

    if (confirm('Виски?')) {
        name = prompt('Как к вам обращаться сэр?');
    }

    name === undefined ?
        alert('Для меня вы никто') :
        alert(`Добро пожаловать в клуб ${name}`);
};

dialog();