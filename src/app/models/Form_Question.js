import Sequelize, { Model } from 'sequelize';

class Form_Question extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                id_quiz: {
                    type: Sequelize.INTEGER,
                    references: { model: 'quiz', key: 'id' },
                },
                id_question: {
                    type: Sequelize.INTEGER,
                    references: { model: 'questions', key: 'id' },
                },
            },
            {
                sequelize,
                tableName: 'form_question',
                timestamps: false,
                underscored: false,
            }
        );
    }
}

export default Form_Question;
