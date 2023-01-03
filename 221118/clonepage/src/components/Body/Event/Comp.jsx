const EventComponent = ({ tempArr }) => {
  return (
    <div>
      {tempArr.map((item, index) => (
        <div key={`event-container${index}`}>
          <img key={`img-box${index}`} src={`imgs/capture${index}.jpg`} />
          <div key={`hidden-container${index}`}>
            <div key={`hidden-first-box${index}`}>
              <img
                key={`hidden-img-box${index}`}
                src="imgs/instarImg.png"
                alt="asd"
              />
              <div key={`text-inner-box${index}`}>8 days age</div>
            </div>
            <div key={`second-text-box${index}`}>
              인천에서도 '외롭다' 공연 티켓 오픈되었습니다. 많은 관심
              부탁드립니다
            </div>
            <div key={`readme-box${index}`}>read more</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default EventComponent;
