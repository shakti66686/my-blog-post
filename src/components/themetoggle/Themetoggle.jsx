"use client";
import React, { useContext } from "react";
import style from "./themetoggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const Themetoggle = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={style.container}>
      <Image src="/moon.png" alt="moon" height={14} width={14} />
      <div className={style.ball}></div>
      <Image src="/sun.png" alt="sun" height={14} width={14} />
    </div>
  );
};

export default Themetoggle;
