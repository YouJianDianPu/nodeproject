//引入模块
const https = require('https');
const fs = require('fs');

let options = {
	key: fs.readFileSync('./key.pem'),
	cert: fs.readFileSync('./cert.pem')
};

https.createServer(options, (request, response) => {
	response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	// response.end('https服务器');

	if(request.url === './'){
		response.end('page1');
	}else if(request.url === './two'){
		response.end('page2');
	}else if(request.url === './three'){
		response.end('page3');
	}

}).listen(9000);

console.log(`服务器运行于https://127.0.0.1:9000`);