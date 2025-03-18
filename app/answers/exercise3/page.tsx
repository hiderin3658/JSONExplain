export default function Exercise3Answer() {
  return (
    <div className="exercise-page">
      <h1 className="exercise-title">課題3: 公開APIからデータを取得</h1>
      <div className="mb-8">
        <a href="/" className="back-link">← トップページに戻る</a>
      </div>

      <div className="exercise-section">
        <h2>課題内容</h2>
        <p>公開されているAPIからJSONデータを取得し、表示してみましょう。<br />例：天気API、GitHub API など</p>
      </div>

      <div className="exercise-section">
        <h2>解答例</h2>
        
        <h3>GitHub APIを使用した例</h3>
        <p className="mb-4">GitHubの公開APIを使用して、特定のユーザーの情報とリポジトリを取得して表示します。</p>
        
        <h4>HTML</h4>
        <pre className="code-block">
          <code>{`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>GitHub API データ取得</title>
</head>
<body>
  <h1>GitHub ユーザー情報</h1>
  
  <div class="search-container">
    <input type="text" id="username-input" class="search-input" placeholder="GitHubユーザー名を入力" value="octocat">
    <button id="search-button" class="search-button">検索</button>
  </div>
  
  <div id="user-container">
    <!-- ユーザー情報がここに表示されます -->
  </div>
  
  <h2>リポジトリ一覧</h2>
  <div id="repos-container" class="repo-grid">
    <!-- リポジトリ情報がここに表示されます -->
  </div>

  <script src="github-api.js"></script>
</body>
</html>`}</code>
        </pre>

        <h4>JavaScript (github-api.js)</h4>
        <pre className="code-block">
          <code>{`// DOM要素の取得
const userContainer = document.getElementById('user-container');
const reposContainer = document.getElementById('repos-container');
const usernameInput = document.getElementById('username-input');
const searchButton = document.getElementById('search-button');

// 初期ロード時にデフォルトユーザーを表示
document.addEventListener('DOMContentLoaded', () => {
  const defaultUsername = usernameInput.value || 'octocat';
  fetchGitHubData(defaultUsername);
});

// 検索ボタンのイベントリスナー
searchButton.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  if (username) {
    fetchGitHubData(username);
  } else {
    showError('ユーザー名を入力してください');
  }
});

// Enterキーでも検索できるようにする
usernameInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchButton.click();
  }
});

// GitHubデータを取得する関数
function fetchGitHubData(username) {
  // 表示をクリアしてローディング表示
  userContainer.innerHTML = '<div class="loading">ユーザー情報を読み込み中...</div>';
  reposContainer.innerHTML = '<div class="loading">リポジトリ情報を読み込み中...</div>';
  
  // ユーザー情報の取得
  fetch(\`https://api.github.com/users/\${username}\`)
    .then(response => {
      if (!response.ok) {
        throw new Error(\`ステータスコード \${response.status}: \${response.statusText}\`);
      }
      return response.json();
    })
    .then(userData => {
      displayUserInfo(userData);
      
      // ユーザーのリポジトリ情報を取得
      return fetch(\`https://api.github.com/users/\${username}/repos?sort=updated&per_page=10\`);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(\`ステータスコード \${response.status}: \${response.statusText}\`);
      }
      return response.json();
    })
    .then(reposData => {
      displayRepos(reposData);
    })
    .catch(error => {
      showError(\`データの取得に失敗しました: \${error.message}\`);
    });
}

// ユーザー情報を表示する関数
function displayUserInfo(user) {
  userContainer.innerHTML = \`
    <header>
      <img src="\${user.avatar_url}" alt="\${user.login}のアバター" class="avatar">
      <div class="user-info">
        <h2>\${user.name || user.login}</h2>
        <p>\${user.bio || '自己紹介はありません'}</p>
        <div class="stats">
          <span class="stat-item">フォロワー: \${user.followers}</span>
          <span class="stat-item">フォロー中: \${user.following}</span>
          <span class="stat-item">公開リポジトリ: \${user.public_repos}</span>
        </div>
        <p>
          <a href="\${user.html_url}" target="_blank">GitHubプロフィールを見る</a>
          \${user.blog ? \` | <a href="\${user.blog}" target="_blank">ブログ/Webサイト</a>\` : ''}
        </p>
      </div>
    </header>
  \`;
}

// リポジトリ情報を表示する関数
function displayRepos(repos) {
  if (repos.length === 0) {
    reposContainer.innerHTML = '<p>公開リポジトリがありません</p>';
    return;
  }
  
  let reposHTML = '';
  
  repos.forEach(repo => {
    reposHTML += \`
      <div class="repo-card">
        <h3><a href="\${repo.html_url}" target="_blank">\${repo.name}</a></h3>
        <p>\${repo.description || '説明はありません'}</p>
        \${repo.language ? \`<span class="repo-lang">\${repo.language}</span>\` : ''}
        <div class="repo-stats">
          <span>⭐ \${repo.stargazers_count}</span>
          <span>🍴 \${repo.forks_count}</span>
          <span>👁️ \${repo.watchers_count}</span>
        </div>
      </div>
    \`;
  });
  
  reposContainer.innerHTML = reposHTML;
}

// エラーメッセージを表示する関数
function showError(message) {
  userContainer.innerHTML = \`<div class="error">\${message}</div>\`;
  reposContainer.innerHTML = '';
}`}</code>
        </pre>
      </div>

      <div className="exercise-section">
        <h2>解説</h2>
        <ol className="list-decimal list-inside space-y-4 ml-4">
          <li>
            <strong>GitHub APIの利用</strong>
            <p className="ml-6 mt-2">GitHub APIは認証なしでも一定回数まで利用できる公開APIです。ユーザー情報とリポジトリ情報を取得するエンドポイントを使用しています。</p>
          </li>
          <li>
            <strong>複数のAPIリクエスト</strong>
            <p className="ml-6 mt-2">最初にユーザー情報を取得し、その後でそのユーザーのリポジトリ情報を取得する2段階のリクエストを行っています。Promiseチェーンを使って順次処理しています。</p>
          </li>
          <li>
            <strong>ユーザー検索機能</strong>
            <p className="ml-6 mt-2">入力フォームとボタンを使って、任意のGitHubユーザー名で検索できる機能を実装しています。</p>
          </li>
          <li>
            <strong>エラーハンドリング</strong>
            <p className="ml-6 mt-2">APIリクエストが失敗した場合のエラーハンドリングを実装し、ユーザーにわかりやすいエラーメッセージを表示しています。</p>
          </li>
          <li>
            <strong>レスポンシブデザイン</strong>
            <p className="ml-6 mt-2">CSSクラスを使用して、リポジトリカードを画面サイズに応じて自動的にレイアウトするレスポンシブデザインを実装しています。</p>
          </li>
          <li>
            <strong>ローディング表示</strong>
            <p className="ml-6 mt-2">データ取得中にローディングメッセージを表示することで、ユーザーエクスペリエンスを向上させています。</p>
          </li>
        </ol>
      </div>

      <div className="exercise-section">
        <h2>ポイント</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>GitHub APIには<a href="https://docs.github.com/ja/rest/overview/rate-limits-for-the-rest-api" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">レート制限</a>があります。認証なしの場合、1時間あたり60リクエストまでです。</li>
          <li>実際のアプリケーションでは、APIキーや認証情報を使用することが多いですが、その場合はセキュリティに注意が必要です。クライアントサイドのJavaScriptにAPIキーを直接埋め込むのは避け、サーバーサイドでリクエストを行うか、環境変数を使用するなどの対策が必要です。</li>
          <li>他にも以下のような公開APIがあります：
            <ul className="list-disc list-inside ml-6 mt-2">
              <li><a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">OpenWeatherMap API</a> - 天気情報</li>
              <li><a href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The Movie Database API</a> - 映画情報</li>
              <li><a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PokéAPI</a> - ポケモン情報</li>
              <li><a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JSONPlaceholder</a> - テスト用ダミーデータ</li>
            </ul>
          </li>
          <li>CORSポリシーにより、一部のAPIは直接クライアントサイドからアクセスできない場合があります。その場合は、プロキシサーバーを使用するか、サーバーサイドでリクエストを行う必要があります。</li>
        </ul>
      </div>

      <div className="mt-8">
        <a href="/" className="back-link">← トップページに戻る</a>
      </div>
    </div>
  );
}
