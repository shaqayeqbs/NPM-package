// Chatbot.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Chatbot } from "chatbot-chalenge1";

describe("Chatbot Component", () => {
  test("renders Chatbot with default props", () => {
    render(<Chatbot greeting="Hello!" position="bottom-right" />);

    // Check if the Chatbot is rendered
    expect(screen.getByText("🤖")).toBeInTheDocument();
  });

  test("renders Chatbot with default props and shows greeting on click", () => {
    render(<Chatbot greeting="How can I help you?" position="bottom-right" />);

    // Initially, the chatbot icon should be visible
    const chatbotIcon = screen.getByText("🤖");
    expect(chatbotIcon).toBeInTheDocument();

    // Click on the chatbot icon to toggle the chatbot
    fireEvent.click(chatbotIcon);

    // After clicking, the greeting should be visible
    const greetingElement = screen.getByText("How can I help you?");
    expect(greetingElement).toBeInTheDocument();
  });
});
