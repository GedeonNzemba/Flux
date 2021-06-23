import React from 'react'
import styles from '../../styles/Global.module.css'
import Image from 'next/image'
import Link from 'next/link'


const Main = () => {

    const CompHistory = () => {
        return (
            <>
                <div className={styles.compHistory}>
                    <section className={styles.historyInfo}>
                        <div className={styles.__titleInfo}>
                            <span>come find yourself</span>
                            <h4>
                                Spotted 30 years ago by one of our partners, this archipelago is a natural wonderland
                            </h4>
                        </div>
                        <div className={styles.__contentText}>
                            <p>
                                Explore uncharted waters and coral reefs hosting scores of jewel-toned fish. Stroll on the white sand beaches or take a guided nature walk to visit the resident lemurs and nesting sea turtles. Spot dolphins and migrating humpback whales as you gaze out over the Indian Ocean. Contribute to the long-term sustainability of the region simply by visiting.
                            </p>
                            <Link href="/" passHref>
                                <div className={styles.discoverOurstory}>
                                    discover our story
                            </div>
                            </Link>
                        </div>
                    </section>
                    <section className={styles.storyTypes}>
                        <div className={styles.storyTypesWrapper}>
                            <div className={styles.storyItem}>
                                <div className={styles.__image}>
                                    <Image src="/image/assets/flowerA.png" alt="travel with confidence" width={77} height={79} />
                                </div>
                                <div className={styles.__content}>
                                    <span>Travel with confidence</span>
                                    <div className={styles.__contentText}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                </div>
                            </div>
                            <div id={styles.storyDividerLine} />
                            <div className={styles.storyItem}>
                                <div className={styles.__image}>
                                    <Image src="/image/assets/paraA.png" alt="Expert travel advice" width={80} height={74} />
                                </div>
                                <div className={styles.__content}>
                                    <span>Expert travel advice</span>
                                    <div className={styles.__contentText}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                </div>
                            </div>
                            <div id={styles.storyDividerLine} />
                            <div className={styles.storyItem}>
                                <div className={styles.__image}>
                                    <Image src="/image/assets/doseA.png" alt="Environmental impact" width={78} height={91} />
                                </div>
                                <div className={styles.__content}>
                                    <span>Environmental impact</span>
                                    <div className={styles.__contentText}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                </div>
                            </div>
                        </div>

                        {/* two bottom grapics */}
                        <div className={styles.__leftGraphic}>
                            <Image src="/image/assets/Group52.png" alt="graphic image" width={423} height={250} />
                        </div>
                        <div className={styles.__rightGraphic}>
                            <Image src="/image/assets/natA.png" alt="graphic image" width={301} height={261} />
                        </div>
                    </section>
                </div>
                <div className={styles.invitationBanner}>
                    {/* <Image src="/image/assets/Rectangle28.png" alt="invitation banner" width="100%" height={666} /> */}
                    <div className={styles.invitationInfoCard}>
                        <span>our location</span>
                        <h3>An intimate haven to escape and unwind</h3>
                        <p>
                            Explore uncharted waters and coral reefs hosting scores of jewel-toned fish. Stroll on the white sand beaches or take a guided nature walk to visit the resident lemurs and nesting sea turtles. Spot dolphins and migrating humpback whales as you gaze out.
                        </p>
                        <Link href="/" passHref>
                            <div className={styles.discoverMiavana}>
                                discover miavana
                            </div>
                        </Link>

                    </div>
                </div>
            </>
        )
    }

    const LuxuryPlaces = () => {
        return (
            <>
                <div className={styles.LuxuryPlaces}>
                    <div className={styles.luxuryContainer}>
                        <section className={styles.villasWrapper}>
                            <div className={styles.imageWrap}>
                                <Image src="/image/assets/Rectangle14.png" alt="graphic image" width={557} height={654} />
                            </div>
                            <div className={styles.content}>
                                <h2>our villas</h2>
                                <Link href="/" passHref>
                                    <div className={styles.exploreOurVillas}>
                                        explore our villas
                            </div>
                                </Link>
                            </div>
                        </section>
                        <section className={styles.exclusiveWrapper}>
                            <div className={styles.__titleInfo}>
                                <span>our stays</span>
                                <h4>
                                    Luxury means stepping foot where no man has before, surrounded by an unspoiled horizon.
                            </h4>
                            </div>
                            <div className={styles.exploreContainer}>
                                <div className={styles.imageWrap}>
                                    <Image src="/image/assets/image22.png" alt="exclusive use" width={563} height={655} />
                                </div>
                                <div className={styles.content}>
                                    <h2>exclusive use</h2>
                                    <Link href="/" passHref>
                                        <div className={styles.exploreOurVillas}>
                                            explore exclusive use
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className={styles.graphicWrap}>
                        <Image src="/image/assets/Group73.png" alt="graphic image" width={866} height={393} />
                    </div>
                </div>
            </>
        )
    }
    const Explore = () => {
        return (
            <>
                <div className={styles.Explore}>
                    <div className={styles.exploreContainer}>
                        <div className={styles.exploreTitle}>
                            <div className={styles.__subtitle}>
                                <span>experience</span>
                            </div>
                            <div className={styles.__title}>
                                <h4>
                                    Explore uncharted waters and coral reefs hosting scores of jewel-toned fish.
                                </h4>
                            </div>
                        </div>
                        <div className={styles.exploreTypesWrapper}>
                            <div className={styles.exploreItem}>
                                <div className={styles.imageWrap}>
                                    <Image src="/image/assets/Rectangle24.png" alt="explore water" width={349} height={392} />
                                </div>
                                <div className={styles.contentWrap}>
                                    <h2>water</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                </div>
                            </div>
                            <div className={styles.exploreItem}>
                                <div className={styles.imageWrap}>
                                    <Image src="/image/assets/Rectangle32.png" alt="explore land" width={349} height={392} />
                                </div>
                                <div className={styles.contentWrap}>
                                    <h2>water</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                </div>
                            </div>
                            <div className={styles.exploreItem}>
                                <div className={styles.imageWrap}>
                                    <Image src="/image/assets/Rectangle33.png" alt="explore air" width={349} height={392} />
                                </div>
                                <div className={styles.contentWrap}>
                                    <h2>air</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.wrapper}>
                            <div className={styles.exploreExperience}>
                                <Link href="/" passHref>
                                    <div className={styles.exploreOurExperiences}>
                                        discover our experiences
                                    </div>
                                </Link>
                            </div>

                            <div className={styles.__rightGraphic}>
                                <Image src="/image/assets/Group73.png" alt="graphic image" width={866} height={393} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.exploreBanner}>
                        {/* <Image src="/image/assets/Rectangle28.png" alt="invitation banner" width="100%" height={666} /> */}
                        <div className={styles.exploreInfoCard}>
                            <span>our destination</span>
                            <h3>the land in a forgotten sea</h3>
                            <p>
                                Madagascar is the fourth biggest island on earth and has a number of small peripheral islands off it’s coastline. With an unparalleled mixture of endemic wildlife and plant species in a variety of habitats from rainforest to reefs, Madagascar truly is one of the greatest biodiversity regions on earth.
                                </p>
                            <Link href="/" passHref>
                                <div className={styles.discoverMadagascar}>
                                    Discover Madagascar
                                    </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const OurValues = () => {
        return (
            <>
                <div className={styles.OurValues}>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageWrap}>
                            <div className={styles.imageStack}>
                                <div className={styles.imageItem}>
                                    <Image src="/image/assets/Group31.png" alt="graphic image" width={76} height={76} />
                                </div>
                                <div className={styles.imageItem} id={styles.imageItem_b}>
                                    <Image src="/image/assets/Rectangle12.png" alt="graphic image" width={245} height={202} />
                                </div>
                            </div>

                            <div className={styles.imageItem} id={styles.imageItem_a}>
                                <Image src="/image/assets/Rectangle34.png" alt="graphic image" width={303} height={351} />
                            </div>

                        </div>

                        <div className={styles.imageWrap}>
                            <div className={styles.imageItem}>
                                <Image src="/image/assets/Group32.png" alt="graphic image" width={45} height={45} />
                            </div>
                            <div className={styles.imageItem} id={styles.imageItem_b}>
                                <Image src="/image/assets/image8.png" alt="graphic image" width={415} height={262} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <span>our values</span>
                        <div className={styles.contentWrap}>
                            <h4>
                                We are guides and guardians to sublime landscapes, extraordinary wildlife and rich cultures.
                            </h4>
                            <p>
                                Our conservation heritage dates back to 1950, when Norman Carr set up Zambia’s first game viewing camp in cooperation with Paramount Chief Nsefu of the Kunda Tribes. Today, we maintain his legacy, working with local communities to protect and share rare and unique places in all their natural beauty.
                            </p>
                        </div>
                        <Link href="/" passHref>
                            <div className={styles.learnMore}>
                                learn more
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }










    return (
        <main className={styles.main}>
            <CompHistory />
            <LuxuryPlaces />
            <Explore />
            <OurValues />
        </main>
    )
}

export default Main
