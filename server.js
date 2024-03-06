const app = require('./src/app');

const PORT = 3003;

const server = app.listen(PORT, () => console.log(`WSV DragonShop start with ${PORT}`));

/**
 * Trong Node.js, "process" là một đối tượng toàn cục mà Node.js cung cấp để tương tác với 
 * quá trình thực thi của ứng dụng. Đối tượng này cung cấp thông tin và chức năng để quản lý quá trình thực thi, 
 * như thông tin về môi trường, đối số dòng lệnh, quản lý sự kiện, và quản lý luồng (thread) của ứng dụng
 */

/**
 * SIGINT:  Điều này thường được sử dụng để dọn dẹp hoặc thực hiện các hành động kết thúc 
 * trước khi tiến trình được kết thúc.
 */

process.on('SIGINT', () => {
    server.close(() => console.log(`Exit server express`));
    // notify.send(Ping...)
});

