import React from "react";
import { youtubeData } from "../../Data";
import YoutubeItem from "../../components/youtube/YoutubeItem";

const YoutubeList = (props) => {
  return (
    <div className="card-lists">
      {props.children}
      {youtubeData.map((item, index) => (
        <YoutubeItem
          key={item.id}
          img={item.image}
          avatar={item.avartar || item.image}
          title={item.title}
          name={item.author}
        ></YoutubeItem>
      ))}
    </div>
  );
};

export default YoutubeList;
