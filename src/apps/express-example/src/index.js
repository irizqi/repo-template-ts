import express from 'express';

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Notification Services API example is running',
    app: 'express-example',
    status: 'ok',
  });
});

app.get('/health', (req, res) => {
  res.json({
    ok: true,
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.post('/notifications', (req, res) => {
  const { title, message, channel } = req.body ?? {};

  if (!title || !message) {
    return res.status(400).json({
      ok: false,
      error: 'title and message are required',
    });
  }

  return res.status(201).json({
    ok: true,
    notification: {
      title,
      message,
      channel: channel ?? 'email',
      createdAt: new Date().toISOString(),
    },
  });
});

app.listen(port, () => {
  console.log(`Express example app listening on http://localhost:${port}`);
});
