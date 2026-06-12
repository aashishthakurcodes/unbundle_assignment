# Unbundl Frontend Developer Assessment

## Overview

This project is a submission for the **Unbundl Frontend Developer Assessment**. The objective was to recreate selected sections from the provided Figma design using React, populate the UI with dynamic content, and implement interactions while ensuring responsiveness and clean code structure.

## Tech Stack

- React.js
- Vite
- JavaScript (ES6+)
- CSS Modules / Plain CSS
- Local JSON Data

---

## Features

### Figma Design Recreation

- Recreated 3 sections from the provided Figma design.
- Matched layout, spacing, typography, colors, and overall visual appearance as closely as possible.
- Built using reusable React functional components.

### Dynamic Data Integration

- Data is loaded from a local JSON file and rendered dynamically within the UI.
- A local JSON source was chosen because the content and structure shown in the Figma design did not map effectively to the suggested public APIs.
- The application still follows a data-driven approach using React state management and lifecycle hooks.

### Responsive Design

- Desktop and mobile layouts implemented according to the Figma design.
- Responsive behavior achieved using CSS media queries.
- Layout adapts smoothly across different screen sizes.

### Interaction

Implemented interactive states based on the design requirements, including:

- Hover effects on cards and buttons
- Smooth transitions for better user experience

---

## Project Structure

```txt
src/
│
├── components/
│   ├── HeroSection/
│   ├── ServicesSection/
│   ├── ChooseUs/
│   ├── SmileSection/
│   ├── whistle/
│   ├── whyWhistle/
│
├── data/
│   └── data.json
│
├── assets/
│
├── App.jsx
├── main.jsx
│
└── styles/
```

---

## Data Source

The provided Figma design did not map naturally to the suggested public APIs. To maintain design accuracy and represent the content shown in the Figma, I created a local JSON file containing mock data and imported it into the React application.

Data file location:

```txt
src/data/data.json
```

The data structure was designed to closely match the content requirements of the implemented sections.

---

## Data Handling

Although the data is sourced locally, it is loaded through React state management to simulate a real-world data-driven application.

Implemented:

- `useState` for state management
- `useEffect` for data initialization
- Loading state handling
- Error state handling

---

## Loading State

A loading indicator is displayed while the application initializes and loads the data.

Example:

```txt
Loading content...
```

---

## Error Handling

A user-friendly error message is displayed if data cannot be loaded successfully.

Example:

```txt
Unable to load content. Please try again.
```

This prevents blank screens and improves the overall user experience.

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/unbundl-assessment.git
```

### 2. Navigate to the Project Folder

```bash
cd unbundl-assessment
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available at:

```txt
http://localhost:5173
```

---

## How to Run

```bash
npm install
npm run dev
```

---

## Approach

I started by analyzing the provided Figma design and breaking it into reusable React components. Since the design content did not align well with the suggested public APIs, I created a structured local JSON file to accurately represent the required content. The data is loaded using React hooks (`useState` and `useEffect`) to simulate a dynamic data flow similar to a real API integration. Special attention was given to responsiveness, reusable component structure, and maintaining visual consistency with the original design.

---

## Future Improvements

Given more time, I would:

- Add skeleton loaders for a more polished loading experience.
- Improve accessibility with ARIA attributes and keyboard navigation support.
- Add unit and component tests using React Testing Library.
- Further optimize responsiveness across a wider range of devices.
- Implement additional animations and micro-interactions.
- Integrate a CMS or API backend to make content fully manageable.

---

## Challenges Faced

One of the main challenges was ensuring that the implementation closely matched the Figma design across different screen sizes while maintaining clean and reusable code. Another challenge was structuring the local JSON data in a way that accurately reflected the content shown in the design. Careful attention was required to balance responsiveness, component reusability, and visual accuracy.

---

## Author

**Name:** Aashish Singh

**Submission Date:** 12/06/2026
