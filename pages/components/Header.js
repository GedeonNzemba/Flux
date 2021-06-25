import React, { Fragment } from 'react'
import Image from "next/image"
import Link from "next/link"
import styles from '../../styles/Global.module.css'
import Head from "next/head"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
// import fetcher from "../../lib/wordpress/fetcher"
// import { ALL_POSTS } from "../../lib/wordpress/api"

function Header({ posts }) {

    console.log(posts);
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
                <div className={styles.header_content}>
                    <center>
                        <div className={styles.__innerContent}>
                            <div className={styles.__graphicSVG}>
                                <div className={styles.headerGraphicSVG}>
                                    <Image src="/image/assets/Group31.png" alt="graphic image" width={46} height={46} />
                                </div>
                            </div>
                            {/* {posts.map((post) => {
                                return (
                                    <div className={styles.postedC} key={post.slug}>
                                        <h3>{post.title}</h3>
                                        <div dangerouslySetInnerHTML={{ __html: blogPost.excerpt }} />
                                        <p>{post.date}</p>
                                        <Link href={`/post/${post.slug}`}>
                                            <a>Read more</a>
                                        </Link>
                                    </div>
                                )
                            })} */}
                            <div className={styles.__contentTitle}>
                                <h5>a remote island sanctuary</h5>
                            </div>
                            <div className={styles.__contentText}>
                                <p>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Sink your feet into the pearly sands of a remote island sanctuary where you'll taste sweet
                                    jasmine on the breeze while gazing at a thousand sparkling shades of turquoise.
                                </p>
                            </div>
                            <div className={styles.__contentScroll}>
                                <Image className={styles.pageScroll} src="/image/assets/Group48.png" alt="scroll down graphic" width={41} height={41} />
                            </div>
                        </div>
                    </center>
                </div>
            </header>
        </Fragment>
    )
}

export default Header;

export async function getStaticProps() {
    const client = new ApolloClient({
        uri: "https://playground.fluxfullcircle.com/wp/graphql",
        cache: new InMemoryCache()
    });

    const { data } = await client.query({
        query: gql`
                    {
        posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
            nodes {
            id
            date
            slug
            title
            excerpt
            }
        }
        }
        `
    })

    return {
        props: {
            posts: data.posts.nodes
        }
    }


}