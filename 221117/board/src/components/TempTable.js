import TempTr from "./TempTr";

// export default function TempTable({ Arr, tableData, head }) {
//   return (
//     <table>
//       <thead>
//         <TempTr isHead={true} tableData={tableData} head={head} />
//       </thead>
//       <tbody>
//         {Arr.map((item, index) => (
//           <TempTr key={index} tableData={item} head={head} />
//         ))}
//       </tbody>
//     </table>
//   );
// }

export default function TempTable(props) {
  return (
    <table>
      <thead>
        <TempTr
          isHead={true}
          tableData={props.headData}
          head={props.tempHead}
        />
      </thead>
      <tbody>
        {props.temppArr.map((item, index) => (
          <TempTr key={index} tableData={item} head={props.tempHead} />
        ))}
      </tbody>
    </table>
  );
}
