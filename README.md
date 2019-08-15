
# Notes Service

This is the Node JS Backend for the GraphQL-Server-Tutorial-with-Apollo-Server-and-Express


- Clone the repo:

  ```shell
  git clone https://github.com/jimmykimani/GraphQL-Server-Tutorial-with-Apollo-Server-and-Express
  ```

- Checkout the `development` branch:

  ```shell
    git checkout development
  ```
  
  - Install and start `PostgreSQL` DBMS and create a database with the details in the `.env`:

  ```sql
  CREATE DATABASE mynotes;
  CREATE USER postgres;
  GRANT ALL PRIVILEGES ON DATABASE members TO postgres;
  ```

- Edit the `.env` with the following settings:

  ```dosini
  PORT=3000
  DATABASE=mynotes
  DATABASE_USER=postgres
  DATABASE_PASSWORD=postgres
  ```
  
  
- To start the server run:

  ```shell
  npm start
  ```
