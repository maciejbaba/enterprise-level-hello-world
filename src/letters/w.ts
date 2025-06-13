import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let requestCount = 0;

app.get('/health', (_: Request, res: Response) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

app.get('/metrics', (_: Request, res: Response) => {
  res.json({
    totalRequests: requestCount,
    timestamp: new Date().toISOString()
  });
});

app.get('/letter', (_: Request, res: Response) => {
  requestCount++;
  res.json({ letter: 'W' });
});

const PORT = 3006;
app.listen(PORT, () => {
  console.log(`W letter service running on port ${PORT}`);
}); 