import { NavLink } from 'react-router-dom';
import css from './Header.module.css'
import { useEffect, useState } from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import Modal from '../../Modal/Modal';

const Header = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", changeWidth);
        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    }, []);

    return (
        <header>
            <div className={css.headerContainer}>
                <div className={css.header_wrapper}>
                    <div className={css.logoWrapper}>
                        <NavLink to="/">
                            <div className={css.logoContainer}>
                                <div className={css.vector_1}></div>
                                <div className={css.vector_2}></div>
                                <div className={css.vector_3}></div>
                                <div className={css.vector_4}></div>
                                <div className={css.vector_5}></div>
                            </div>
                        </NavLink>
                    </div>
                    {(screenWidth > 1024) ? (
                        <>
                            <nav className={css.navWrapper}>
                                <ul className={css.list_table}>
                                    <li className={css.list_item}>
                                        <NavLink to='cget'>cGet</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='csave'>cSave</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='cryptocurrency'>Cryptocurrency</NavLink>
                                    </li>
                                </ul>
                            </nav>
                            <div className={css.loginWrapper}>
                                <div className={css.login}>
                                    <button className={css.loginBtn}>Login</button>
                                </div>
                                <div className={css.registration}>
                                    <button className={css.registrationBtn}>Registration</button>
                                </div>
                            </div>
                        </>
                    ) :
                        <>
                            <button className={css.btnIcon} onClick={() => setOpen(!open)}>
                                <BiMenuAltRight className={css.icon} />
                            </button>
                        </>
                    }
                </div>
                {
                    open && <Modal open={open} setOpen={setOpen} />
                }
            </div>
        </header>
    )
}

export default Header;