import Sequelize, { Model } from 'sequelize';

class Questions extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                descricao: Sequelize.STRING,
                tipo: Sequelize.BOOLEAN,
                dimensao: Sequelize.STRING,
                eixo: Sequelize.STRING,
            },
            {
                sequelize,
                tableName: 'questions',
                timestamps: true,
                underscored: true,
            }
        );
    }
}

export default Questions;
