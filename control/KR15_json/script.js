let person = [];
let cities = [];
let specializations = [];

Promise.all (
    [
        fetch('person.json'),
        fetch('cities.json'),
        fetch('specializations.json'),
    ]
).then(async ([personResponse, citiesResponse, specializationsResponse])=>{
    const personsJson = await personResponse.json();
    const citiesJson = await citiesResponse.json();
    const specializationsJson = await specializationsResponse.json();
    return [personsJson, citiesJson, specializationsJson];
})
    .then ( response => {
        person = response[0];
        cities = response[1];
        specializations = response[2];

        processData();
    })

function processData() {
// из массива cities возьмем city.name и добавим в personal массива person, создав fullList методом map
    let fullList = person.map(item => {
        let city = cities.find(cityItem => {
            return cityItem.id === item.personal.locationId;
        });
        if (city && city.name) {
            item.personal.city = city.name;
        }
        return item;
    });

    console.log('%c--- п.2 Вывод всех пользователей:', 'color: red; font-size: 1.2em');
    fullList.forEach(item => {
        console.log(getInfo.call(item.personal));
    });
// найдем дизайнеров в specializations по "name": "designer", потом отсортируем только тех, у кого в "skills" есть "name": "Figma".
    let designers = specializations.find(item => item.name.toLowerCase() === 'designer');
    if (designers) {
        let designersList = person.filter(item => {
            return item.personal.specializationId === designers.id;
        })
        if (designersList) {
            let designersFigma = designersList.filter(item => {
                let index = item.skills.findIndex(skill => {
                    return skill.name.toLowerCase() === 'figma';
                });
                return index > -1;
            });
            console.log('%c--- п.3 Дизайнеры, владеющие Figma:', 'color: red; font-size: 1.2em');
            designersFigma.forEach(item => {
                console.log(getInfo.call(item.personal));
            });
        }
    }
// найдем первого из списка разработчиков на React (person skills: [ {name": "React"}]
    let reactDev = person.find(item => {
        let index = item.skills.findIndex(skill => {
            return skill.name.toLowerCase() === 'react';
        });
        return index > -1;
    })
    console.log('%c--- п.4 Первый в списке разработчик на React:', 'color: red; font-size: 1.2em');
    console.log(getInfo.call(reactDev.personal));

// найдем всех, кто старше 18 лет (person personal: {"birthday":})

    let ageList = person.filter(item => {
        let dateParts = item.personal.birthday.split('.');
        let birthday = new Date(+dateParts[2], +dateParts[1]-1,+dateParts[0]);
        let ageInMilliseconds = Date.now() - birthday.getTime();
        let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
        let age = Math.floor(ageInYears);
        if (age > 18) {
            return item;
        }
    })
    console.log('%c--- п.5 Список тех, кому больше 18 лет:', 'color: red; font-size: 1.2em');
    ageList.forEach(item => {
        console.log(getInfo.call(item.personal));
    });
//найдем всех backend-разработчиков (specializations {"name": "backend"}) из Москвы (person "city": "Москва")
//на полный рабочий день (person request: [{"value": "Полная"}] с сортировкой по ЗП (person request:[{"name": "Зарплата" "value": Num} ]

    let backEnders = specializations.find(item => item.name.toLowerCase() === 'backend');
    if (backEnders) {
        let backEndList = person.filter(item => {
            return item.personal.specializationId === backEnders.id && item.personal.city === 'Москва' && item.request.some(r => r.name === 'Тип занятости' && r.value === 'Полная');
        });
        backEndList.sort((a, b) => {
            let salaryA = a.request.find(r => r.name === 'Зарплата');
            let salaryB = b.request.find(r => r.name === 'Зарплата');
            if (salaryA && salaryB) {
                return salaryB.value - salaryA.value;
            } else {
                return 0;
            }
        });
        console.log('%c--- п.6 Список backend разработчиков из Москвы на полный день с сортировкой по ЗП (от большей к меньшей)', 'color: red; font-size: 1.2em');
        backEndList.forEach(item => {
            console.log(getInfo.call(item.personal));
        });
    }
// Найдем всех дизайнеров (specializations {"name": "designer"}),
// которые владеют Photoshop и Figma (person "skills": [{"name": "Photoshop" && "name": "Figma"}])
// на уровне не ниже 6 баллов (person "skills": [{"level": >= 6}])
    let designersList = person.filter(item => {
        return item.personal.specializationId === designers.id && item.skills.every(skill => skill.name === 'Photoshop' && skill.level >= 6 || skill.name === 'Figma' && skill.level >= 6);
    })


    console.log('%c--- п.7 Список дизайнеров, которые владеют Photoshop и Figma одновременно на уровне не ниже 6 баллов.', 'color: red; font-size: 1.2em');
    designersList.forEach(item => {
        console.log(getInfo.call(item.personal));
    });
// Найдем разработчиков по критериям:
// Дизайнера, который лучше всех владеет Figma (person "skills": [{"name": "Figma"} && {"level": max}]
// Frontend разработчика с самым высоким уровнем знания Angular (specializations {"name": "frontend"} && person "skills": [{"name": "Angular"} && {"level": max}]
// Лучшего backend разработчика на Go (specializations {"name": "backend"} && person "skills": [{"name": "Go"} && {"level": max}

    let fronEnders = specializations.find(item => item.name.toLowerCase() === 'frontend');

    let bestDesignerInFigma = findBestInSpecialization(designers, 'Figma');
    let bestFrontendInAngular = findBestInSpecialization(fronEnders, 'Angular');
    let bestBackendInGo = findBestInSpecialization(backEnders, 'Go');
    let bestTeam = bestDesignerInFigma.concat(bestFrontendInAngular, bestBackendInGo);

    console.log('%c--- п.8 Команда для разработки: лучший дизайнер, frontend и backend', 'color: red; font-size: 1.2em');
    bestTeam.forEach(item => {
        console.log(getInfo.call(item.personal));
    });

}

function getInfo() {
    return `${this.firstName} ${this.lastName}, ${this.city}`;
}


function findBestInSpecialization(specialization, skillName) {
    let maxLevel = 0;
    let bestPersons = [];
    person.forEach(person => {
        if (person.personal.specializationId === specialization.id) {
            person.skills.forEach(skill => {
                if (skill.name === skillName && skill.level > maxLevel) {
                    maxLevel = skill.level;
                    bestPersons = [person];
                } else if (skill.name === skillName && skill.level === maxLevel) {
                    bestPersons.push(person);
                }
            });
        }
    });
    return bestPersons;
}