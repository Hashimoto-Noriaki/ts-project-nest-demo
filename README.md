### 導入技術

### ORM
- ```Prisma```


### Nest.jsの概念

https://qiita.com/Hashimoto-Noriaki/items/d71f972c06563ad60d53

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

### マイグレーション作成

```
npx prisma migrate dev --name init
```

### psqlコマンド
```
docker exec -it ts-project-nest-next-graphql-hasura psql -U nori_user noridb 
```

### テーブルの確認のた
