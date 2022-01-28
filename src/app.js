import express from 'express';
import cors from 'cors';
import { configRoutes } from './routes';

import './database';

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors());
        this.server.use(express.json());
    }

    routes() {
        configRoutes(this.server);
    }
}

export default new App().server;
