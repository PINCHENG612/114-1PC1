const http = require('http');

// 引入我們的工具箱 (路徑要有 ./utils/)
const templateRenderer = require('./utils/templateRenderer');
const staticFileHandler = require('./utils/staticFileHandler');

// 建立伺服器
const server = http.createServer((req, res) => {
    // req.url 是使用者輸入的網址路徑
    console.log('收到請求路徑:', req.url);

    // 使用 switch 來決定路徑怎麼走
    switch (req.url) {
        // --- 狀況 1: 首頁 ---
        case '/':
            templateRenderer.renderTemplate(res, '/index.ejs', {
                title: '我的首頁'
            });
            break;

        // --- 狀況 2: 計算機頁面 ---
        case '/calculator':
            templateRenderer.renderTemplate(res, '/index2.ejs', {
                title: '超級計算機'
            });
            break;

        // --- 狀況 3: 其他所有路徑 ---
        // 如果不是上面定義的頁面，我們就假設它是要拿檔案 (CSS/圖片)
        // 或者如果檔案真的不存在，handleStaticFile 裡面會幫我們轉去 404
        default:
            staticFileHandler.handleStaticFile(res, req.url);
            break;
    }
});

// 啟動伺服器
server.listen(3000, () => {
    console.log('---------------------------------------');
    console.log('伺服器啟動成功！');
    console.log('請打開瀏覽器：http://localhost:3000');
    console.log('---------------------------------------');
});