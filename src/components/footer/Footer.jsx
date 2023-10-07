import React from "react";
import style from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <h1 className={style.footerTitle}>ShivamBlogPage</h1>
        <p className={style.des}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          molestiae maiores laudantium adipisci eos labore porro excepturi
          praesentium, aperiam animi!
        </p>
        <div className={style.socialImg}>
          <Image src="/facebook.png" alt="faceebook" width={16} height={16} />
          <Image src="/tiktok.png" alt="tiktok" width={16} height={16} />
          <Image src="/instagram.png" alt="instagram" width={16} height={16} />
          <Image src="/youtube.png" alt="youtube" width={16} height={16} />
        </div>
      </div>
      <div className={style.links}>
        <div className={style.list}>
          <span className={style.span}>Links</span>
          <Link href="/">homepage</Link>
          <Link href="/">blog</Link>
          <Link href="/">about</Link>
          <Link href="/">contact</Link>
        </div>
        <div className={style.tag}>
          <span className={style.span}>tag</span>
          <Link href="/">style</Link>
          <Link href="/">culture</Link>
          <Link href="/">coding</Link>
          <Link href="/">fashion</Link>
        </div>
        <div className={style.social}>
          <span className={style.span}>social</span>
          <Link href="/">facebook</Link>
          <Link href="/">instagram</Link>
          <Link href="/">tiktok</Link>
          <Link href="/">youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
