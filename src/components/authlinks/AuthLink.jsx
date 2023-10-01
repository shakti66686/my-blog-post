"use client";
import React, { useState } from "react";
import style from "./authlink.module.css";
import Link from "next/link";
const AuthLink = () => {
  const [open, setOpen] = useState(false);
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/Login" className={style.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/Write" className={style.link}>
            Write
          </Link>
          <span>Logout</span>
        </>
      )}
      <div className={style.burger} onClick={() => setOpen(!open)}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
      {open && (
        <div className={style.reaponsiveMenu}>
          <Link href="/" className={style.burgerLink}>
            Homepage
          </Link>
          <Link href="/" className={style.burgerLink}>
            About
          </Link>
          <Link href="/" className={style.burgerLink}>
            Contact
          </Link>
          {status === "notauthenticated" ? (
            <Link href="/Login" className={style.burgerLink}>
              Login
            </Link>
          ) : (
            <>
              <Link href="/Write" className={style.burgerLink}>
                Write
              </Link>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLink;
