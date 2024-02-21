# React Chatbot Demo

This demo application showcases the usage of the React Chatbot component.

## Purpose

The purpose of this application is to demonstrate the functionality and integration of the Chatbot component in a React project.

## How to Run

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the application: `npm start`.

## Integration with Chatbot Component

To integrate the Chatbot component, import it and use it in your React components:

```jsx
import React from "react";
import Chatbot from "react-chatbot";

const App = () => {
  return (
    <div>
      <h1>React Chatbot Demo</h1>
      <Chatbot
        greeting="Hello! How can I assist you?"
        position="bottom-right"
      />
    </div>
  );
};

export default App;
```
