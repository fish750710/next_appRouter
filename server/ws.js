const WebSocket = require("ws");
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

const wss = new WebSocket.Server({ server });

let messages = [];

wss.on("connection", (ws) => {
  // console.log("connection");
  // 发送所有历史消息
  messages.forEach((message) => {
    ws.send(message);
  });
  // 处理来自客户端的消息
  ws.on("message", (message) => {
    // console.log("Received:", message);
    messages.push(message);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
    // 发送回客户端
    // ws.send(`${message}`);
  });

  // 处理连接关闭
  ws.on("close", () => {
    console.log("Client disconnected");
  });

  // 处理连接错误
  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });
});

// 启动 HTTP 服务器
const port = 8080;
server.listen(port, () => {
  console.log(`WebSocket server is running on ws://localhost:${port}`);
});
