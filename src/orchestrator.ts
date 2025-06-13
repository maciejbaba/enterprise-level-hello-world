import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const LETTER_SERVICES = {
  h: process.env.H_SERVICE_URL || "http://h-service:3001",
  e: process.env.E_SERVICE_URL || "http://e-service:3002",
  l1: process.env.L1_SERVICE_URL || "http://l1-service:3003",
  l2: process.env.L2_SERVICE_URL || "http://l2-service:3004",
  o: process.env.O_SERVICE_URL || "http://o-service:3005",
  w: process.env.W_SERVICE_URL || "http://w-service:3006",
  r: process.env.R_SERVICE_URL || "http://r-service:3007",
  d: process.env.D_SERVICE_URL || "http://d-service:3008",
};

async function fetchLetter(service: string): Promise<string> {
  try {
    const response = await axios.get(
      `${LETTER_SERVICES[service as keyof typeof LETTER_SERVICES]}/letter`
    );
    return response.data.letter;
  } catch (error) {
    console.error(`Error fetching from ${service}:`, error);
    return "?";
  }
}

app.get("/", async (_: Request, res: Response) => {
  try {
    const letters = await Promise.all([
      fetchLetter("h"),
      fetchLetter("e"),
      fetchLetter("l1"),
      fetchLetter("l2"),
      fetchLetter("o"),
      " ",
      fetchLetter("w"),
      fetchLetter("o"),
      fetchLetter("r"),
      fetchLetter("l1"),
      fetchLetter("d"),
    ]);

    res.json({ message: letters.join("") });
  } catch (error) {
    res.status(500).json({ error: "Failed to assemble message" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Orchestrator service running on port ${PORT}`);
});
