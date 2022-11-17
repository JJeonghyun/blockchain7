// 스마트 웹 백엔드 개발
const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(50),
          unique: true,
        },
        pw: {
          type: Sequelize.STRING(255),
        },
        nickName: {
          type: Sequelize.STRING(50),
        },
      },
      {
        sequelize,
        timestamps: true,
        paranoid: true,
        underscored: true, // JavaScript상에서의 Camel 표기법을
        // DB에서 snake 표기법으로 바꿔준다. (userId -> user_id)
        modelName: "User",
        tableName: "user",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    User.hasMany(db.Chat, {
      foreignKey: "user_id",
      sourceKey: "id",
      as: "Chats",
    });
  }
};
