import express from 'express';
import routes from './routes/emailRoutes';
import { errorHandler } from './middlewares/errorHandler';
import cors from 'cors';
const app = express();
import config from './config/config';

app.use(
    cors({
        origin: config.URL_HOST,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true,
    }),
);

app.use(express.json());

// Routes
app.use('/api', routes);

app.use(errorHandler);

export default app;
