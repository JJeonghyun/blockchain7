import styled from "styled-components";
import { TodoBtn } from "../../setting";
import { Link } from "react-router-dom";
import { STATESLIST } from "../../setting";

function Item({ item, index, setList }) {
  return (
    <ItemTr>
      <td>{index + 1}</td>
      <td>{item.taskName}</td>
      <td>
        <TodoBtn
          className={STATESLIST[item.status].toLowerCase().replace(" ", "-")}
          style={{ cursor: "default" }}
        >
          {STATESLIST[item.status]}
        </TodoBtn>
      </td>
      <td>
        <Link to={"/edit"} state={{ index, item }}>
          <TodoBtn>
            <img
              src="imgs/pen.svg"
              alt="pen"
              style={{
                filter: "invert(83%) sepia(38%) saturate(7484%)",
              }}
            ></img>
          </TodoBtn>
        </Link>
      </td>
      <td>
        <TodoBtn
          onClick={() => {
            setList((list) => {
              const before = list.slice(0, index);
              const after = list.slice(index + 1);
              return [...before, ...after];
            });
          }}
        >
          <img
            src="imgs/trash.svg"
            alt="trash"
            style={{
              filter: "invert(23%) sepia(38%) saturate(7484%)",
            }}
          ></img>
        </TodoBtn>
      </td>
    </ItemTr>
  );
}
export default Item;

const ItemTr = styled.tr`
  text-align: center;
  height: 50px;
  td {
    border-bottom: 1px solid lightgray;
  }
`;
