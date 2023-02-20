const firstName = prompt('Inserisci il tuo nome')
const lastName = prompt('Inserisci il tuo cognome')
const favoriteColor = prompt('Inserisci il tuo colore preferito')

const password = `Password: ${firstName}${lastName}${favoriteColor}89`;
console.log(password);

document.querySelector('h2').innerHTML = password

const userName = `Ciao, ${firstName} ${lastName}`;
console.log(userName)

document.querySelector('h1').innerHTML = userName 