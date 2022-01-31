import Sequelize, { Model } from 'sequelize';

class Answers extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                id_form_question: {
                    type: Sequelize.INTEGER,
                    references: { model: 'form_questions', key: 'id' },
                },
                id_user: {
                    type: Sequelize.INTEGER,
                    references: { model: 'users', key: 'id' },
                },
                valor: Sequelize.STRING,
            },
            {
                sequelize,
                tableName: 'answers',
                timestamps: true,
                underscored: true,
            }
        );
    }
}

export default Answers;
