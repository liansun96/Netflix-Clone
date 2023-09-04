import React from "react";
import { useSelector } from "react-redux";

const MyList = () => {
  const favMoive = useSelector((state) => state);
  console.log(favMoive);
  return <div></div>;
};

export default MyList;
