// 引入需要的內建工具
const fs = require('fs');  // 讀檔案用的
const ejs = require('ejs'); // 轉換 EJS 用的

// 定義功能 1: 渲染 (Render) 模板
// 參數說明：
// res: 用來回應給瀏覽器的物件
// filePath: 檔案路徑 (例如 '/index.ejs')
// data: 要傳給 EJS 的變數資料 (預設是空物件 {})
const renderTemplate = (res, filePath, data = {}) => {
    // 組合完整路徑，例如 '.' + '/index.ejs' 變成 './index.ejs'
    const fullPath = '.' + filePath;

    // 開始讀取檔案
    fs.readFile(fullPath, 'utf8', (err, template) => {
        // --- 狀況 A: 讀取檔案發生錯誤 (例如檔案不存在) ---
        if (err) {
            console.log('讀取錯誤:', err.message); // 在終端機顯示錯誤
            res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('<h1>伺服器錯誤</h1><p>無法讀取檔案</p>');
            return; // 結束函式，不要往下執行
        }

        // --- 狀況 B: 讀取成功，開始轉換 EJS ---
        try {
            // 準備要傳給畫面的資料，預設給它一個 title 以防萬一
            const safeData = { 
                title: '網站', 
                msg: '', 
                ...data  // 把外部傳進來的 data 蓋過去
            };

            // 使用 EJS 引擎將模板轉成 HTML 字串
            const html = ejs.render(template, safeData);

            // 告訴瀏覽器：這是 HTML，請求成功 (200)
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(html);

        } catch (renderErr) {
            // 如果 EJS 語法寫錯，會在這裡被抓到
            console.log('EJS 轉換錯誤:', renderErr.message);
            res.writeHead(500);
            res.end('EJS 轉換失敗');
        }
    });
};

// 定義功能 2: 顯示 404 頁面
// 這是一個捷徑，直接呼叫上面的 renderTemplate 去讀取 index3.ejs
const render404 = (res) => {
    renderTemplate(res, '/index3.ejs', { title: '404 找不到' });
};

// 匯出這兩個功能給別人用
module.exports = { renderTemplate, render404 };