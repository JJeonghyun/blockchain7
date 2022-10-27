const Sequelize = require("sequelize");

module.exports = class Table1 extends Sequelize.Model {
  // static : class를 new 하지 않고 메서드를 불러온다
  static init(sequelize) {
    return super.init(
      {
        idx: {
          type: Sequelize.INTEGER, // int
          primaryKey: true,
          autoIncrement: true, // index 값 자동 증가
          unique: true, // 값이 중복되면 안된다
          allowNull: false, // 비면 안된다
        },
        name: {
          type: Sequelize.STRING(45), // VARCHAR
          allowNull: true, // 비어도된다
        },
        // password: {
        //   type: Sequelize.STRING(256),
        //   allowNull: true, // 비어도된다
        // },
        id: {
          type: Sequelize.STRING(45),
          allowNull: true, // 비어도된다
        },
        // create_at: {
        //   type: Sequelize.DATE,
        //   allowNull: false, // 비면 안된다
        //   defaultValue: Sequelize.NOW, // 기본값은 현재 시간
        // },
      },
      {
        sequelize, // 넣어라
        timestamps: true, // createAt, updateAt 자동으로 추가
        underscored: true, // 테이블과 컬럼명을 카멜 케이스로 수정
        modelName: "NewTable1", // JavaScript에서 사용하는 테이블명
        tableName: "new_table1", // mysql에 저장되어 있는 테이블명
        paranoid: false, // 삭제 시 deletedAt를 저장할 지, 테이블에서 데이터를 삭제 시 아예 삭제를 할 것인가? 아니면 삭제한 날짜를 남김으로써 데이터를 남길 것인가?
        charset: "utf8mb4", // 언어 포멧을 설정
        collate: "utf8mb4_general_ci", // 언어 포멧을 설정
      }
    );
  }

  static associate(db) {
    // db.NewTable1
  }
};
