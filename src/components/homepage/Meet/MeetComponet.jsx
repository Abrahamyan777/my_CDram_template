import css from './meetComponet.module.css'


const MeetComponents = () => {
    return (
        <section className={css.meetWrapper}>
            <div className={css.meetContainer}>
                <div className={css.meetContainerInner}>
                    <div className={css.meetHeader}>
                        <div className={css.meetlogoContainer}>
                            <span>Meet</span>
                            <div></div>
                        </div>
                        <div className={css.meetText}>
                            <p>
                                Save your time. Make fast and convenient crypto transactions.
                                cDram is a simple crypto platform that will gradually be built and expanded.
                            </p>
                        </div>
                    </div>
                    <div className={css.meetFooter}>
                        <article>
                            <div className={css.footerLogo}></div>
                            <div className={css.info}>
                                <h3>Best options</h3>
                                <p>We offer the most competitive conditions for crypto transactions on the market</p>
                            </div>
                        </article>
                        <article>
                            <div className={css.footerLogo}></div>
                            <div className={css.info}>
                                <h3>Risk based management</h3>
                                <p>cDram has a unique risk-based management system that integrates credit, market, and operational
                                    risks, which helps to make optimal decisions</p>
                            </div>
                        </article>
                        <article>
                            <div className={css.footerLogo}></div>
                            <div className={css.info}>
                                <h3>Strong focus on security</h3>
                                <p>cDram strives for the best security measures to ensure the safety of its users' transactions and assets.
                                    Strong focus on Security is of high importance for us</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MeetComponents;