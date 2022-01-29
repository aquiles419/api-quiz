module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('questions', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            descricao: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            tipo: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            dimensao: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            eixo: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('questions');
    },
};
