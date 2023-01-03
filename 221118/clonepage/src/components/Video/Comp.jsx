import styled from "styled-components";

const VideoComponent = () => {
  return (
    <>
      <TopTitle>
        <div>VIDEO</div>
      </TopTitle>
      <VideoBox>
        <div>2020. 10. 21</div>
        <div>
          <hr />
        </div>
        <div>먼데이키즈 - 사랑 못해, 남들 쉽게 다 하는 거 Official MV</div>
        <div>
          <iframe
            width="790"
            height="444"
            src="https://www.youtube.com/embed/bEphLXLgD9A"
            title="먼데이 키즈 - 사랑 못해, 남들 쉽게 다 하는 거_MV (Monday Kiz - Others love easily, but I can`"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowfullscreen
          ></iframe>
        </div>
      </VideoBox>
      <VideoBox>
        <div>2020. 08. 04</div>
        <div>
          <hr />
        </div>
        <div>먼데이 키즈x이예준 - 나가 Official MV</div>
        <div>
          <iframe
            width="790"
            height="444"
            src="https://www.youtube.com/embed/z6-fUma8G_s"
            title="먼데이 키즈x이예준 - 나가 Official MV (Drama ver.)_Monday Kiz x LeeYejoon - Get out of my heart"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowfullscreen
          ></iframe>
        </div>
      </VideoBox>
      <VideoBox>
        <div>2020. 06. 22</div>
        <div>
          <hr />
        </div>
        <div>차가을 - 술 MV</div>
        <div>
          <iframe
            width="790"
            height="444"
            src="https://www.youtube.com/embed/-0-QdQYDebU"
            title="차가을 - 술 MV"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowfullscreen
          ></iframe>
        </div>
      </VideoBox>
      <VideoBox>
        <div>2020. 05. 06</div>
        <div>
          <hr />
        </div>
        <div>
          먼데이키즈 (Monday kiz) X 켄 (KEN) '견뎌야 하는 우리에게' Live Clip
        </div>
        <div>
          <iframe
            width="790"
            height="444"
            src="https://www.youtube.com/embed/NTHEmwsu_9A"
            title="먼데이키즈 (Monday kiz) X 켄 (KEN) '견뎌야 하는 우리에게' Live Clip"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowfullscreen
          ></iframe>
        </div>
      </VideoBox>
      <VideoBox>
        <div>2020. 05. 02</div>
        <div>
          <hr />
        </div>
        <div>경서예지 - 사실 나는 (Feat.전건호) Live Clip</div>
        <div>
          <iframe
            width="790"
            height="444"
            src="https://www.youtube.com/embed/wtKEJKAfKWQ"
            title="경서예지 - 사실 나는 (Feat.전건호) Live Clip_GyeongseoYeji - Actually.. I miss you (Feat.Gunho)"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowfullscreen
          ></iframe>
        </div>
      </VideoBox>
      <EtcBox>
        <div>
          <div>
            <iframe
              width="263"
              height="148"
              src="https://www.youtube.com/embed/hnZ1Mk-G2jA"
              title="[녹음실 LIVE] 이진성 - 우리 참 예뻤어 (원곡 : 차가을)"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="263"
              height="148"
              src="https://www.youtube.com/embed/eEuNqBmMzF8"
              title="[녹음실 LIVE] 이진성 - 새 사랑 (원곡 : 송하예)"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="263"
              height="148"
              src="https://www.youtube.com/embed/HYiEK5a1Oag"
              title="[가을 안부] 스케쥴 이동중 차안라이브"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="263"
              height="148"
              src="https://www.youtube.com/embed/jOXFut1PlJo"
              title="[MV] 먼데이 키즈(Monday Kiz) - 가을 안부(When Autumn Comes)"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // allowfullscreen
            ></iframe>
          </div>
        </div>
      </EtcBox>
    </>
  );
};

export default VideoComponent;

const TopTitle = styled.div`
  width: 65%;
  margin: 0 auto;
  & > div {
    display: flex;
    justify-content: flex-start;
    align-item: center;
    font-size: 2.5rem;
    padding: 30px 0;
    letter-spacing: 0.5rem;
    color: #979797;
    font-weight: 350;
  }
`;

const VideoBox = styled.div`
  width: 65%;
  margin: 0 auto;
  text-align: center;
  & > div {
    font-size: 1.2rem;
    color: #979797;
    padding: 10px 0;
  }
  & > div:nth-child(2) > hr {
    width: 20px;
    margin: 0 auto;
    color: #505050;
  }
  & > div:nth-child(3) {
    font-size: 2.2rem;
  }
`;

const EtcBox = styled.div`
  width: 65%;
  margin: 0 auto;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-item: center;
    padding-bottom: 50px;
    & > div {
      width: 20%;
    }
  }
`;
