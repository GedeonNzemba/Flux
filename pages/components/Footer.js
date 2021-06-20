import React, { Fragment, useEffect } from 'react'
import styles from "../../styles/Global.module.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Image from "next/image"
import Link from 'next/link';

function Footer() {


    useEffect(() => {
        var firstName = document.getElementById("standard-basic1");
        var lastName = document.getElementById("standard-basic2");
        var emailName = document.getElementById("standard-basic3");
        firstName.addEventListener('click', () => {
            document.getElementById('standard-basic1-label').classList.add('removeTop');
        })
        lastName.addEventListener('click', () => {
            document.getElementById('standard-basic2-label').classList.add('removeTop');
        })
        emailName.addEventListener('click', () => {
            document.getElementById('standard-basic3-label').classList.add('removeTop');
        })


    }, [])

    return (
        <Fragment>
            <footer className={styles.footer}>
                <div className={styles.footerWrapper}>
                    <section className={styles.__topContainer}>
                        <div className={styles.__leftContent}>
                            <div className={styles.__innerLeftContent}>
                                <div className={styles.__itemWrap}>
                                    <span>explore</span>
                                    <ul className={styles.__itemDiscOff}>
                                        <li className={styles.__itemText}>stays</li>
                                        <li className={styles.__itemText}>experiences</li>
                                        <li className={styles.__itemText}>locations</li>
                                        <li className={styles.__itemText}>offers</li>
                                        <li className={styles.__itemText}>tours</li>
                                    </ul>
                                </div>
                                <div className={styles.__itemWrap}>
                                    <span>discover</span>
                                    <ul className={styles.__itemDiscOff}>
                                        <li className={styles.__itemText}>about</li>
                                        <li className={styles.__itemText}>foundations</li>
                                        <li className={styles.__itemText}>gallery</li>
                                        <li className={styles.__itemText}>blog</li>
                                    </ul>
                                </div>
                                <div className={styles.__itemWrap}>
                                    <span>more info</span>
                                    <ul className={styles.__itemDiscOff}>
                                        <li className={styles.__itemText}>rates</li>
                                        <li className={styles.__itemText}>covid-19</li>
                                        <li className={styles.__itemText}>contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.__rightContent}>
                            <h6>Sign up for exclusive news, travel inspiration and offers</h6>
                            <form className={styles.footerForm} noValidate autoComplete="off">
                                <div className={styles.__nameWrapper}>
                                    <TextField className={styles.__firstname} id="standard-basic1" label="First name" />
                                    <TextField className={styles.__lastname} id="standard-basic2" label="Last name" />
                                </div>
                                <TextField className={styles.__email} id="standard-basic3" label="Email address" />
                                <section className={styles.__warningText}>
                                    <p>
                                        By entering your details you consent to be
                                        contacted via email by the Time + Tide with
                                        offers and updates. To opt out, use the unsubscribe
                                        link or email unsubscribe@timeandtideafrica.com.
                                        View our privacy policy for details. This site is
                                        protected by reCAPTCHA and the Google Privacy Policy
                                        and Google Terms of Service apply.
                                    </p>
                                </section>
                                <button className={styles.__submit} type="submit">
                                    Sign Up
                                </button>
                            </form>
                        </div>
                    </section>
                    <section className={styles.__bottomContainer}>
                        <div className={styles.__lineWrapper} />
                        <div className={styles.__policySocialWrapper}>
                            <section className={styles.__crumbLinks}>
                                <div className={styles.__itemLinks}>
                                    <Link className={styles.curser} href="/" passHref>
                                        <p>All rights reserved 2021 Time + Tide</p>
                                    </Link>
                                </div>
                                <div className={styles.__itemLinks}>
                                    <Link className={styles.curser} href="/" passHref >
                                        <p>Privacy Policy</p>
                                    </Link>
                                </div>
                                <div className={styles.__itemLinks}>
                                    <Link className={styles.curser} href="/" passHref>
                                        <p>Website Terms & Conditions</p>
                                    </Link>
                                </div>
                                <div className={styles.__itemLinks}>
                                    <Link className={styles.curser} href="/" passHref>
                                        <p>Booking Terms & Conditions</p>
                                    </Link>
                                </div>
                            </section>
                            <section className={styles.__linkSocial}>
                                <Link href="/" passHref>
                                    <div className={styles.__itemsIcon}>
                                        <Image className={styles.iconLight} src="/image/assets/image17.png" alt="instagram" width={18} height={19} />
                                    </div>
                                </Link>
                                <Link href="/" passHref>
                                    <div className={styles.__itemsIcon}>
                                        <Image className={styles.iconLight} src="/image/assets/image18.png" alt="facebook" width={20} height={20} />
                                    </div>
                                </Link>
                                <Link href="/" passHref>
                                    <div className={styles.__itemsIcon}>
                                        <Image className={styles.iconLight} src="/image/assets/image19.png" alt="twitter" width={21} height={21} />
                                    </div>
                                </Link>
                            </section>
                        </div>
                        <div className={styles.__footerLogo}>
                            <div className={styles.timedteIcon}>
                                <Link href="/" passHref>
                                    <Image className={styles.timeIcon} src="/image/assets/image6.png" alt="timedte" width={136} height={140} />
                                </Link>
                            </div>
                            <div className={styles.footerLogoIcon}>
                                <Link href="/" passHref>
                                    <Image className={styles.siteLogoIcon} src="/logo_v1.png" alt="logo" width={197} height={46} />
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer
