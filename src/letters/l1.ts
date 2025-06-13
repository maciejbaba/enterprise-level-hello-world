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
  res.json({ letter: 'l' });
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`L1 letter service running on port ${PORT}`);
}); 