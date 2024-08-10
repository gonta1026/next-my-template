### set up
package install
```
yarn install
```

DBの起動
```
docker compose up -d
```
マイグレーション実行
```
npx prisma migrate dev
```
型の生成
```
npx prisma generate
```

### git cz
gitのコミットやりやすくなります。
```
npm install -g git-cz 
```
コミット時は下記を実行する。

```
git cz
```

