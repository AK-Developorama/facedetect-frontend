import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="rankContainer f6 lh-copy ">
      <div className="userName white b f4">{name}</div>
      <div className="entriesDescription black">{"your current entry count is:"}</div>
      <div className="entries f4 b black">{entries}</div>
    </div>
  );
};

export default Rank;
