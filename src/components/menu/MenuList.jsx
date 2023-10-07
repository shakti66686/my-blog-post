import React from "react";
import style from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

const MenuList = () => {
  return (
    <div className={style.container}>
      <h2 className={style.subtitle}>{"what's hot"}</h2>
      <h1 className={style.title}>Most popular</h1>
      <div className={style.items}>
        <Link href="/" className={style.item}>
          <div className={style.textContainer}>
            <span className={`${style.categoty} ${style.travel}`}>Travel</span>
            <h3 className={style.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={style.detail}>
              <span className={style.useraName}>Rama</span>
              <span className={style.date}>13/09/23</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.textContainer}>
            <span className={`${style.categoty} ${style.fashion}`}>
              fashion
            </span>
            <h3 className={style.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={style.detail}>
              <span className={style.useraName}>Rama</span>
              <span className={style.date}>13/09/23</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.textContainer}>
            <span className={`${style.categoty} ${style.food}`}>food</span>
            <h3 className={style.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={style.detail}>
              <span className={style.useraName}>Rama</span>
              <span className={style.date}>13/09/23</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.textContainer}>
            <span className={`${style.categoty} ${style.culture}`}>
              culture
            </span>
            <h3 className={style.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={style.detail}>
              <span className={style.useraName}>Rama</span>
              <span className={style.date}>13/09/23</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.textContainer}>
            <span className={`${style.categoty} ${style.coding}`}>coding</span>
            <h3 className={style.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={style.detail}>
              <span className={style.useraName}>Rama</span>
              <span className={style.date}>13/09/23</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.textContainer}>
            <span className={`${style.categoty} ${style.style}`}>style</span>
            <h3 className={style.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={style.detail}>
              <span className={style.useraName}>Rama</span>
              <span className={style.date}>13/09/23</span>
            </div>
          </div>
        </Link>
      </div>
      <h2 className={style.subtitle}>{"choosen by the editors"}</h2>
      <h1 className={style.title}>Editors pick</h1>
      <div className={style.items}>
        <Link href="/" className={style.item}>
          <div className={style.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={style.image} />
          </div>
          <div className={style.textContainer}>
            <span className={`${style.categoty} ${style.travel}`}>Travel</span>
            <h3 className={style.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={style.detail}>
              <span className={style.useraName}>Rama</span>
              <span className={style.date}>13/09/23</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={style.image} />
          </div>
          <div className={style.textContainer}>
            <span className={`${style.categoty} ${style.fashion}`}>
              fashion
            </span>
            <h3 className={style.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={style.detail}>
              <span className={style.useraName}>Rama</span>
              <span className={style.date}>13/09/23</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={style.image} />
          </div>
          <div className={style.textContainer}>
            <span className={`${style.categoty} ${style.food}`}>food</span>
            <h3 className={style.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={style.detail}>
              <span className={style.useraName}>Rama</span>
              <span className={style.date}>13/09/23</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={style.image} />
          </div>
          <div className={style.textContainer}>
            <span className={`${style.categoty} ${style.culture}`}>
              culture
            </span>
            <h3 className={style.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={style.detail}>
              <span className={style.useraName}>Rama</span>
              <span className={style.date}>13/09/23</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={style.image} />
          </div>
          <div className={style.textContainer}>
            <span className={`${style.categoty} ${style.coding}`}>coding</span>
            <h3 className={style.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={style.detail}>
              <span className={style.useraName}>Rama</span>
              <span className={style.date}>13/09/23</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={style.item}>
          <div className={style.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={style.image} />
          </div>
          <div className={style.textContainer}>
            <span className={`${style.categoty} ${style.style}`}>style</span>
            <h3 className={style.postTitle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={style.detail}>
              <span className={style.useraName}>Rama</span>
              <span className={style.date}>13/09/23</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuList;
