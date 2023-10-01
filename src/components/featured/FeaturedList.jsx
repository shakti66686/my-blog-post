import React from "react";
import style from "./featured.module.css";
import Image from "next/image";
const FeaturedList = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        <b className={style.bold}>Hey, Shivam mishra hear!</b> discover my
        stories and creative ideas.
      </h1>
      <div className={style.post}>
        <div className={style.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={style.image} />
        </div>
        <div className={style.textContainer}>
          <h1 className={style.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            iusto .
          </h1>
          <p className={style.postDescreption}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut in ullam
            neque aliquid tempore cumque, nobis nulla. Fugiat obcaecati rem
            dolorem in aut optio. Placeat quo quasi in iusto temporibus a
            voluptas aperiam quod. Dolore, aliquid, error quos eveniet explicabo
            rerum recusandae nostrum commodi ea reiciendis porro, ipsam
            inventore sit?
          </p>
          <button className={style.button}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedList;
