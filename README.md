# Node + Postgres (Docker)

Baseado nesse link - https://www.youtube.com/watch?v=KlbL-8CEjN0

0. instalação

nodejs
npm i eslint
npm i typescript @types/node -D
npm i fastify

1. Atualização npm

npm install -g npm@10.8.1

2. iniciar projeto

npm init -y

3. conversção de typescript para javascript
npm i tsx -D

# Postgres + PgAdmin (Docker)

1. Link de apoio
https://stackoverflow.com/questions/55038942/fatal-password-authentication-failed-for-user-postgres-postgresql-11-with-pg

2. realizar modificação no arquivo pg_hba.conf. Incluir a coluna METHOD e setar com trust para acessar pelo PgAdmin.

# TYPE  DATABASE        USER            ADDRESS                 METHOD

# IPv4 local connections:
host    all             all             127.0.0.1/32            trust

# IPv6 local connections:
host    all             all             ::1/128                 trust