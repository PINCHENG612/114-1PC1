// 1. 定義一個「物件 (Object)」，就像是字典
// 左邊是副檔名，右邊是瀏覽器看得懂的類型名稱 (MIME Type)
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

// 2. 定義一個功能函數：輸入副檔名，回傳類型
const getContentType = (extname) => {
    // 嘗試在字典裡找，如果找不到 (undefined)，就給預設值 'text/plain' (純文字)
    return contentTypes[extname] || 'text/plain';
};

// 3. 把這個函數打包匯出，讓別人可以使用
module.exports = { getContentType };