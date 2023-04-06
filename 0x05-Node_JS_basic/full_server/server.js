import express from 'express';
import registerRoutes from './routes/index';

const app = express();

const port = 1245;

registerRoutes(app);
app.listen(port);

export default app;
