import React from "react";
import style from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
const CardList = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Recent posts</h1>
      <div className={style.posts}>
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
