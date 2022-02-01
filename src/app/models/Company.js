import Sequelize, { Model } from 'sequelize';

class Company extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                nome_fantasia: Sequelize.STRING,
                razao_social: Sequelize.STRING,
                cnpj: Sequelize.STRING,
                cnae: Sequelize.INTEGER,
                porte_empresa: Sequelize.STRING,
                uf: Sequelize.STRING,
                cidade: Sequelize.STRING,
                email_responsavel: Sequelize.STRING,
                tipo: Sequelize.STRING,

            },
            {
                sequelize,
                tableName: 'company',
                timestamps: false,
                underscored: false,
            }
        );
    }
}

export default Company;
