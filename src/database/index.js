import path from 'path';
import fs from 'fs';
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

class Database {
    constructor() {
        this.init();
    }

    async init() {
        this.connection = new Sequelize(databaseConfig);

        const baseDir = path.resolve(`${__dirname}/../app/models`);
        const initModels = () => {
            fs.readdirSync(baseDir).map(async file => {
                const model = await import(`${baseDir}/${file}`);
                model.default.init(this.connection);
            });
        };
        const associate = () => {
            fs.readdirSync(baseDir).map(async file => {
                const model = await import(`${baseDir}/${file}`);
                if (model.default.associate) {
                    model.default.associate(this.connection.models);
                }
            });
        };

        initModels();
        associate();
    }

    getConnection() {
        return this.connection;
    }
}

export default new Database();
