// https://swapi.dev – Працювати необхідно з цим API.
// Інформацію про те, як влаштовано АПІ шукайте в документації!
// Уявіть, що вам прийшло завдання на работі – все що залишив бекендер - це таку
// документацію та полетів у відпустку)
// Дуже заохочується максимально креативний підхід до цього завдання – робіть
// стилі, додайте який-небудь приємний шрифт (Якщо зовсім туго з ідеями шрифтів
// візьміть Roboto с Google Fonts).
// 1.Cтворіть кнопку: "отримати інформацію". При натисканні на неї отримайте та
// відобразіть інформацію про усіх персонажів 5 епізоду зоряних війн(films/2).
// Зверніть увагу, що необхідно вивчити документацію та на її основі вивести
// інформацію.
// Виводимо тільки: повне ім'я персонажа, дата народження, стать(якщо зробите
// іконкою, буде взагалі ідеально).
// БОНУС ПЛЮС: Якщо додумаєтесь, як зберігати і виводити фотки персонажів – буде
// дуже круто.
// Я дам підказку: можна створити об'єкт з ключ=посилання_на_персонажа,
// значення=посилання_на_фотку
// У самому АПІ фотографій нмає, але ДЗшка стане набагато приємніше виглядати з
// зображеннями персонажів
// Виведіть список усіх планет, які були у зоряних війнах.
// 3. Додайте кнопку next, яка завантажить наступну сторінку зі списком планет.
// Попередня сторінка при цьому має пропасти. (відбувається заміна даних)
// 4. ADVANCED: додайте до 1 завдання поле вводу з номером фільму(номер по
// порядку випуску фильму). Тепер при натисканні на кнопку – необхідно отримати
// інформацію не про 5тий епізод, а про фільм, номер якого вказано у полі вводу.
// Якщо вказана цифра 1 – потрібно передати запит на /films/1
// 5. ADVANCED: Додайте кнопку перекладу на вукийську мову. Після натискання на
// кнопку – весь отриманий по апі контент повинен перекластись на мову вуки.
// Для цього достатньо додати до будь-якого запиту: ?format=wookiee.
// При фантазії – можете ще і текст кнопок перекласти :)

const BASE_URL = "https://swapi.dev/api/";
const buttonGet = document.querySelector('#get');
const buttonPlanets = document.querySelector('#planets');
const selection = document.querySelector('#episodes');

const block = document.querySelector('.block');



async function getPersons(){
    
  const request = await fetch(`${BASE_URL}films/${selection.value}/`);         

  const filmData = await request.json();
  const personsArr = filmData.characters;
  
  block.replaceChildren();
    
  personsArr.forEach(getPerson);
}

async function getPerson(personsArr){
  const request = await fetch (personsArr);
  const person = await request.json();
  renderPerson(person);
}

function renderPerson(person){
  
  const personContainer = document.createElement("div");
  personContainer.classList.add("person");

  const name = document.createElement("h4");
  name.classList.add("person_name");
  name.textContent = person.name;
  
  const birth_year = document.createElement("p");
  birth_year.classList.add("person_birth");
  birth_year.textContent = 'Birth Year: ' + person.birth_year;
  
  const gender = document.createElement("p");
  gender.classList.add("person_gender");
  gender.textContent = 'gender: ' + person.gender;

  const image = document.createElement('img');
  image.classList.add('image_person');
  image.src = `./images/${person.name}.png`;
  image.alt = `${person.name}`;
  
  personContainer.append(name);
  personContainer.append(birth_year);
  personContainer.append(gender);
  personContainer.append(image);
  block.append(personContainer);
     
}  

async function getPlanetsInfo(){
  const planetsRequest = await fetch(`${BASE_URL}planets/`);
  const allPlanetsInfo = await planetsRequest.json();
  const planetsInfo = allPlanetsInfo.results;

  block.replaceChildren();
  
  planetsInfo.forEach(renderPlanet);
    
}

function renderPlanet(planetsInfo) {
  
  const planetContainer = document.createElement("div");
  planetContainer.classList.add("planet");

  const planetName = document.createElement('h4');
  planetName.textContent = planetsInfo.name;
  planetName.classList.add("planet_name");

  const planetImage = document.createElement('img');
  planetImage.classList.add('image_planet');
  planetImage.src = `./images/${planetsInfo.name}.png`;
  planetImage.alt = `${planetsInfo.name}`;

  planetContainer.append(planetName);
  planetContainer.append(planetImage);
  block.append(planetContainer);
  
}

buttonGet.addEventListener("click", getPersons);

buttonPlanets.addEventListener("click", getPlanetsInfo);

function reloadPage(){
    location.reload();
}
