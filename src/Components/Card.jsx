import React from "react";
import "./Card.css";

const Card = ({data}) => {
  return (
    <div className="card">
      <h3>{data.tournament[0].name}</h3>
      <h6>{data.round}</h6>
      <div className="card-main-area">
        <div className="player-1-col">
          <div className="flag-outer-box">
            {data.team1[0].name==data.winner&&<img
              className="crown"
              src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08f830ae-ce65-42f5-b243-b7a3f8a15b5f/crown.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221124T172928Z&X-Amz-Expires=86400&X-Amz-Signature=d3c5aa57376bb496e591a5500d61b762cb71b06bac98329f929f65ff32156da2&X-Amz-SignedHeaders=host&x-id=GetObject"
            />}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
              className="flag"
            />
          </div>
          <p>{data.team1[0].name}</p>
        </div>
        <div className="match-details">
          <p>v/s</p>
          <p className="sets">{`${data.a1}-${data.b1},${data.a2}-${data.b2},${data.a3}-${data.b3}`}</p>
          <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221124T172837Z&X-Amz-Expires=86400&X-Amz-Signature=b002c307c1440f46c6152b3bd4c6a654978a5b0851b20236a71d4543f0406009&X-Amz-SignedHeaders=host&x-id=GetObject" />
        </div>
        <div className="player-2-col">
          <div className="flag-outer-box">
            {data.team2[0].name==data.winner&&<img
              className="crown"
              src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08f830ae-ce65-42f5-b243-b7a3f8a15b5f/crown.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221124T172928Z&X-Amz-Expires=86400&X-Amz-Signature=d3c5aa57376bb496e591a5500d61b762cb71b06bac98329f929f65ff32156da2&X-Amz-SignedHeaders=host&x-id=GetObject"
            />}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
              className="flag"
            />
          </div>
          <p>{data.team2[0].name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
