import React from "react";
import style from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Popular category</h1>
      <div className={style.categories}>
        <Link href="/blog" className={`${style.category} ${style.style}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={style.image}
          />
          style
        </Link>
        <Link href="/blog" className={`${style.category} ${style.fashion}`}>
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className={style.image}
          />
          fashion
        </Link>
        <Link href="/blog" className={`${style.category} ${style.food}`}>
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className={style.image}
          />
          food
        </Link>
        <Link href="/blog" className={`${style.category} ${style.travel}`}>
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className={style.image}
          />
          travel
        </Link>
        <Link href="/blog" className={`${style.category} ${style.culture}`}>
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className={style.image}
          />
          culture
        </Link>
        <Link href="/blog" className={`${style.category} ${style.coding}`}>
          <Image
            src="/coding.png"
            alt=""
            width={32}
            height={32}
            className={style.image}
          />
          coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
