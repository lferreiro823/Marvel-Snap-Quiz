const apiUrl = 'https://marvelsnapzone.com/getinfo/?searchtype=cards&searchcardstype=true';
const proxyUrl = 'https://lferreiro823.github.io/Marvel-Snap-Quiz/proxy/';

fetch(proxyUrl, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => response.json())
.then(data => console.log('Datos de la API:', data))
.catch(error => console.error('Error al obtener datos desde la API:', error));
