const axios = require('axios');
axios.get('https://api.github.com/repos/nodejs/node')
.then(response => {
console.log('Nome do Repositório:', response.data.name);
console.log('Descrição:', response.data.description);
console.log('Número de Estrelas:', response.data.stargazers_count);
})
.catch(error => {
console.error('Erro ao fazer a requisição:', error);
});