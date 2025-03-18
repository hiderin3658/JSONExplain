# HTMLとJavaScriptでJSONを扱う入門

## 目次
1. JSONとは何か
2. JSONの基本構造
3. JSONの書き方
4. HTMLとJavaScriptでJSONを扱う方法
5. JSON文字列とJavaScriptオブジェクトの変換
6. 実践例：JSONデータの表示
7. 実践例：APIからJSONデータを取得する
8. 実習課題
9. よくあるエラーと解決方法
10. 応用編：jQueryでJSONを扱う
11. 参考リソース

---

## 1. JSONとは何か

- **J**ava**S**cript **O**bject **N**otationの略
- データ交換のための軽量なテキスト形式
- 言語非依存のデータフォーマット
- Webアプリケーションでサーバーとクライアント間のデータ通信によく使用される
- 人間にも読みやすく、機械での解析・生成も容易

---

## 2. JSONの基本構造

JSONには2つの基本構造があります：

1. **名前/値のペア**（オブジェクト）
   - 波括弧 `{}` で囲まれた部分
   - `"名前": 値` の形式で記述
   - 複数のペアはカンマ `,` で区切る

2. **順序付きの値のリスト**（配列）
   - 角括弧 `[]` で囲まれた部分
   - 値はカンマ `,` で区切る

---

## 3. JSONの書き方

### 基本的なJSONの例

```json
{
  "名前": "山田太郎",
  "年齢": 30,
  "住所": {
    "都道府県": "東京都",
    "市区町村": "新宿区"
  },
  "趣味": ["読書", "映画鑑賞", "旅行"]
}
```

### JSONで使える値の型

- 文字列（ダブルクォーテーション `"` で囲む）
- 数値（整数または浮動小数点）
- 真偽値（`true` または `false`）
- `null`
- オブジェクト（`{}`）
- 配列（`[]`）

---

## 4. HTMLとJavaScriptでJSONを扱う方法

### 基本的なHTMLファイルの構造

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JSON入門</title>
</head>
<body>
  <h1>JSONを扱う例</h1>
  <div id="output"></div>
  
  <script>
    // ここにJavaScriptコードを書きます
  </script>
</body>
</html>
```

---

## 5. JSON文字列とJavaScriptオブジェクトの変換

### JSON文字列 → JavaScriptオブジェクト（パース）

```javascript
// JSON文字列
const jsonString = '{"名前":"山田太郎","年齢":30,"趣味":["読書","映画鑑賞"]}';

// JSON文字列をJavaScriptオブジェクトに変換
const person = JSON.parse(jsonString);

// オブジェクトのプロパティにアクセス
console.log(person.名前);  // "山田太郎"
console.log(person.趣味[0]); // "読書"
```

### JavaScriptオブジェクト → JSON文字列（シリアライズ）

```javascript
const person = {
  名前: "山田太郎",
  年齢: 30,
  趣味: ["読書", "映画鑑賞"]
};

// JavaScriptオブジェクトをJSON文字列に変換
const jsonString = JSON.stringify(person);
console.log(jsonString);
// {"名前":"山田太郎","年齢":30,"趣味":["読書","映画鑑賞"]}
```

---

## 6. 実践例：JSONデータの表示

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JSON表示例</title>
</head>
<body>
  <h1>ユーザー情報</h1>
  <div id="user-info"></div>
  
  <script>
    // JSONデータ（通常はサーバーやAPIから取得）
    const jsonData = `{
      "ユーザー": [
        {
          "id": 1,
          "名前": "山田太郎",
          "メール": "yamada@example.com"
        },
        {
          "id": 2,
          "名前": "鈴木花子",
          "メール": "suzuki@example.com"
        }
      ]
    }`;
    
    // JSONをパース
    const data = JSON.parse(jsonData);
    
    // HTMLに表示
    const userInfoDiv = document.getElementById("user-info");
    let html = "<ul>";
    
    data.ユーザー.forEach(user => {
      html += `<li>ID: ${user.id}, 名前: ${user.名前}, メール: ${user.メール}</li>`;
    });
    
    html += "</ul>";
    userInfoDiv.innerHTML = html;
  </script>
</body>
</html>
```

---

## 7. 実践例：APIからJSONデータを取得する

```javascript
// Fetch APIを使ってデータを取得
fetch('https://api.example.com/data')
  .then(response => {
    // レスポンスをJSONとして解析
    return response.json();
  })
  .then(data => {
    // 取得したデータを使って何かする
    console.log(data);
    displayData(data);
  })
  .catch(error => {
    console.error('データの取得に失敗しました:', error);
  });

// データ表示関数
function displayData(data) {
  const outputDiv = document.getElementById('output');
  // データを表示するロジック
}
```

---

## 8. 実習課題

### 課題1: 簡単なJSONオブジェクトの作成と表示
自分の情報（名前、年齢、趣味など）をJSONで作成し、HTML上に表示してみましょう。

### 課題2: 外部JSONファイルの読み込み
JSONファイルを作成し、fetch APIを使って読み込んでみましょう。

### 課題3: 公開APIからデータを取得
公開されているAPIからJSONデータを取得し、表示してみましょう。
例：天気API、GitHub API など

---

## 9. よくあるエラーと解決方法

### JSONの構文エラー
- カンマの付け忘れや余分なカンマ
- ダブルクォーテーションの不足
- 閉じ括弧の不足

### 解決方法
- JSONバリデーターツールを使用する
- ブラウザのコンソールでエラーメッセージを確認する
- コードを整形して見やすくする

---

## 10. 応用編：jQueryでJSONを扱う

### 例1: jQueryでJSONファイルを読み込んで表示する

```javascript
// JSONファイルをAjaxで読み込む基本的な例
$(document).ready(function() {
  $.ajax({
    url: "data/users.json",
    dataType: "json",
    success: function(data) {
      // 成功時の処理
      let html = "<ul>";
      
      // JSONデータを反復処理して表示
      $.each(data.users, function(index, user) {
        html += `<li>${user.name} (${user.email})</li>`;
      });
      
      html += "</ul>";
      $("#user-list").html(html);
    },
    error: function(xhr, status, error) {
      // エラー時の処理
      $("#user-list").html("<p>データの読み込みに失敗しました: " + error + "</p>");
    }
  });
});
```

### 例2: jQueryでフォーム送信時にJSONデータを処理する

```javascript
// フォームデータをJSON形式で送信する例
$(document).ready(function() {
  $("#user-form").on("submit", function(event) {
    event.preventDefault();
    
    // フォームデータをオブジェクトに変換
    const userData = {
      name: $("#name").val(),
      email: $("#email").val(),
      age: parseInt($("#age").val()),
      interests: $("#interests").val().split(",").map(item => item.trim())
    };
    
    // JSONに変換して表示
    const jsonData = JSON.stringify(userData, null, 2);
    $("#json-output").html("<pre>" + jsonData + "</pre>");
    
    // サーバーに送信する場合はこのようにします
    $.ajax({
      url: "api/saveUser",
      type: "POST",
      contentType: "application/json",
      data: jsonData,
      success: function(response) {
        $("#status").html("<p>データが正常に送信されました</p>");
      },
      error: function(xhr, status, error) {
        $("#status").html("<p>エラーが発生しました: " + error + "</p>");
      }
    });
  });
});
```

---

## 11. 参考リソース

1. [MDN Web Docs「JSON の操作」](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects/JSON)
2. [現代の JavaScript チュートリアル](https://ja.javascript.info/)
3. [JSON公式サイト](https://www.json.org/json-ja.html)
4. [アンドエンジニア「JSON入門！」](https://and-engineer.com/articles/YV5IhREAACMA7NZJ)
5. [システムインテグレータ「JSONとは？」](https://products.sint.co.jp/siob/blog/json)
6. [jQuery公式ドキュメント「Ajax」](https://api.jquery.com/category/ajax/)
