## Setup System
`
    docker-compose up --build -d
`
## Acess php container
`
    docker exec -it php bash
`

## Setup instructions
`
yarn/npm install
yarn run build:admin
npm run build:css
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
`

## Create new roles and Users
`
php bin/console spygar:create:role // pass role code and permission as asked and use same role_code for your user
php bin/console spygar:create:user firoj ahmad firojahmad07@gmail.com admin123 1 ROLE_ADMIN
`

## Authentication Setup
mkdir -p config/jwt
openssl genrsa -out config/jwt/private.pem -aes256 4096
openssl rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem