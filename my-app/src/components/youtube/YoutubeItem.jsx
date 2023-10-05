import React from "react";
import { youtubeData } from "../../Data";

const youtubeItem = (props) => {
  return (
    <div className="card-item">
      <img src={props.img} alt="" />
      <div className="card-content">
        <img src={props.avatar} alt="" className="content-img" />
        <div className="content">
          <h1 className="title">
            <b>{props.title}</b>
          </h1>
          <p className="name">{props.name}</p>
        </div>
      </div>
    </div>
  );
};

export default youtubeItem;
