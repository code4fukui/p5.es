# p5.es

p5.esは、クリエイティブコーディングライブラリである[p5.js](https://github.com/processing/p5.js)のESモジュールフォークです。このプロジェクトは、オリジナルライブラリをモダンなモジュール構造にリファクタリングし、開発者が必要なコンポーネントのみをインポートできるようにしたものです。現在、活発に開発が行われています。

## デモ

- **[ゲームデモ](https://code4fukui.github.io/p5.es/)**

## コアコンセプト

- **ESモジュールアーキテクチャ**: `Color`、`Vector`、または描画プリミティブなどを直接インポートすることで、バンドルサイズを最小限に抑え、コードの構成を改善します。
- **馴染みのあるp5.js API**: `setup()`や`draw()`のループ構造など、使いやすく表現力豊かなp5.jsのAPIを維持しています。
- **モジュールベースの設計**: ライブラリは論理的なコンポーネント（コア、数学、色、タイポグラフィなど）に分割されており、コードベースの把握や保守が容易になります。
- **初心者フレンドリー**: 一般的なミスに対して明確で役立つメッセージを提供するFriendly Error System (FES) を搭載しています。

## 使い方

モダンなWebプロジェクトでは、p5.esのモジュールをURLから直接インポートできます。

### 例: 単一モジュールの使用

色操作などの特定のタスクのために、個別のクラスをインポートできます。

```javascript
import Color from "https://code4fukui.github.io/p5.es/src/color/p5.Color.js";

// HSL文字列から色を作成
const c = new Color("hsl(100,30%,20%)");

// RGBパーセンテージ文字列として出力
console.log(c.toString("rgb%")); // rgb(18.0%, 26.0%, 14.0%)
```

### 例: シンプルなスケッチ

コアとなる描画APIは、従来のp5.jsのパターンを踏襲しています。

```javascript
import { main, background, fill, rect, frameCount } from "https://code4fukui.github.io/p5.es/p5.js";

main(() => {
  // この関数はdraw()のように毎フレーム実行されます
  const hue = frameCount % 360;
  background(240);
  fill(`hsl(${hue}, 90%, 70%)`);
  rect(20, 20, 60, 60);
});
```

## APIのハイライト

ライブラリはいくつかの主要なモジュールで構成されています:

- **Core**: [`src/core/`](src/core/README.md) - スケッチのライフサイクル（`preload`、`setup`、`draw`）、レンダリングパイプライン、環境変数、およびFriendly Error Systemを管理します。
- **Math**: [`src/math/`](src/math/README.md) - 次のような豊富な数学ツールを提供します:
    - **`p5.Vector`**: 2D/3Dベクトル操作用で、ミュータブル（破壊的）なメソッドと静的（スタティック）メソッドの両方を備えています。
      ```javascript
      // ミュータブル: 元のベクトルを変更します
      let v = new p5.Vector(10, 0, 0);
      v.normalize(); // vは[1, 0, 0]になります

      // 静的: 新しいベクトルを返し、元のベクトルは変更しません
      const v0 = new p5.Vector(10, 0, 0);
      const v1 = p5.Vector.normalize(v0); // v1は[1, 0, 0]になり、v0は[10, 0, 0]のままです
      ```
    - **Noise**: パーリンノイズとシンプレクスノイズの生成。
    - **Random**: ランダムな数値の生成や配列のシャッフルを行う関数。
- **Typography**: (`src/typography/`) - フォント（`.otf`、`.ttf`）の読み込みとテキストレンダリングを処理します。
- **Color**: (`src/color/`) - 色の作成、変換（RGB、HSL、HSB）、および描画スタイルを設定するためのツール。
- **Utilities**: (`src/utilities/`) - 配列操作、データ型変換、文字列フォーマットのためのヘルパー関数。

## 開発

テストスイートを実行するには、[Deno](https://deno.land/)ランタイムが必要です。

```sh
deno test
```

## 参考

このプロジェクトはオリジナルの**[p5.js](https://github.com/processing/p5.js)**のフォークであり、それをベースに構築されています。基盤となる素晴らしい成果を生み出したp5.jsコミュニティ全体に感謝します。

## ライセンス

このプロジェクトは[LGPL-2.1 License](LICENSE)の下で配布されています。
