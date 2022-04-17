# Lion Solutions

### Requisitos
```PHP >= 7.3```

## Para instalar

Após realizar o clone do repositório:

- Instale as dependências do Composer;
- Copie o arquivo env.example para .env e crie uma chave para a aplicação com ```php artisan key:generate```;
- Configure um e-mail que será o remetente das notifications enviadas;

Preencher estes campos do .env com seus dados:

```
MAIL_MAILER=
MAIL_HOST=
MAIL_PORT=
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_ENCRYPTION=
MAIL_FROM_ADDRESS=
MAIL_FROM_NAME=
```

OBS: substitua os campos pelos seus dados de e-mail.

Ao configurar os parâmetros do arquivo .env, rode as migrations com:

```php artisan migrate --seed```

Instale as dependências do node e sirva o front da aplicação com:

```npm install```
```npm run dev```

### PASSO A PASSO

```
1.Run git clone <my-cool-project>
2.Run composer install
3.Run cp .env.example .env
4.Run php artisan key:generate
5.Run php artisan migrate

6. npm install
7. npm run dev

8.Run php artisan serve
```
