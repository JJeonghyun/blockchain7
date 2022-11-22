import { useState } from "react";
import "../App.css";
import styled from "styled-components";

function List() {
  const [listArr, setListArr] = useState([
    { text: "1", user: "asdd" },
    { text: "2", user: "asdd" },
    { text: "3", user: "asdd" },
    { text: "4", user: "asdd" },
    { text: "5", user: "asdd" },
    { text: "6", user: "asdd" },
  ]);

  return (
    <div>
      {listArr.map((item, index) => (
        <div key={index}>
          <div key={`${index}-1`}>{item.text}</div>
          <div key={`${index}-2`}>{item.user}</div>
        </div>
      ))}
    </div>
  );
}

export default List;
