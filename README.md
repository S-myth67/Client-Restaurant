# Brindavan Restaurant

A modern, elegant restaurant website inspired by Indian culinary heritage, combining premium visual design, interactive menus, smooth animations, and a responsive user experience.

## Overview

Brindavan Restaurant is a frontend web project designed to showcase a restaurant's signature dishes, story, ambience, and reservation experience. The website focuses on visual storytelling, reusable React components, responsive layouts, and accessible interactive elements.

## Features

- **Premium landing page** — A visually rich hero section showcasing the restaurant's identity.
- **Signature dishes** — Highlighted dishes presented through dedicated showcase sections.
- **Dish details** — Interactive dish detail modal.
- **Restaurant story** — Sections introducing the restaurant's identity and culinary heritage.
- **Ambience showcase** — Visual presentation of the restaurant's atmosphere.
- **Reservation interface** — Interactive reservation form with a modal-based booking flow.
- **Responsive design** — Layouts designed to adapt to different screen sizes.
- **Scroll animations** — Reveal effects that enhance the browsing experience.
- **Accessible interactions** — Keyboard and modal interaction support, including Escape handling and focus management.
- **Reusable components** — UI organized into separate React components for easier maintenance.

> **Note:** Reservations are simulated on the frontend. A real booking backend, database, SMS service, or reservation management system is not included unless integrated separately.

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Component-based user interface |
| Vite | Development server and build tooling |
| JavaScript (ES Modules) | Application logic and data handling |
| CSS | Styling, responsive layouts, and animations |
| Lucide React | Icons |
| npm | Package management and scripts |

## Getting Started

### Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js

### Installation

1. Clone the repository:

   ```bash
   git clone <YOUR_GITHUB_REPOSITORY_URL>
   ```

2. Navigate to the project directory:

   ```bash
   cd brindavan-restaurant
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in your terminal by Vite.

## Available Scripts

The following scripts are expected in the project. Confirm them against `package.json` before publishing.

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint checks, if configured |

## Project Structure

The main application is organized around reusable components and separate data modules.

```text
brindavan-restaurant/
├── public/                  # Public assets
├── src/
│   ├── components/
│   │   ├── Navbar
│   │   ├── Hero
│   │   ├── HeroDishShowcase
│   │   ├── SignatureDishes
│   │   ├── EditorialHighlight
│   │   ├── StorySection
│   │   ├── AmbienceSection
│   │   ├── ReservationSection
│   │   ├── ReservationModal
│   │   ├── DishDetailModal
│   │   └── Footer
│   ├── data/
│   │   ├── heroDishesData.js
│   │   ├── menuData.js
│   │   └── reservationConfig.js
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

*Folder names and file locations may differ slightly depending on the final repository structure.*

## Design Goals

- Create an elegant, premium restaurant presentation.
- Use visual hierarchy and whitespace to improve readability.
- Keep components focused and reusable.
- Provide clear interactions for menu exploration and reservations.
- Support keyboard interaction and accessible modal behavior.
- Make the experience usable across desktop and mobile screens.

## Future Improvements

Potential enhancements for future versions include:

- Integrating a real reservation API and database.
- Adding email or SMS booking confirmations.
- Creating a restaurant menu management system.
- Adding automated component and end-to-end tests.
- Improving image optimization and loading performance.
- Adding search engine optimization and structured restaurant data.

These are planned enhancements, not claims of existing functionality.

## License

No license has been specified for this project. All rights and permissions remain subject to the repository owner's decision until a license is added.
