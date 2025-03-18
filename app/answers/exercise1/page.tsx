export default function Exercise1Answer() {
  return (
    <div className="exercise-page">
      <h1 className="exercise-title">課題1: 簡単なJSONオブジェクトの作成と表示</h1>
      <div className="mb-8">
        <a href="/" className="back-link">← トップページに戻る</a>
      </div>

      <div className="exercise-section">
        <h2>課題内容</h2>
        <p>自分の情報（名前、年齢、趣味など）をJSONで作成し、HTML上に表示してみましょう。</p>
      </div>

      <div className="exercise-section">
        <h2>解答例</h2>
        
        <h3>HTML</h3>
        <pre className="code-block">
          <code>{`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JSONオブジェクトの表示</title>
</head>
<body>
  <h1>プロフィール情報</h1>
  <div id="profile-container">
    <!-- ここにJSONデータが表示されます -->
  </div>

  <script>
    // ここにJavaScriptコードを書きます
  </script>
</body>
</html>`}</code>
        </pre>

        <h3>JavaScript</h3>
        <pre className="code-block">
          <code>{`// 自分の情報をJSONオブジェクトとして作成
const myProfile = {
  "名前": "山田太郎",
  "年齢": 25,
  "職業": "Webエンジニア",
  "住所": {
    "都道府県": "東京都",
    "市区町村": "渋谷区"
  },
  "趣味": ["プログラミング", "読書", "旅行", "料理"],
  "SNS": {
    "Twitter": "@yamada_taro",
    "GitHub": "yamada-taro"
  }
};

// JSONオブジェクトを文字列に変換（表示用）
const myProfileJSON = JSON.stringify(myProfile, null, 2);
console.log(myProfileJSON);

// HTMLに表示する関数
function displayProfile(profile) {
  const container = document.getElementById('profile-container');
  
  // 基本情報の表示
  const basicInfo = document.createElement('div');
  basicInfo.innerHTML = \`
    <h2>\${profile.名前}</h2>
    <p><strong>年齢:</strong> \${profile.年齢}歳</p>
    <p><strong>職業:</strong> \${profile.職業}</p>
    <p><strong>住所:</strong> \${profile.住所.都道府県}\${profile.住所.市区町村}</p>
  \`;
  
  // 趣味の表示
  const hobbies = document.createElement('div');
  hobbies.innerHTML = '<h3>趣味</h3>';
  
  const hobbyList = document.createElement('div');
  hobbyList.className = 'hobby-list';
  
  profile.趣味.forEach(hobby => {
    const hobbyItem = document.createElement('span');
    hobbyItem.className = 'hobby-item';
    hobbyItem.textContent = hobby;
    hobbyList.appendChild(hobbyItem);
  });
  
  hobbies.appendChild(hobbyList);
  
  // SNSの表示
  const sns = document.createElement('div');
  sns.innerHTML = \`
    <h3>SNS</h3>
    <p><strong>Twitter:</strong> \${profile.SNS.Twitter}</p>
    <p><strong>GitHub:</strong> \${profile.SNS.GitHub}</p>
  \`;
  
  // 全ての要素をコンテナに追加
  container.appendChild(basicInfo);
  container.appendChild(hobbies);
  container.appendChild(sns);
}

// 関数を呼び出してプロフィールを表示
displayProfile(myProfile);`}</code>
        </pre>
      </div>

      <div className="exercise-section">
        <h2>解説</h2>
        <ol className="list-decimal list-inside space-y-4 ml-4">
          <li>
            <strong>JSONオブジェクトの作成</strong>
            <p className="ml-6 mt-2">JavaScriptでJSONオブジェクトを直接作成しています。オブジェクト、配列、文字列、数値などの異なる型の値を含んでいます。</p>
          </li>
          <li>
            <strong>JSON.stringifyの使用</strong>
            <p className="ml-6 mt-2">コンソールに表示するために、<code className="bg-gray-100 px-1 rounded">JSON.stringify()</code>メソッドを使用してJSONオブジェクトを文字列に変換しています。第2引数の<code className="bg-gray-100 px-1 rounded">null</code>は置換関数（使用しない場合はnull）、第3引数の<code className="bg-gray-100 px-1 rounded">2</code>はインデントのスペース数を指定しています。</p>
          </li>
          <li>
            <strong>HTMLへの表示</strong>
            <p className="ml-6 mt-2">JavaScriptを使用して、JSONオブジェクトの各プロパティを取得し、HTMLに表示しています。オブジェクトのネストされたプロパティ（住所やSNS）や配列（趣味）にもアクセスして表示しています。</p>
          </li>
          <li>
            <strong>スタイリング</strong>
            <p className="ml-6 mt-2">CSSクラスを使用して、表示されるJSONデータを見やすく整理しています。趣味のリストは横並びに表示されます。</p>
          </li>
        </ol>
      </div>

      <div className="exercise-section">
        <h2>ポイント</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>JavaScriptオブジェクトとJSONは非常に似ていますが、JSONはより厳格な構文を持っています（例：プロパティ名はダブルクォーテーションで囲む必要があります）。</li>
          <li>実際のアプリケーションでは、JSONデータは通常サーバーから取得しますが、この例では簡単のためにクライアント側で直接作成しています。</li>
          <li>JSONデータの構造に応じて、適切なHTMLを動的に生成することで、データを見やすく表示できます。</li>
          <li>このサンプルを拡張して、フォームからデータを入力し、JSONオブジェクトに変換して表示することもできます。</li>
        </ul>
      </div>

      <div className="mt-8">
        <a href="/" className="back-link">← トップページに戻る</a>
      </div>
    </div>
  );
}
