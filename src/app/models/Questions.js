import Sequelize, { Model } from 'sequelize';

class Questions extends Model {
        static init(sequelize){
            super.init({
                descricao: Sequelize.STRING,
                tipo: Sequelize.BOOLEAN,
                dimensao: Sequelize.STRING,
                eixo: Sequelize.STRING,
            },{
                sequelize,
            });
        }

        static associate(models) {
            this.belongsTo(models.Quiz, {foreignKey:'question_id', as:'question'});
        }
    }

    export default Questions;
