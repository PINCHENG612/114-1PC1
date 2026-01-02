// utils/mimeTypes.js

// 定義 MIME 類型映射表
const contentTypes = {
    '.html': 'text/html; charset=utf-8',
    '.ejs': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

/**
 * 根據副檔名回傳對應的 Content-Type
 * @param {string} extname - 檔案副檔名 (例如 .css)
 * @returns {string} 對應的 MIME Type，預設為 text/plain
 */
export const getContentType = (extname) => {
    return contentTypes[extname] || 'text/plain';
};