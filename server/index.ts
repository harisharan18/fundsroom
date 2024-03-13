// src/app.ts
import express, { Request, Response } from 'express';
import cors from 'cors'; // Import CORS middleware

const app = express();
const port = 3001;

// Use CORS middleware
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello TypeScript Express!');
});

app.get('/api/temperature', (req, res) => {
    const temperature = Math.floor(Math.random() * 51); // Generate random temperature between 0 and 50
    res.json({ temperature });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
