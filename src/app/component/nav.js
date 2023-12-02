'use client'

import style from "@/app/style/navbar.module.css"
//import {CgCloseR, CgMenu} from "react-icons/cg";
import Link from "next/link";
//import {useState} from "react";

const Nav = () => {
    // const [openMenu, setOpenMenu] = useState(false);
    // console.log("value " + openMenu)
    return (
        <>
            <nav className={style.navbar}>
                <div>
                    <ul className={style.navbarList}>
                        <li className={style.navbarItem}>
                            <Link className={style.navbarLink} href="/"
                                  //onClick={() => setOpenMenu(false)}
                            >Home</Link>
                        </li>
                        <li className={style.navbarItem}>
                            <Link className={style.navbarLink} href="/about"
                                  //onClick={() => setOpenMenu(false)}
                            >About</Link>
                        </li>
                        <li className={style.navbarItem}>
                            <Link className={style.navbarLink}
                                  //onClick={() => setOpenMenu(false)}
                                  href="/movie">Movie</Link>
                        </li>
                        <li className={style.navbarItem}>
                            <Link className={style.navbarLink}
                                 // onClick={() => setOpenMenu(false)}
                                  href="/contact">Contact</Link>
                        </li>
                    </ul>

                    {/* //nav icon */}
                    {/* <div className={style['mobile-navbar-btn']}>
                        <CgMenu
                            name="menu-outline"
                            className={style['mobile-nav-icon']}
                            onClick={() => setOpenMenu(true)}
                        />
                        <CgCloseR
                            name="close-outline"
                            className={`${style['mobile-nav-icon']} ${style['close-outline']}`}
                            onClick={() => setOpenMenu(false)}
                        />
                    </div> */}
                </div>
            </nav>

        </>

    );
};

export default Nav;