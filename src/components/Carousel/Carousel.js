import React from "react";
import "./styles.css";
import { image_properties } from "../../utils";
import Card from "../Card/Card";
import Table from "../Table/Table";
const Carousel = () => {
  const openDialog = (caption) => {
    //open modal here
    // storeit in state(caption)
  };

  /**
   * Conditionally render the dialog => Show the players of the team concerned
   * for(let [key,value] of Object.entries(getPlayers)){
   *  if(key === caption){
   * setTeamData(getPlayers[key/caption])
   * }
   * }
   */

  return (
    <div className="media-scroller">
      {image_properties &&
        Object.entries(image_properties).map(([key, value], index) => {
          return (
            <Card
              source={value}
              caption={key}
              key={index}
              openModal={openDialog}
            />
          );
        })}
{/* {state && 
<dialog> Render the array team data with the caption stored in state 
Search for a drag and drop npm package with high downloads => render it in dialog 
</dialog>
} */}
        
    </div>
  );
};

export default Carousel;
