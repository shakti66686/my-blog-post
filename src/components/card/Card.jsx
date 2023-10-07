import React from "react";
import style from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={style.image} />
      </div>
      <div className={style.textContainer}>
        <div className={style.detail}>
          <span className={style.date}>20/09/2023-</span>
          <span className={style.category}>Culture</span>
        </div>
        <h1 className={style.title}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h1>
        <p className={style.postDes}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut in ullam
          neque aliquid tempore cumque, nobis nulla. Fugiat obcaecati rem
          dolorem in aut optio. Placeat quo quasi in iusto temporibus a voluptas
          aperiam quod.
        </p>
        <Link href="/" className={style.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
