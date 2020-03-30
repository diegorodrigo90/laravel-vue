<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

# Projeto Prático de Laravel + JWT + Vue JS + Axios + Vuex + VueRouter

Feito com Laravel 7

> Projeto em branco apenas para testar a autenticação do vue com laravel 

## Baixar o projeto
Primeiro passo, clonar o projeto:
``` bash
# Clonar
git clone https://github.com/diegorodrigo90/Laravel-vue.git

# Acessar
cd Laravel-vue
```

## Configuração - Backend

``` bash
# Instalar dependências do projeto
composer install

# Configurar variáveis de ambiente
cp .env.example .env
php artisan key:generate

# Configuração do JWT
php artisan jwt:secret

# Criar migrations (tabelas e Seeders)
php artisan migrate --seed

# Criar link simbólico storage/app/public para public/storage/
php artisan storage:link
```

## Login
O usuário de teste é:
```
email:   user@test.com
password: password
```

## Configuração - Frontend
``` bash
# Atualizar dependências
yarn

# Rodar em ambiente local localhost:8080
yarn dev

# Rodar em ambiente de produção
yarn build
```
