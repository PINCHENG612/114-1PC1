# 第1次練習題目-練習-PC1
>
>學號：112111113  (學號和姓名都要寫)
><br />
>姓名：林品承
>

本份文件包含以下主題：(至少需下面兩項，若是有多者可以自行新增)
- [x] 說明內容
---
1. 請將2b.js重構為模組化設計，建⽴2b-refactored.js ，使主檔案專注於路由邏輯，並將共同功能抽取成獨⽴的ES6模組

Ans: 
### 第⼀部分：建⽴MIME型模組
```js
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
```
contentTypes：定義副檔名與 MIME 類型的對應表。

getContentType(extname)：查表回傳對應的 MIME 類型，如果找不到就回傳預設的 application/octet-stream。

module.exports：讓其他檔案可以 require('./utils/mimeTypes') 使用這個函式。


1. b.

Ans:

<!-- 請撰寫時，最後一句話再寫一次 -->


1. c.

Ans:

<!--  請撰寫時，第一句話再寫一次  -->

2. a.

Ans:

<!--  請撰寫時，第一句話再寫一次  -->

2. b.

Ans:

<!--  請撰寫時，第一句話再寫一次  -->

2. c.

Ans:

<!--  請撰寫時，第一句話和最後一句再寫一次  -->

2. d.

Ans:


