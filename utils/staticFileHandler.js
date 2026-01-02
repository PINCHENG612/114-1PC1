// utils/staticFileHandler.js
import fs from 'fs';
import path from 'path';
import { getContentType } from './mimeTypes.js';     // 引入模組 1
import { render404 } from './templateRenderer.js';   // 引入模組 2

/**
 * 處理靜態文件請求
 * @param {Object} res - HTTP 回應物件
 * @param {string} filePath - 請求的文件路徑
 */
export const handleStaticFile = (res, filePath) => {
    const fullPath = '.' + filePath;
    const extname = path.extname(fullPath);

    // 讀取檔案 (不指定編碼，因為可能是圖片等二進制檔)
    fs.readFile(fullPath, (err, content) => {
        if (err) {
            // 如果讀取失敗 (例如檔案不存在)，轉交給 render404 處理
            render404(res);
        } else {
            // 讀取成功，取得正確的 MIME Type
            const contentType = getContentType(extname);
            
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
};