import { useState, useEffect } from 'react';
import './App.css';
import img from './assets/company-logo.jpg'

interface FoodItem {
  orderId: string;
  name: string;
  temperature: number;
}

function App() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);

  useEffect(() => {
    // Fetch food items initially
    updateFoodItems();
    // Fetch food items every 5 seconds
    const interval = setInterval(() => {
      updateFoodItems();
    }, 5000);
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Function to generate random temperature between 0 and 50 degrees Celsius
  const generateRandomTemperature = () => {
    return Math.floor(Math.random() * 51); // Random integer between 0 and 50
  };

  // Function to generate random order ID
  const generateRandomOrderId = () => {
    return Math.random().toString(36).substring(2, 9); // Random alphanumeric string
  };

  // Function to generate random food items
  const generateRandomFoodItems = () => {
    const foodItems: FoodItem[] = [];
    const items = ['Pizza', 'Burger', 'Sushi', 'Taco', 'Pasta', 'Salad', 'Sandwich', 'Soup'];
    items.forEach(item => {
      const orderId = generateRandomOrderId();
      const temperature = generateRandomTemperature();
      foodItems.push({ orderId: orderId, name: item, temperature: temperature });
    });
    return foodItems;
  };

  // Function to fetch food items
  const updateFoodItems = () => {
    const newFoodItems = generateRandomFoodItems();
    setFoodItems(newFoodItems);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type="image" src={img} className='main-image' alt="" />
        <h1>Food Temperature App</h1>
      </header>
      <main>
        {foodItems.map((foodItem, index) => (
          <div key={index} className="card">
            <h2>{foodItem.name}</h2>
            <p className="temperature">{foodItem.temperature} °C</p>
            <p className="orderId">Order ID: {foodItem.orderId}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
