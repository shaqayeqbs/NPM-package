import React, { useState, FC } from "react";

interface ChatbotProps {
  greeting: string;
  position: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}

export const Chatbot: FC<ChatbotProps> = ({ greeting, position }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        position: "fixed",
        cursor: "pointer",
        ...(getPositionStyles(position) || {}),
      }}
      onClick={toggleChatbot}
    >
      {isOpen && (
        <div
          style={{
            background: "#faa7dd",
            width: "auto",
            minWidth: "250px",
            maxWidth: "600px",
            height: "500px",
            padding: "4px",
            borderRadius: "8px",

          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "8px",

              padding: "4px",

            }}
          >
            <div style={{ width: "90%", margin: "0 auto", color: "black", borderRadius: "8px", borderBottomLeftRadius: "0" }}>
              {greeting}
            </div>
          </div>
        </div>
      )}
      {!isOpen && (
        <div style={{ background: "#2396d9", padding: "12px", borderRadius: "50%" }} role="img" aria-label="Chatbot Icon">
          🤖
        </div>
      )}
    </div>
  );
};

const getPositionStyles = (position: string) => {
  switch (position) {
    case "bottom-left":
      return { bottom: "3px", left: "3px" };
    case "bottom-right":
      return { bottom: "3px", right: "3px" };
    case "top-left":
      return { top: "3px", left: "3px" };
    case "top-right":
      return { top: "3px", right: "3px" };
    default:
      return {}; // Default position or any additional custom handling
  }
};

export default Chatbot;
