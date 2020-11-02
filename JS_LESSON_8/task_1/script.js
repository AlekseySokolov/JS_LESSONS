const fio = "    леонтьев    Сергей            Дмитриевич  ";

const getInitials = fio =>
    fio.split(' ')
        .filter(word => word)
        .map(word => word[0]
            .toUpperCase())
        .join('');

console.log(getInitials(fio));