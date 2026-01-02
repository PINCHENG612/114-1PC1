// utils/templateRenderer.js
import fs from 'fs';
import ejs from 'ejs';

/**
 * 渲染 EJS 模板並回傳給客戶端
 * @param {Object} res - HTTP 回應物件
 * @param {string} filePath - EJS 檔案路徑 (例如 /index.ejs)
 * @param {Object} data - 傳遞給模板的資料
 */
export const renderTemplate = (res, filePath, data = {}) => {
    // 組合相對路徑
    const fullPath = '.' + filePath;

    fs.readFile(fullPath, 'utf8', (err, template) => {
        if (err) {
            // 讀取錯誤，回傳 500
            res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('錯誤：無法讀取模板文件 - ' + err.message);
            return;
        }

        try {
            // 為了避免變數未定義錯誤，確保 data 有預設結構
            const renderData = { 
                title: 'Node.js 網站', 
                msg: '', 
                ...data 
            };
            
            const html = ejs.render(template, renderData);
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(html);
        } catch (renderErr) {
            res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('EJS 渲染錯誤：' + renderErr.message);
        }
    });
};

/**
 * 專門處理 404 錯誤頁面
 * @param {Object} res - HTTP 回應物件
 */
export const render404 = (res) => {
    // 呼叫 renderTemplate 來渲染 404 頁面，不需額外傳資料
    // 注意：這裡假設專案根目錄有 index3.ejs
    renderTemplate(res, '/index3.ejs', { title: '404 Not Found' });
};