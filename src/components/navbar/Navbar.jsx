import React from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLink from "../authlinks/AuthLink";
import Themetoggle from "../themetoggle/Themetoggle";
const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.social}>
        <Image src="/facebook.png" alt="faceebook" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={style.logo}>ShivamBlog</div>
      <div className={style.links}>
        <Themetoggle />
        <Link href="/" className={style.link}>
          Homepage
        </Link>
        <Link href="/" className={style.link}>
          Contact
        </Link>
        <Link href="/" className={style.link}>
          About
        </Link>
        <AuthLink />
      </div>
    </div>
  );
};

export default Navbar;
