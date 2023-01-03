import VideoContainer from "./Video/Container";
import SecondContainer from "./Second/Container";
import IconContainer from "./Icon/Container";
import EventContainer from "./Event/Container";
import FooterContainer from "../Footer/Container";

const BodyComponent = () => {
  return (
    <div>
      <VideoContainer />
      <SecondContainer />
      <IconContainer />
      <EventContainer startNum={1} endNum={6} />
      <EventContainer startNum={7} endNum={12} />
      <FooterContainer />
    </div>
  );
};
export default BodyComponent;
