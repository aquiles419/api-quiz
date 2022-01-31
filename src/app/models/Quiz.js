import Sequelize, { Model } from 'sequelize';

class Quiz extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                name: Sequelize.STRING,
            },
            {
                sequelize,
                tableName: 'quiz',
                timestamps: true,
                underscored: true,
            }
        );
    }
}

export default Quiz;
