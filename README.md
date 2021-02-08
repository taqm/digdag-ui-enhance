# digdag-ui-enhance

## 概要
digdagのWeb管理画面を使いやすくします。
日々の業務で使うようなので一部の機能しかないですがこれから機能を追加していきます。


## 使い方
ブックマークレットとして利用することを想定しています。

↓の内容をブックマークとして登録し、digdagの画面にて実行してください。

```js
javascript:((d)=>{s=d.createElement('script');s.src='https://taqm.github.io/digdag-ui-enhance/dist.js?_='+Date.now();d.head.appendChild(s)})(document)
```

(トップページで実行することをおすすめします)

## 備考
元々そのページで読み込まれていたスクリプトは動き続けるため、
現在の表示に必要のないAPI通信が発生しますがお気になさらず.
