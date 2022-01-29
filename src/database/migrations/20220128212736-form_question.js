module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('form_question', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            id_quiz: {
                type: Sequelize.INTEGER,
                references: { model: 'quiz', key: 'id' },
                allowNull: false,
            },
            id_question: {
                type: Sequelize.INTEGER,
                references: { model: 'questions', key: 'id' },
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
        await queryInterface.dropTable('form_question');
    },
};
