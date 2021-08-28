# wedding_quiz

## アプリ概要
結婚式用のクイズアプリをVue.js x Firebaseで作成しました。
![概要](https://github.com/KamiHitoe/img/blob/master/wedding_quiz/01_main.png)


## 利用技術


![インフラ構成図](https://github.com/KamiHitoe/wedding_quiz/blob/master/infra.png)
- frontend
    - Vue.js
    - Bootstrap or tailwindcss
- backend/infra
    - Firestore
    - Firebase


## 機能要件
- frontend
    - 11ページ分の静的ページの表示
    - ユーザから回答のPOSTリクエスト
    - Bootstrapでデコる

- backend
    - firestoreへのAPIによるget/post
    - NoSQLの集計、ランキング化

- infra
    - firebaseによる静的ページのホスティング

- DevOps
    - CircleCIで自動デプロイ
