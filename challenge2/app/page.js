"use client";
import { Chatbot } from "chatbot-chalenge1";
export default function Home() {
  return (
    <div className="b">
      <h1>Chatbot Demo</h1>

      {/* Scenario 1: Default Chatbot */}
      <div>
        <h2>Scenario 1: Default bottom-right</h2>
        <Chatbot greeting="How can I help you?" position="bottom-right" />
      </div>

      <div role="s2">
        <h2>Scenario 2: default</h2>
        <Chatbot greeting="Welcome to our website!" />
      </div>
      <div>
        <h2>Scenario 3: Custom Greeting and Top-Left Position</h2>
        <Chatbot greeting="Nice to see you!" position="top-left" />
      </div>
    </div>
  );
}
