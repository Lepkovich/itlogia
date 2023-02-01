function ballsCount(num) {
    switch (num) {
        case 1:
            alert('Нашел ' + num + ' мячик');
        break;
        case 2:
        case 3:
        case 4:
            alert('Нашел ' + num + ' мячикa');
        break;
        case 5:
            alert('Нашел ' + num + ' мячиков');
        break;
        default:
            alert('Введите число от 1 до 5');
        break;
    }
}

ballsCount(4);