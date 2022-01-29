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
                quiz_id: {
                    type: Sequelize.INTEGER,
                    references: { model: 'quiz', key: 'id' },
                },
                question_id: {
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
