const Sequelize = require("sequelize");

module.exports = class Table2 extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        column3: {
          type: Sequelize.STRING(255),
        },
        column4: {
          type: Sequelize.BOOLEAN,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        paranoid: true,
        modelName: "Table2",
        tableName: "table2",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Table2.belongsTo(db.Table1, {
      // Table1이 Table2를 갖고 있다 (Table2가 어딘가(Table1)에 속해 있다.)
      foreignKey: "table1_column2", // 연결하는 키
      targetKey: "column2", // 상대한테 받아올 키(컬럼)
    });

    // n : m
    // 다른 데이블과 연결되어야 익숙하다 ? => 굳이 본인을 써야하나? / 내가 나를 여려개 갖고 있다가 당연?
    // 같은 테이블과 연결되어야 익숙하다 => 친구추가 => user : user
    db.Table2.belongsToMany(db.Table2, {
      through: "link_table2",
      as: "ToTable2s",
      foreignKey: "table2_to_id",
    });
    db.Table2.belongsToMany(db.Table2, {
      through: "link_table2",
      as: "FromTable2s",
      foreignKey: "table2_from_id",
    });
    db.Table2.belongsToMany(db.Table1, {
      through: "link_tables",
    });
  }
};
