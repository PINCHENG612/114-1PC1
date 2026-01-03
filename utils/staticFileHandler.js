const fs = require('fs');
const path = require('path');

// 這裡要引入剛剛寫好的另外兩個模組
const mimeTypes = require('./mimeTypes'); 
const templateRenderer = require('./templateRenderer');

// 定義功能: 處理靜態檔案
const handleStaticFile = (res, filePath) => {
    const fullPath = '.' + filePath;
    
    // 取得副檔名，例如 '.css' 或 '.jpg'
    const extname = path.extname(fullPath);

    // 讀取檔案 (這裡不寫 'utf8'，因為圖片不是文字)
    fs.readFile(fullPath, (err, content) => {
        if (err) {
            // 如果找不到檔案，就顯示 404 頁面
            // 我們直接借用 templateRenderer 的功能
            templateRenderer.render404(res);
        } else {
            // 檔案讀到了！
            
            // 1. 去問 mimeTypes 模組：這是什麼類型的檔案？
            const contentType = mimeTypes.getContentType(extname);

            // 2. 設定檔頭並傳送檔案
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
};

// 匯出功能
module.exports = { handleStaticFile };