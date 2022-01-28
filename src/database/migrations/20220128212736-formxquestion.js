module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('TB_FORMXQUESTION', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            quiz_id: {
                type: Sequelize.INTEGER,
                references: { model: 'TB_QUIZ', key: 'id' },
                allowNull: false,
            },
            question_id: {
                type: Sequelize.INTEGER,
                references: { model: 'TB_QUESTIONS', key: 'id' },
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    async down(queryInterface) {
        await queryInterface.dropTable('TB_FORMXQUESTION');
    },
};
