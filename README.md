## Setup System
`
    - docker-compose up --build -d
`
## Acess php container
`
   - docker exec -it php bash
`

## Setup instructions
`
    - yarn nstall
    - yarn run build:admin
    - yarn run build:css
    - php bin/console doctrine:database:create
    - php bin/console d:s:u -f
    - php bin/console doctrine:fixtures:load
`

## Create new roles and Users
`
    - php bin/console spygar:create:role // pass role code and permission as asked and use same role_code for your user
    - php bin/console spygar:create:user John Doe admin@spygar.com admin123 1 ROLE_ADMIN
`

## Here we Go !!
Now you can access http://localhost:8080 your application.


