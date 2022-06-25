import React, { useState } from "react";
import "./styles.css";
import { db } from "./../../config/db";
import { getPlayers } from "./../../utils";

const Card = ({ source, caption, openModal }) => {
  /**
   * Expand : using html dialog => reuse same card component => get the players of the team(do it now)
   */

/**
 * caption === the key of getplayers 
 * 
 */


  return (
    <figure className="media-element" onClick={() => openModal(caption)}>
      {" "}
      //place it on the outermost element
      <img src={source} alt="Trulli" width="40%" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default Card;
