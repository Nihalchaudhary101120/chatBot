import { useState } from "react";

export function ChatInput({ chatMessages, setChatMessages, GEMINI_API_URL }) {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    
    const userMessage = {
      message: inputText,
      sender: "user",
      id: crypto.randomUUID(),
    };
    setChatMessages([...chatMessages, userMessage]);
    
    const messageToSend = inputText; 
    setInputText("");
    setLoading(true);

    try {
      const url = `${GEMINI_API_URL}?message=${encodeURIComponent(messageToSend)}`;
      
      console.log("🚀 Sending to:", url);

      const response = await fetch(url, {
        method: "GET",
      });

      console.log("📥 Response status:", response.status);

      const data = await response.json();
      console.log("📦 Response data:", data);

      const botMessage = {
        message: data.reply || "⚠️ No reply from Gemini.",
        sender: "robot",
        id: crypto.randomUUID(),
      };

      setChatMessages((prev) => [...prev, botMessage]);
      
    } catch (error) {
      console.error("❌ Error:", error);
      setChatMessages((prev) => [
        ...prev,
        {
          message: "⚠️ Connection error: " + error.message,
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder="Send the message..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && !loading && sendMessage()}
        disabled={loading}
      />
      <button
        className="send-button"
        onClick={sendMessage}
        disabled={loading || !inputText.trim()}
      >
        {loading ? "⏳" : "Send"}
      </button>
    </div>
  );
}