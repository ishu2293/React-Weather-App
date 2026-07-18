# React Weather App

A responsive weather application built with **React** that provides real-time weather information for any city using the **OpenWeather API**.

<img width="1348" height="817" alt="Screenshot 2026-07-18 224839" src="https://github.com/user-attachments/assets/7f078331-a4c8-49ae-bb80-80f2414b0f64" />


## Features

- Search weather by city/country name
- View real-time weather information
- Display temperature, humidity, and feels-like temperature
- Show minimum and maximum temperatures
- Dynamic weather images based on weather conditions
- Dynamic weather icons
- Error handling for invalid city names
- Responsive user interface built with Material UI

## Tech Stack

- React
- Vite
- JavaScript (ES6+)
- Material UI
- CSS
- OpenWeather API

## Project Structure

```
mini-project-React/
│── public/
│── src/
│   ├── assets/
│   │   └── weather-app.png
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── InfoBox.css
│   ├── InfoBox.jsx
│   ├── main.jsx
│   ├── SearchBox.jsx
│   └── WeatherApp.jsx
│── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/ishu2293/React-Weather-App.git
```

Navigate to the project:

```bash
cd React-Weather-App
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
VITE_API_KEY=YOUR_OPENWEATHER_API_KEY
```

Start the development server:

```bash
npm run dev
```

## API

This project uses the **OpenWeather API** to fetch real-time weather data.

https://openweathermap.org/current

## Learning Outcomes

This project helped me practice:

- React Functional Components
- React Hooks (`useState`)
- State Management
- Props
- API Integration using Fetch
- Async/Await
- Conditional Rendering
- Error Handling
- Material UI Components

## Future Improvements

- 5-day weather forecast
- Wind speed and pressure
- Sunrise and sunset timings
- Dark mode
- Loading spinner
- Recent search history

## Author

**Ishwari Daphal**

- GitHub: https://github.com/ishu2293
- LinkedIn: https://www.linkedin.com/in/ishwari-daphal-46a95432a
