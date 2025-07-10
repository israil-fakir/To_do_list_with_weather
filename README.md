<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>To-Do List with Weather - README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 2rem auto;
      padding: 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    code {
      background-color: #eee;
      padding: 2px 4px;
      border-radius: 4px;
    }
    pre {
      background-color: #eee;
      padding: 1rem;
      overflow-x: auto;
    }
  </style>
</head>
<body>

  <h1>To-Do List with Weather</h1>
  <p>A simple React-based to-do list application that also displays real-time weather information for your city.</p>

  <h2>Features</h2>
  <ul>
    <li>Add, delete, rename and check/uncheck tasks</li>
    <li>Displays current date</li>
    <li>Shows weather data (temperature, description, humidity)</li>
    <li>Responsive and minimalist design using Tailwind CSS</li>
  </ul>

  <h2>Technologies Used</h2>
  <ul>
    <li>React + Vite</li>
    <li>Tailwind CSS</li>
    <li>OpenWeatherMap API</li>
  </ul>

  <h2>Setup Instructions</h2>
  <pre><code>git clone https://github.com/israil-fakir/To_do_list_with_weather.git
cd To_do_list_with_weather
npm install
npm run dev</code></pre>

  <!-- <h2>Weather API Setup</h2>
  <ol>
    <li>Sign up at <a href="https://openweathermap.org/api" target="_blank">OpenWeatherMap</a></li>
    <li>Get your API key</li>
    <li>Replace <code>YOUR_API_KEY</code> in <code>WeatherWidget.jsx</code> with your actual key</li>
  </ol> -->
 
  <h2>Preview</h2>
  <p>Displays the current date, weather for Dhaka, and a task input field with a list of tasks.</p>
  <br>
  <img src="src\assets\output\out_to_do.png"/>

</body>
</html>
