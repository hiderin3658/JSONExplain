import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-12 py-6">
          <h1 className="main-title text-indigo-700">
            JSON入門！
          </h1>
        </header>
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">目次</h2>
          <ol className="list-decimal list-inside grid grid-cols-1 md:grid-cols-2 gap-3 ml-4">
            <li className="mb-2"><a href="#section1" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">JSONとは何か</a></li>
            <li className="mb-2"><a href="#section2" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">JSONの基本構造</a></li>
            <li className="mb-2"><a href="#section3" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">JSONの書き方</a></li>
            <li className="mb-2"><a href="#section4" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">HTMLとJavaScriptでJSONを扱う方法</a></li>
            <li className="mb-2"><a href="#section5" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">JSON文字列とJavaScriptオブジェクトの変換</a></li>
            <li className="mb-2"><a href="#section6" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">実践例：JSONデータの表示</a></li>
            <li className="mb-2"><a href="#section7" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">実践例：APIからJSONデータを取得する</a></li>
            <li className="mb-2"><a href="#section8" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">実習課題</a></li>
            <li className="mb-2"><a href="#section9" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">よくあるエラーと解決方法</a></li>
            <li className="mb-2"><a href="#section10" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">応用編：jQueryでJSONを扱う</a></li>
            <li className="mb-2"><a href="#section11" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">参考リソース</a></li>
          </ol>
        </div>

        <hr className="my-8 border-t border-gray-200" />

        <section id="section1" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">1. JSONとは何か</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span><strong className="text-indigo-700">J</strong>ava<strong className="text-indigo-700">S</strong>cript <strong className="text-indigo-700">O</strong>bject <strong className="text-indigo-700">N</strong>otationの略</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>データ交換のための軽量なテキスト形式</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>言語非依存のデータフォーマット</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>Webアプリケーションでサーバーとクライアント間のデータ通信によく使用される</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>人間にも読みやすく、機械での解析・生成も容易</span>
            </li>
          </ul>
        </section>

        <section id="section2" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">2. JSONの基本構造</h2>
          <p className="mb-4">JSONには2つの基本構造があります：</p>
          <ol className="list-decimal list-inside ml-4 space-y-4">
            <li>
              <strong className="text-indigo-700">名前/値のペア</strong>（オブジェクト）
              <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                <li>波括弧 <code className="bg-gray-100 px-2 py-1 rounded text-pink-600">&#123;&#125;</code> で囲まれた部分</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded text-pink-600">"名前": 値</code> の形式で記述</li>
                <li>複数のペアはカンマ <code className="bg-gray-100 px-2 py-1 rounded text-pink-600">,</code> で区切る</li>
              </ul>
            </li>
            <li className="mt-4">
              <strong className="text-indigo-700">順序付きの値のリスト</strong>（配列）
              <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                <li>角括弧 <code className="bg-gray-100 px-2 py-1 rounded text-pink-600">[]</code> で囲まれた部分</li>
                <li>値はカンマ <code className="bg-gray-100 px-2 py-1 rounded text-pink-600">,</code> で区切る</li>
              </ul>
            </li>
          </ol>
        </section>

        <section id="section3" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">3. JSONの書き方</h2>
          <h3 className="text-xl font-medium mb-3 text-indigo-600">基本的なJSONの例</h3>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-md mb-6 overflow-auto">
            <code>{`{
  "名前": "山田太郎",
  "年齢": 30,
  "住所": {
    "都道府県": "東京都",
    "市区町村": "新宿区"
  },
  "趣味": ["読書", "映画鑑賞", "旅行"]
}`}</code>
          </pre>

          <h3 className="text-xl font-medium mb-3 text-indigo-600">JSONで使える値の型</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-4">
            <li className="flex items-center bg-blue-50 p-3 rounded-lg">
              <span className="text-blue-500 mr-2">•</span>
              <span>文字列（ダブルクォーテーション <code className="bg-gray-100 px-2 py-1 rounded text-pink-600">"</code> で囲む）</span>
            </li>
            <li className="flex items-center bg-blue-50 p-3 rounded-lg">
              <span className="text-blue-500 mr-2">•</span>
              <span>数値（整数または浮動小数点）</span>
            </li>
            <li className="flex items-center bg-blue-50 p-3 rounded-lg">
              <span className="text-blue-500 mr-2">•</span>
              <span>真偽値（<code className="bg-gray-100 px-2 py-1 rounded text-pink-600">true</code> または <code className="bg-gray-100 px-2 py-1 rounded text-pink-600">false</code>）</span>
            </li>
            <li className="flex items-center bg-blue-50 p-3 rounded-lg">
              <span className="text-blue-500 mr-2">•</span>
              <span><code className="bg-gray-100 px-2 py-1 rounded text-pink-600">null</code></span>
            </li>
            <li className="flex items-center bg-blue-50 p-3 rounded-lg">
              <span className="text-blue-500 mr-2">•</span>
              <span>オブジェクト（<code className="bg-gray-100 px-2 py-1 rounded text-pink-600">&#123;&#125;</code>）</span>
            </li>
            <li className="flex items-center bg-blue-50 p-3 rounded-lg">
              <span className="text-blue-500 mr-2">•</span>
              <span>配列（<code className="bg-gray-100 px-2 py-1 rounded text-pink-600">[]</code>）</span>
            </li>
          </ul>
        </section>

        <section id="section4" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">4. HTMLとJavaScriptでJSONを扱う方法</h2>
          <h3 className="text-xl font-medium mb-3 text-indigo-600">基本的なHTMLファイルの構造</h3>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-md mb-6 overflow-auto">
            <code>{`<!DOCTYPE html>
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
</html>`}</code>
          </pre>
        </section>

        <section id="section5" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">5. JSON文字列とJavaScriptオブジェクトの変換</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-indigo-600">JSON文字列 → JavaScriptオブジェクト（パース）</h3>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-auto">
                <code>{`// JSON文字列
const jsonString = '{"名前":"山田太郎","年齢":30,"趣味":["読書","映画鑑賞"]}';

// JSON文字列をJavaScriptオブジェクトに変換
const person = JSON.parse(jsonString);

// オブジェクトのプロパティにアクセス
console.log(person.名前);  // "山田太郎"
console.log(person.趣味[0]); // "読書"`}</code>
              </pre>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-indigo-600">JavaScriptオブジェクト → JSON文字列（シリアライズ）</h3>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-auto">
                <code>{`const person = {
  名前: "山田太郎",
  年齢: 30,
  趣味: ["読書", "映画鑑賞"]
};

// JavaScriptオブジェクトをJSON文字列に変換
const jsonString = JSON.stringify(person);
console.log(jsonString);
// {"名前":"山田太郎","年齢":30,"趣味":["読書","映画鑑賞"]}`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section id="section6" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">6. 実践例：JSONデータの表示</h2>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-md mb-6 overflow-auto">
            <code>{`<!DOCTYPE html>
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
    const jsonData = \`{
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
    }\`;
    
    // JSONをパース
    const data = JSON.parse(jsonData);
    
    // HTMLに表示
    const userInfoDiv = document.getElementById("user-info");
    let html = "<ul>";
    
    data.ユーザー.forEach(user => {
      html += \`<li>ID: \${user.id}, 名前: \${user.名前}, メール: \${user.メール}</li>\`;
    });
    
    html += "</ul>";
    userInfoDiv.innerHTML = html;
  </script>
</body>
</html>`}</code>
          </pre>
        </section>

        <section id="section7" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">7. 実践例：APIからJSONデータを取得する</h2>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-md mb-6 overflow-auto">
            <code>{`// Fetch APIを使ってデータを取得
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
}`}</code>
          </pre>
        </section>

        <section id="section8" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-700 border-b pb-2">8. 実習課題</h2>
          
          <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md hover:shadow-lg transition-all">
            <h3 className="text-xl font-medium mb-3 text-indigo-700">課題1: 簡単なJSONオブジェクトの作成と表示</h3>
            <p className="mb-4 text-gray-700">自分の情報（名前、年齢、趣味など）をJSONで作成し、HTML上に表示してみましょう。</p>
            <Link href="/answers/exercise1" className="inline-block mt-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:-translate-y-1 hover:shadow-md">
              答えはこちら
            </Link>
          </div>
          
          <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md hover:shadow-lg transition-all">
            <h3 className="text-xl font-medium mb-3 text-indigo-700">課題2: 外部JSONファイルの読み込み</h3>
            <p className="mb-4 text-gray-700">JSONファイルを作成し、fetch APIを使って読み込んでみましょう。</p>
            <Link href="/answers/exercise2" className="inline-block mt-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:-translate-y-1 hover:shadow-md">
              答えはこちら
            </Link>
          </div>
          
          <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md hover:shadow-lg transition-all">
            <h3 className="text-xl font-medium mb-3 text-indigo-700">課題3: 公開APIからデータを取得</h3>
            <p className="mb-4 text-gray-700">公開されているAPIからJSONデータを取得し、表示してみましょう。<br />例：天気API、GitHub API など</p>
            <Link href="/answers/exercise3" className="inline-block mt-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:-translate-y-1 hover:shadow-md">
              答えはこちら
            </Link>
          </div>
        </section>

        <section id="section9" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">9. よくあるエラーと解決方法</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-indigo-600">JSONの構文エラー</h3>
              <ul className="list-disc list-inside ml-4 space-y-2 mb-6">
                <li className="text-gray-700">カンマの付け忘れや余分なカンマ</li>
                <li className="text-gray-700">ダブルクォーテーションの不足</li>
                <li className="text-gray-700">閉じ括弧の不足</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-indigo-600">解決方法</h3>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li className="text-gray-700">JSONバリデーターツールを使用する</li>
                <li className="text-gray-700">ブラウザのコンソールでエラーメッセージを確認する</li>
                <li className="text-gray-700">コードを整形して見やすくする</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="section10" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">10. 応用編：jQueryでJSONを扱う</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-indigo-600">例1: jQueryでJSONファイルを読み込んで表示する</h3>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-auto">
                <code>{`// JSONファイルをAjaxで読み込む基本的な例
$(document).ready(function() {
  $.ajax({
    url: "data/users.json",
    dataType: "json",
    success: function(data) {
      // 成功時の処理
      let html = "<ul>";
      
      // JSONデータを反復処理して表示
      $.each(data.users, function(index, user) {
        html += \`<li>\${user.name} (\${user.email})</li>\`;
      });
      
      html += "</ul>";
      $("#user-list").html(html);
    },
    error: function(xhr, status, error) {
      // エラー時の処理
      $("#user-list").html("<p>データの読み込みに失敗しました: " + error + "</p>");
    }
  });
});`}</code>
              </pre>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-indigo-600">例2: jQueryでフォーム送信時にJSONデータを処理する</h3>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-auto">
                <code>{`// フォームデータをJSON形式で送信する例
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
});`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section id="section11" className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700 border-b pb-2">11. 参考リソース</h2>
          <ol className="list-decimal list-inside ml-4 space-y-3">
            <li><a href="https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects/JSON" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">MDN Web Docs「JSON の操作」</a></li>
            <li><a href="https://ja.javascript.info/" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">現代の JavaScript チュートリアル</a></li>
            <li><a href="https://www.json.org/json-ja.html" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">JSON公式サイト</a></li>
            <li><a href="https://and-engineer.com/articles/YV5IhREAACMA7NZJ" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">アンドエンジニア「JSON入門！」</a></li>
            <li><a href="https://products.sint.co.jp/siob/blog/json" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">システムインテグレータ「JSONとは？」</a></li>
            <li><a href="https://api.jquery.com/category/ajax/" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">jQuery公式ドキュメント「Ajax」</a></li>
          </ol>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600"> 2025 JSON入門講座</p>
        </div>
      </div>
    </div>
  );
}
