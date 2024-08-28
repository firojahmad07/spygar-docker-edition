## Setup System
`
    docker-compose up --build -d
`

## Acess php container
`
    docker exec -it php /bin/bash
`

## Setup instructions

`
yarn install
yarn run build:admin
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate

`

## Create new roles and Users
`
php bin/console spygar:create:role // pass role code and permission as asked and use same role_code for your user
php bin/console spygar:create:user firoj ahmad firojahmad07@gmail.com admin123 1 ROLE_ADMIN
`

## Her we go !
Now you can access symfony application on port localhost:8080 and adminer localhost:8081