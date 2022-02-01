module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('company', {
          id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
          },
          nome_fantasia: {
              type: Sequelize.INTEGER,
              allowNull: false,
          },
          razao_social: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          cnpj: {
              type: Sequelize.STRING,
              allowNull: false,
              unique: true,
          },
          cnae: {
              type: Sequelize.INTEGER,
              allowNull: false,
          },
          porte_empresa: {
            type: Sequelize.STRING,
            allowNull: false,
        },
          uf: {
            type: Sequelize.STRING,
            allowNull: false,
        },
          cidade: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email_responsavel: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tipo: {
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

  down: async (queryInterface) => {
      await queryInterface.dropTable('company');
  },
};
