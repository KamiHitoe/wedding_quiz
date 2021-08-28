# wedding_quiz

## アプリ概要
結婚式用のクイズアプリをVue.js x Firebaseで作成しました。
Firebaseでバックエンドを大幅に省略しているので3日程度で完成しました。
未経験エンジニアの私でも簡単にできたので、非エンジニアの方でもちょっと勉強すれば結婚式等に実装できるアプリなんじゃないかと思います。
あと、基本的に**無料**です。

![概要](https://github.com/KamiHitoe/img/blob/master/wedding_quiz/01_main.gif)

※配信にCDNを利用していないからか、画像をFirestoreに静的に配置しているからかして画像の読み取りが遅いですね……

トップページでユーザ登録してもらった後に、10問のクイズを出題、最後に答え合わせをしてランキングが表示されます。

![ランキング](https://github.com/KamiHitoe/img/blob/master/wedding_quiz/03_ranking.png)

アプリ作成にあたって[こちら](https://qiita.com/danishi/items/6f0f2b3052bb1a841d11#comment-ffa9817a67e358782145)
の記事を参考にさせて頂きましたが、トランザクションに厳密になる程のアプリでもないし、安価にすませたかったのでDBはRDBではなくNoSQL(Firestore)としました。


## 利用技術

![インフラ構成図](https://github.com/KamiHitoe/wedding_quiz/blob/master/infra.png)

- frontend
    - Vue.js
- backend
    - Firestore
- infra
    - Firebase hosting
- DevOps
    - CircleCI

### frontend
Vuex, Vue-router, firebaseにはfirebase SDKを用いて接続しています。
Vueコンポーネントやアセットの画像をそのままfirebaseに静的ホスティングさせています。

### firestoreのコレクション
DBにはユーザごとの回答、得点、正答さえあればクイズアプリの要件は満たせますのでコレクションは以下の3つしか必要ではありません。

- answersコレクション

|  フィールド  |  型  |  説明  |
| ---- | ---- ||
|  answerArray  |  array  | ユーザの回答を格納する配列。問題番号と配列のインデックスを合わせているので、同じ問題を複数回答されても異常は発生しません |
|  username  |  string  | ユーザネームを格納 |

- scoresコレクション

|  フィールド  |  型  |  説明  |
| ---- | ---- ||
|  score  |  number  | ランキング用にユーザの得点を格納 |
|  username  |  string  | ユーザネームを格納 |

- correctAnswersコレクション

|  フィールド  |  型  |  説明  |
| ---- | ---- ||
|  score  |  number  | ランキング用にユーザの得点を格納 |
|  username  |  string  | ユーザネームを格納 |


## 当日の流れ(想定)
想定していた当日の流れです。
延期になってしまった今、この想定で本番運用できるかは確証がないですが……

1. 席札に記載したQRコード or URLをスマホで開く
2. トップページからユーザ登録して待機
3. 問題は司会進行と同時に解き進めてもらうようアナウンス
4. 1問1分程度で進行（計10分程度）
5. 得点が表示され、ランキングが閲覧可能
6. 全員解き終わるまで待機
7. 上位3名に豪華景品を授与（想定である）


## Conclusion

結婚式は延期になりましたが、延期後は以下のアプリも併せて開発して結婚式の生産性を爆上げしていきたい！
- [【 React / Firebase 】LINE Bot を使用した写真・動画共有アプリ](https://qiita.com/sho373/items/d07f543f8c3fc825f414#comment-fafab8d582a319a08a56)



