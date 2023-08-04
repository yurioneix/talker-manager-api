# Talker Manager API

Projeto desenvolvido no módulo de Backend da Trybe, onde foi criado uma aplicação de cadastro de talkers (palestrantes) em que será possível cadastrar, visualizar, pesquisar, editar e excluir informações (CRUD).

## Instalação

Em um terminal, inicie os containers
```bash
   docker-compose up -d
```

Acesse o terminal do container
```bash
  docker exec -it talker_manager bash  
```

Para rodar a aplicacao:
```bash
  npm start
```

Ou para iniciar com live-reload
```bash
  npm run dev
```

## Endpoints
- <strong>GET `/talker` </strong>

<details>
  <summary>Retorna todos os palestrantes com o <code>status 200</code>:</summary><br>

  ```json
  [
    {
      "name": "Henrique Albuquerque",
      "age": 62,
      "id": 1,
      "talk": { "watchedAt": "23/10/2020", "rate": 5 }
    },
    {
      "name": "Heloísa Albuquerque",
      "age": 67,
      "id": 2,
      "talk": { "watchedAt": "23/10/2020", "rate": 5 }
    },
    {
      "name": "Ricardo Xavier Filho",
      "age": 33,
      "id": 3,
      "talk": { "watchedAt": "23/10/2020", "rate": 5 }
    },
    {
      "name": "Marcos Costa",
      "age": 24,
      "id": 4,
      "talk": { "watchedAt": "23/10/2020", "rate": 5 }
    }
  ]
```
</details>

<details>
  <summary>Caso não haja palestrantes, retorna <code>status 200</code> com um array vazio:</summary><br>

  ```json
[]
  ```
</details>

<br>

- <strong> GET `/talker/:id` </strong>

<details>
  <summary>A requisição retorna o <code>status 200</code> e uma pessoa palestrante com base no <code>id</code> da rota. Por exemplo, ao fazer uma requisição <code>/talker/1</code>, a resposta deve ser:</summary><br />

  ```json
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  }
  ```

</details>

<details>
  <summary>Caso não seja encontrada uma pessoa palestrante com base no <code>id</code> da rota, a requisição retorna o <code>status 404</code> com o seguinte corpo:</summary><br />
  
  ```json
  {
    "message": "Pessoa palestrante não encontrada"
  }
  ```

</details>

<br>

- <strong> POST `/login` </strong>

  O endpoint deverá receber no corpo da requisição os campos `email` e `password` e retornar um token aleatório de 16 caracteres.

<details>
  <summary>O corpo da requisição deverá ter o seguinte formato:</summary><br />

  ```json
  {
    "email": "email@email.com",
    "password": "123456"
  }
  ```

</details>

<details>
  <summary> O endpoint deverá retornar um código de <code>status 200</code> com o token gerado e o seguinte corpo: </summary><br />
  
  ```json
  {
    "token": "7mqaVRXJSp886CGr"
  }
  ```
  
</details>

<br>

- <strong>POST `/talker`</strong>
  
O endpoint deve ser capaz de adicionar uma nova pessoa palestrante ao seu arquivo.

<details>
  
  <summary>O corpo da requisição deverá ter o seguinte formato:</summary><br />

  ```json
  {
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```
- Todos os campos são obrigatórios e respeitam suas respectivas validações
  
- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token inválido"
    }
    ```
  
- Caso esteja tudo certo, retorne o `status 201`  e a pessoa cadastrada.
  
- O endpoint deve retornar o `status 201` e a pessoa palestrante que foi cadastrada, da seguinte forma:

  ```json
  {
    "id": 1,
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

</details>

<br>

- <strong>DELETE `/talker/:id`</strong>

<details>
  <summary>O endpoint deve deletar uma pessoa palestrante com base no id da rota. Devendo retornar o <code>status 204</code>, sem conteúdo na resposta.</summary><br />

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token não encontrado"
      }
      ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token inválido"
      }
      ```
</details>

<br>

- <strong>GET `/talker/search`</strong>

<details>
   <summary>O endpoint deve retornar um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam `q` da URL. Devendo retornar o <code>status 200</code>, com o seguinte corpo:</summary>
<br>
Exemplo de busca: <code>/talker/search?q=Da</code>

   ```json
    [
      {
        "id": 1,
        "name": "Danielle Santos",
        "age": 56,
        "talk": {
          "watchedAt": "22/10/2019",
          "rate": 5,
        },
      }
    ]
   ```

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

 Caso o token não seja encontrado retorna um código de `status 401`, com o seguinte corpo:

   ```json
      {
        "message": "Token não encontrado"
      }
   ```

  - Caso o token seja inválido retorna um código de `status 401`, com o seguinte corpo:

    ```json
      {
        "message": "Token inválido"
      }
    ```

- Caso `searchTerm` não seja informado ou esteja vazio, o endpoint deverá retornar um array com todas as pessoas palestrantes cadastradas, assim como no endpoint GET `/talker`, com um <code>status 200</code>.

- Caso nenhuma pessoa palestrante satisfaça a busca, o endpoint deve retornar o <code>status 200</code> e um array vazio.

</details>


## Pastas/arquivos desenvolvidos por mim

```bash
    src/middlewares
    src/routes
    src/utils
    index.js
    src/App.js
    src/pages
```
