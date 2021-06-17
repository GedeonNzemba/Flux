import React, { Fragment } from 'react'
import Image from "next/image"
import Link from "next/link"

function Header() {
    return (
        <Fragment>
            <header className="header">
                <nav className="navigation">
                    <ul>
                        <li>
                            <Image src="/Group3.png" alt="Menu" width={72} height={16} />
                        </li>
                        <li>
                            <Link href="/pages/index" passHref>
                                <Image src="/logo_v1.png" alt="logo" width={197} height={46} />
                            </Link>
                        </li>
                        <li></li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    )
}

export default Header
