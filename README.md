### 導入技術

### ORM
- ```Prisma```


### Nest.jsの概念

https://zenn.dev/norihashimo/articles/de0edfde59edf2

- service
```
nest g service article --no-spec
```
- resolver
```
nest g resolver article --no-spec
```

### 公式ドキュメント

https://docs.nestjs.com/

### docker起動

```
docker compose up -d
```

### サーバー起動

```
$ npm run start:dev
```

### ESLint Prettier

- ESLint

```
npx eslint . --fix
```

- Prettier

```
npx prettier --write .
```

### playgrondでQueryを実行

サーバー実行

- http://localhost:3000/graphql

<img width="1440" alt="スクリーンショット 2024-11-03 13 19 23" src="https://github.com/user-attachments/assets/f5548496-bac8-4432-bbb1-c14aeb548c0d">

# Prisma生成

```
npx prisma generate
```

### prisma studio
```
npx prisma studio
```

### マイグレーション作成

```
npx prisma migrate dev --name init
```

### Hasura


### psqlコマンド
```
docker exec -it ts-project-nest-next-graphql-hasura psql -U nori_user noridb 
```

### テーブルの確認のた
