import Link from "next/link";

export default function Exercise2Answer() {
  return (
    <div className="exercise-page">
      <h1 className="exercise-title">課題2: 外部JSONファイルの読み込み</h1>

      <div className="exercise-section">
        <h2>課題内容</h2>
        <p>JSONファイルを作成し、fetch APIを使って読み込んでみましょう。</p>
      </div>

      <div className="exercise-section">
        <h2>解答例</h2>
        
        <h3>1. JSONファイルの作成 (data.json)</h3>
        <pre className="code-block">
          <code>{`{
  "社員": [
    {
      "id": 1001,
      "名前": "佐藤一郎",
      "部署": "営業部",
      "役職": "部長",
      "入社年": 2010,
      "スキル": ["交渉", "プレゼンテーション", "マネジメント"]
    },
    {
      "id": 1002,
      "名前": "鈴木花子",
      "部署": "開発部",
      "役職": "主任",
      "入社年": 2015,
      "スキル": ["JavaScript", "Python", "データ分析"]
    },
    {
      "id": 1003,
      "名前": "田中太郎",
      "部署": "マーケティング部",
      "役職": "担当",
      "入社年": 2019,
      "スキル": ["SNS運用", "コンテンツ制作", "SEO"]
    },
    {
      "id": 1004,
      "名前": "山本美咲",
      "部署": "開発部",
      "役職": "エンジニア",
      "入社年": 2020,
      "スキル": ["HTML/CSS", "React", "Node.js"]
    }
  ],
  "会社情報": {
    "名称": "サンプル株式会社",
    "設立": 2005,
    "所在地": "東京都渋谷区",
    "従業員数": 120
  }
}`}</code>
        </pre>

        <h3>2. HTML</h3>
        <pre className="code-block">
          <code>{`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>外部JSONファイルの読み込み</title>
</head>
<body>
  <h1>社員情報</h1>
  
  <div id="company-info" class="company-info">
    <!-- 会社情報がここに表示されます -->
  </div>
  
  <h2>社員一覧</h2>
  <div id="employee-list" class="employee-list">
    <!-- 社員情報がここに表示されます -->
  </div>

  <script src="script.js"></script>
</body>
</html>`}</code>
        </pre>

        <h3>3. JavaScript (script.js)</h3>
        <pre className="code-block">
          <code>{`// JSONファイルを読み込む
fetch('data.json')
  .then(response => {
    // レスポンスが正常かチェック
    if (!response.ok) {
      throw new Error('ネットワークレスポンスが正常ではありません');
    }
    // JSONとしてパース
    return response.json();
  })
  .then(data => {
    // データを使って表示を更新
    displayCompanyInfo(data.会社情報);
    displayEmployees(data.社員);
  })
  .catch(error => {
    // エラーハンドリング
    console.error('データの取得に問題がありました:', error);
    document.body.innerHTML += \`
      <div class="error">
        <p>データの読み込みに失敗しました: \${error.message}</p>
        <p>サーバーが起動しているか確認してください。</p>
      </div>
    \`;
  });

// 会社情報を表示する関数
function displayCompanyInfo(companyInfo) {
  const companyInfoElement = document.getElementById('company-info');
  companyInfoElement.innerHTML = \`
    <h2>\${companyInfo.名称}</h2>
    <p><strong>設立:</strong> \${companyInfo.設立}年</p>
    <p><strong>所在地:</strong> \${companyInfo.所在地}</p>
    <p><strong>従業員数:</strong> \${companyInfo.従業員数}名</p>
  \`;
}

// 社員情報を表示する関数
function displayEmployees(employees) {
  const employeeListElement = document.getElementById('employee-list');
  
  // 各社員のカードを作成
  employees.forEach(employee => {
    const employeeCard = document.createElement('div');
    employeeCard.className = 'employee-card';
    
    // スキルタグを生成
    const skillsHTML = employee.スキル.map(skill => 
      \`<span class="skill-tag">\${skill}</span>\`
    ).join('');
    
    // 勤続年数を計算
    const currentYear = new Date().getFullYear();
    const yearsOfService = currentYear - employee.入社年;
    
    // カードの内容を設定
    employeeCard.innerHTML = \`
      <h3>\${employee.名前}</h3>
      <p><strong>ID:</strong> \${employee.id}</p>
      <p><strong>部署:</strong> \${employee.部署}</p>
      <p><strong>役職:</strong> \${employee.役職}</p>
      <p><strong>入社年:</strong> \${employee.入社年}年 (勤続\${yearsOfService}年)</p>
      <div>
        <p><strong>スキル:</strong></p>
        <div>\${skillsHTML}</div>
      </div>
    \`;
    
    // リストに追加
    employeeListElement.appendChild(employeeCard);
  });
}`}</code>
        </pre>
      </div>

      <div className="exercise-section">
        <h2>解説</h2>
        <ol className="list-decimal list-inside space-y-4 ml-4">
          <li>
            <strong>JSONファイルの作成</strong>
            <p className="ml-6 mt-2">社員情報と会社情報を含むJSONファイルを作成しています。複数の社員データを配列として、会社情報をオブジェクトとして格納しています。</p>
          </li>
          <li>
            <strong>Fetch APIの使用</strong>
            <p className="ml-6 mt-2"><code className="bg-gray-100 px-1 rounded">fetch()</code>関数を使用して、JSONファイルを非同期で読み込んでいます。これにより、ページの読み込みをブロックせずにデータを取得できます。</p>
          </li>
          <li>
            <strong>Promiseチェーン</strong>
            <p className="ml-6 mt-2"><code className="bg-gray-100 px-1 rounded">then()</code>メソッドを使用して、レスポンスの処理とJSONデータの解析を行っています。<code className="bg-gray-100 px-1 rounded">catch()</code>メソッドでエラーハンドリングも実装しています。</p>
          </li>
          <li>
            <strong>データの表示</strong>
            <p className="ml-6 mt-2">取得したJSONデータを使用して、会社情報と社員情報をHTMLに表示する関数を実装しています。</p>
          </li>
          <li>
            <strong>動的なHTML生成</strong>
            <p className="ml-6 mt-2">社員データの配列を<code className="bg-gray-100 px-1 rounded">forEach()</code>でループし、各社員のカードを動的に生成しています。</p>
          </li>
          <li>
            <strong>データ加工</strong>
            <p className="ml-6 mt-2">入社年から現在の年を引いて勤続年数を計算するなど、表示前にデータを加工しています。</p>
          </li>
        </ol>
      </div>

      <div className="exercise-section">
        <h2>ポイント</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>JSONファイルを読み込むには、ローカルサーバーを使用する必要があります。ファイルプロトコル（file://）ではCORSポリシーによりfetchが失敗します。</li>
          <li>簡易的なローカルサーバーを起動するには、以下のコマンドが使えます：
            <pre className="bg-gray-100 p-2 rounded-md mt-2 mb-2 overflow-auto">
              <code>{/* Python 3の場合 */}
python -m http.server

{/* Node.jsの場合（npx serveをインストール済みの場合） */}
npx serve</code>
            </pre>
          </li>
          <li>エラーハンドリングは重要です。ネットワークエラーやJSONの解析エラーに対応することで、ユーザーエクスペリエンスが向上します。</li>
          <li>実際のアプリケーションでは、データの取得中にローディングインジケーターを表示するとよいでしょう。</li>
          <li>大量のデータを扱う場合は、ページネーションや検索機能を実装することを検討してください。</li>
        </ul>
      </div>

      <div className="mt-8">
        <Link href="/" className="back-link">← トップページに戻る</Link>
      </div>
    </div>
  );
}
