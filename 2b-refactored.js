// 2b-refactored.js
import http from 'http';
import { renderTemplate } from './utils/templateRenderer.js';
import { handleStaticFile } from './utils/staticFileHandler.js';

// 建立伺服器
const server = http.createServer((req, res) => {
    // 路由邏輯：使用 switch 分派
    switch (req.url) {
        case '/':
            // 首頁路由：渲染 index.ejs 並傳遞資料
            renderTemplate(res, '/index.ejs', { 
                title: '首頁', 
                msg: '您好 User' 
            });
            break;

        case '/calculator':
            // 計算機路由：渲染 index2.ejs
            renderTemplate(res, '/index2.ejs', { 
                title: '簡易計算機' 
            });
            break;

        default:
            // 其他路徑：全部嘗試作為靜態資源處理 (CSS, JS, 404)
            handleStaticFile(res, req.url);
            break;
    }
});

// 啟動監聽
server.listen(3000, () => {
    console.log('伺服器已啟動！請訪問 http://localhost:3000');
    console.log('可用路由：');
    console.log('  - http://localhost:3000');
    console.log('  - http://localhost:3000/calculator');
    console.log('  - 其他路徑將顯示 404 錯誤頁面');
});