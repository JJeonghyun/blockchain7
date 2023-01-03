import EventComponent from "./Comp";

const EventContainer = ({ startNum, endNum }) => {
  let tempArr = [];
  for (let i = startNum; i < endNum; i++) {
    tempArr.push(i);
  }
  return <EventComponent tempArr={tempArr} />;
};
export default EventContainer;
