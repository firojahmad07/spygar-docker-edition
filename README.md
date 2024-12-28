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
yarn nstall
yarn run build:admin
npm run build:css
php bin/console doctrine:database:create
php bin/console d:s:u -f
php bin/console doctrine:fixtures:load
`

## Create new roles and Users
`
php bin/console spygar:create:role // pass role code and permission as asked and use same role_code for your user
php bin/console spygar:create:user John Doe admin@spygar.com admin123 1 ROLE_ADMIN
`

## Authentication Setup
mkdir -p config/jwt
openssl genrsa -out config/jwt/private.pem -aes256 4096
openssl rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem

## JWT Permissions
chmode -R 777 config/jwt/**



