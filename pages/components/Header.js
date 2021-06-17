import React, { Fragment } from 'react'
import Image from "next/image"
import Link from "next/link"
import styles from '../../styles/Global.module.css'
import Head from "next/head"

function Header() {
    return (
        <Fragment>
            <header className={styles.header}>
                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            <Image className={styles.navbar} src="/Group3.png" alt="Menu" width={44} height={18} />
                        </li>
                        <li>
                            <Link href="/pages/index" passHref>
                                <Image className={styles.logo} src="/logo_v1.png" alt="logo" width={197} height={46} />
                            </Link>
                        </li>
                        <li>
                            <Link href="/" passHref>
                                <div className={styles.header_btn}>
                                    <span className={styles.span}>make an enquiry</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    )
}

export default Header
