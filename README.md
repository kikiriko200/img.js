# img.js
画像を中央で切り抜いて正方形にリサイズします。

## 説明

画像をより短い辺に合わせる形で正方形にリサイズします。

その際、`object-fit:cover`を指定し、中央を切り抜きます。

なお、このJSの動作にはjQueryが必要です。

これによって、`border-radius:50%`が綺麗な真円になります。

## 変数

|名前 |説明 |
|---|---|
|`scale` |拡大率(デフォルト:1)|
|`classname`|クラス名(デフォルト:`.as`)|

## CDN
https://cdn.jsdelivr.net/gh/kikiriko200/img.js/img.js

https://cdn.jsdelivr.net/gh/kikiriko200/img.js/img.min.js

## ライセンス
MIT License

&copy;2019- [DAFU](https://github.com/kikiriko200/)
