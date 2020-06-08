import * as Sequelize from 'sequelize';

export const modelName = 'user';
export const attributes: Sequelize.ModelAttributes = {
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
};
export const modelOptions: Sequelize.ModelOptions = {};