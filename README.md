# wedding_quiz

## アプリ概要

結婚式用のクイズアプリをVue.js x Firebaseで作成しました。
![概要](https://github.com/KamiHitoe/img/blob/master/wedding_quiz/01_main.png)

こちらの記事を参考に
[こちら](https://qiita.com/danishi/items/6f0f2b3052bb1a841d11#comment-ffa9817a67e358782145)
作成しましたが、トランザクションに厳密になる程のアプリでもないし、安価にすませたかったのでDBはRDBではなくNoSQL(Firestore)としました。


## 利用技術

![インフラ構成図](https://github.com/KamiHitoe/wedding_quiz/blob/master/infra.png)

- frontend
    - Vue.js
- backend/infra
    - Firestore
    - Firebase
- DevOps
    - CircleCIで自動デプロイ

### frontend
Vuex, Vue-router, firebaseにはfirebase SDKを用いて接続しています。

### firestoreのコレクション




## 機能一覧

- ユーザ登録機能
- 投票機能
- ランキング機能

## Conclusion

結婚式は延期になりましたが来年は以下のアプリも併せて作成していきたいです。
![【 React / Firebase 】LINE Bot を使用した写真・動画共有アプリ](https://qiita.com/sho373/items/d07f543f8c3fc825f414#comment-fafab8d582a319a08a56)

