import React from "react";
import Menu from "@/components/menu/MenuList";
import CardList from "@/components/cardList/CardList";
import style from "@/app/blogpost/blogPost.module.css";

const page = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Style blog</h1>
      <div className={style.content}>
        <CardList />

        <Menu />
      </div>
    </div>
  );
};

export default page;
