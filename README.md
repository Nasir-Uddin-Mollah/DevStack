
# DevStack

DevStack is a responsive technology stack builder for developers. Browse useful frontend, backend, database, language, styling, DevOps, and tooling options, then select technologies to build your ideal project stack.

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Toastify
- Font Awesome
- JSON data

## Features

- Responsive interface with a fixed navbar, hero section, technology cards, stack cart, and footer.
- Add technologies to your personal stack with selected-card and disabled-button states.
- Remove individual technologies or clear the complete stack with toast notifications.

## Getting Started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## React Questions

### 1. What is JSX, and why is it used in React?

`JSX(JavaScript XML)` is a syntax extension for JavaScript. It is used in React to describe UI elements in a way that looks similar to HTML but runs inside JavaScript code.

### 2. What is the difference between props and state?

`Props` are data passed from a parent component to a child component. `State` is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is a fundamental feature in React that allows to add state variables to functional components. This hook is essential for managing local state within a component, enabling dynamic and interactive user interfaces.

In this project i used useState in `App` component to store a promise. Also in `Technologies` to store the technologies added to the stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs side effects after a component renders, such as fetching data. I did not use it in this project because React 19's `use()` reads the JSON promise inside `TechnologyGrid`.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each list item. This allows React to update only the items that changed and render the list correctly.

### 6. What is conditional rendering? Show one place you used it, such as the empty stack message.

Conditional rendering means showing different UI based on a condition. In `TechnologiesCart`, the empty message is shown when `technologiesCart.length === 0`.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. A child can send information back by calling a function passed to it as a prop. In this project, `Technologies` passes the cart state and setter function to the technology cards.
