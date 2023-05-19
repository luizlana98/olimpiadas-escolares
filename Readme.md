## Olimpiadas escolares

### Como rodar o projeto:

    1 - Clonar repositório
        Comando: git clone https://github.com/israel-bruno/olimpiadas-escolares.git

    2 - Abrir terminal na pasta do projeto


    3 - Executar comando para instalar os pacotes do NodeJS
        Comando: npm install

    4 - Rodar projeto
        Comando: npm run dev

### Como testar os endpoints:

Url base: http://localhost:3000

    #### Metodo 1 (Client http)

    1 - Baixar algum client http (Postman / Insomnia /Httpie etc.)

    2 - Configurar uma requisição para um endpoint

    3 - Enviar requisição

    Tutorial: https://www.youtube.com/watch?v=uImHd39Rmyg

    ### Metodo 2 - Usar o axios (React Native)

    1 - Instalar axios
       npm i axios

    Executar o codigo abaixo:

    Exemplo:

        const axios = require('axios')

        axios
        .post('http://localhost:3000/login', {
            username: 'teste',
            password: '123',
        })
        .then((response) => console.log(response.data))
