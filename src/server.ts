import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Core transformation function
const transform = (sentence: string) => {
  if (!sentence?.trim()) return { error: "Please enter a sentence" };

  const words = sentence.trim().split(/\s+/);
  return {
    word_count: words.length,
    unique_words: [...new Set(words.map(w => w.toLowerCase()))],
    reversed_sentence: [...words].reverse().join(' ')
  };
};

// Required POST endpoint
app.post('/api/transform', (req: Request, res: Response) => {
  res.json(transform(req.body.sentence));
});

// This magic line → /api/transform/anything-you-type
app.get('/api/transform/:sentence(*)', (req: Request, res: Response) => {
  const sentence = req.params.sentence;
  res.json(transform(decodeURIComponent(sentence)));
});

// UI
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running → http://localhost:${PORT}`);
});