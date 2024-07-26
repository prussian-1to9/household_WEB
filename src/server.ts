// src/server.ts
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import routes from '@/routes';
import corsOptions from '@_config/cors';
import '@_config/dotenv'; // process.env.* variables are now available



/* ===== [expres config] ===== */
const app = express();

app.use(express.json());    // can return response as json
app.use('/', routes);       // global routing setting   : @/routes
app.use(cors(corsOptions)); // global CORS setting      : @_config/cors.ts



/* ===== [error handler] ===== */
// for 404 errors
app.use((req: Request, res: Response, _next: NextFunction) => {
    res.status(404).json({
        method: req.method,
        url: req.url,
        status: 404,
        message: 'Not Found'
    });
});
// default error handler
app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
    res.json({
        method: req.method,
        url: req.url,
        status: err.status || 500,
        message: err.message,
        error: req.app.get('env') === 'development' ? err : {}
    });
});


/* ===== [run server] ===== */
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
