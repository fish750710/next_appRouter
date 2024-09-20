"use client";
import { useEffect, useState, useRef } from "react";

const blobToText = (blob: Blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsText(blob);
  });
};

export default function Mine() {
  const socket = useRef<WebSocket | null>(null);
  const [val, setVal] = useState("");
  const [textMessages, setTextMessages] = useState<string[]>([]); // 已處理好了的文字訊息

  useEffect(() => {
    // 创建 WebSocket 连接
    const ws = new WebSocket("ws://localhost:8787");
    socket.current = ws;

    // 监听 WebSocket 消息
    ws.onmessage = (event) => {
      // 返回 Blob
      handleMessage(event.data);
    };

    // 处理连接打开
    ws.onopen = () => {
      console.log("WebSocket connection opened");
    };

    // 处理连接关闭
    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    // 处理错误
    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // 清理 WebSocket 连接
    return () => {
      ws.close();
    };
  }, []);

  const handleMessage = async (messages: Blob | string) => {
    if (messages instanceof Blob) {
      const text = await blobToText(messages);
      setTextMessages((prevMessages) => [...prevMessages, text] as string[]);
    } else {
      setTextMessages(
        (prevMessages) => [...prevMessages, messages] as string[]
      );
    }
  };
  // console.log(messages, "messages", handleMessage(messages), textMessages);

  const sendMessage = () => {
    if (socket.current && socket.current.readyState === WebSocket.OPEN) {
      socket.current.send(val);
    } else {
      console.warn("WebSocket is not open");
    }
    setVal("");
  };

  return (
    <div>
      客服
      {textMessages.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        style={{ color: "blue" }}
      />
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          borderRadius: "20px",
          cursor: "pointer",
        }}
        onClick={sendMessage}
      >
        送出
      </button>
    </div>
  );
}
