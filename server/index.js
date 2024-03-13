"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts  no src
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); // Import CORS middleware
const app = (0, express_1.default)();
const port = 3001;
// Use CORS middleware
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Hello TypeScript Express!');
});
app.get('/api/temperature', (req, res) => {
    const temperature = Math.floor(Math.random() * 51); // Generate random temperature between 0 and 50
    res.json({ temperature });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
