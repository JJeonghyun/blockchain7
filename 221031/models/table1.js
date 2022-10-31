const Sequelize = require("sequelize");

module.exports = class Table1 extends Sequelize.Model {
  // class *** : *** 클래스 선언
  // extends : 상속, 오른쪽에 있는 걸 기본으로 왼쪽, 즉 지금 선언한 클래스를 생성한다.
  // 오른쪽에 있는 내용은 전부 왼쪽에도 있다

  static init(sequelize) {
    // 테이블 생성
    return super.init(
      {
        // 컬럼들을 작성한다
        column1: {
          type: Sequelize.STRING(10),
          // type을 적을 때 왜 Sequelize에서 가져올까 ?
          // number, string < JavaScript에 있는 왜 가져 올까?
          // JavaScript에 숫자가 들어왔을 때 정수인지 실수 인지 알 수 없기에 DB에서 알아야하기에
          // DB에서 사용하는 자료형으로 맞게 JavaScript의 자료형을 넣어주기 위해
          // Sequelize 라이브러리에서 제공하는 자료형을 사용한다
        },
        column2: {
          // type : Sequelize.NUMBER // < 얘는 index로 사용하지 못한다
          // INT가 아니라 숫자, FLOAT / DOUBLE
          type: Sequelize.INTEGER.UNSIGNED, // UNSIGNED 란? 0 보다 크다. 음수가 아니고 0, 양수로만 이루어져 있다.
          // 음수 ~ 양수로 이루어진 용량을 0 부터 양수 까지로 용량을 사용하겠다 라는 뜻 (-20억 ~ 20억 x -> 0 ~ 40억)
          primaryKey: true, // 테이블당 하나만 가능하다, 검색에 용이하다
          unique: true, // 데이터가 중복될 수 없다
          autoIncrement: true, // 자동 증가 한다
        },
      },
      {
        // 테이블에 대한 기본 설정
        sequelize,
        timestamps: true, // created_at, updated_at을 자동으로 추가한다
        underscored: true, // 카멜을 스네이크로 바꾼다 < createdAt -> created_at
        paranoid: false, // deleted_at을 추가할지 안할지 설정 한다, 데이터를 삭제했을 때 DB에서 아예없앨지 남길껀지
        // true 라면 데이터의 삭제 기록을 남긴다, false면 남기지 않는다
        modelName: "Table1", // JavaScript에서 사용하는 이름
        tableName: "table1", // DB에 생성되는 테이블 이름
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    // 관계를 위한 메서드
    db.Table1.hasMany(db.Table2, {
      // Table2를 많이 갖고 있다.
      foreignKey: "table1_column2", // 연결하는 키
      sourceKey: "column2", // 상대가 저장할 키(컬럼)
      as: "Table2s", // 상대를 찾거나 추가하거나 등등에서 사용
    });
    db.Table1.belongsToMany(db.Table2, {
      through: "link_tables",
    });
  }
};
