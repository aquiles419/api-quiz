module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('answers', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            formxquestion_id: {
                type: Sequelize.INTEGER,
                references: { model: 'form_question', key: 'id' },
                allowNull: false,
            },
            valor: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            data: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: { model: 'users', key: 'id' },
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
        await queryInterface.dropTable('answers');
    },
};
