import { useInView } from 'react-intersection-observer';
import css from './map.module.css'
import { useEffect, useRef } from 'react';
import "./map.css"

const Map = () => {

    const {ref: Rocket, inView: ElisVisible} = useInView({threshold: 0.3})

    console.log(ElisVisible);
    const myRef = useRef()
    useEffect(() => {
        if(ElisVisible){
            myRef.current.classList.add("animation1")
        }

    }, [ElisVisible])


    return (
        <section className={css.roadmapWrapper} ref={Rocket}>
            <div className={css.roadmapContainer}>
                <div className={css.radmapContainerInner}>
                <div className={css.roadmapHeader}>
                    <div></div>
                    <h4>Roadmap</h4>
                </div>
                <div className={css.info} ref={myRef} >
                    <article className={css.article_1 + ' '+ css.full}>
                        <div className={css.leftInfo_1}>
                            <h5 className={css.title}>Launch of cSave and cGet</h5>
                            <p className={css.text}>By using the platform, users can borrow stablecoins by using their crypto as
                                collateral, which is fast, secure, and easy. Additionally,
                                users can make deposits and receive interest from the platform.</p>
                        </div>
                        <div className={css.rightInfo_1}></div>

                    </article>

                    <article className={css.article_2 + ' '+ css.full + ' '+ css.respons}>
                        <div className={css.rightInfo_2}></div>
                        <div className={css.leftInfo_2}>
                            <h5 className={css.title}>Launch of cSave and cGet</h5>
                            <p className={css.text}>By using the platform, users can borrow stablecoins by using their crypto as
                                collateral, which is fast, secure, and easy. Additionally,
                                users can make deposits and receive interest from the platform.</p>
                        </div>
                    </article>

                    <article className={css.article_3 + ' '+ css.full}>
                        <div className={css.leftInfo_3}>
                            <h5 className={css.title}>cDram cryptocurrency</h5>
                            <p className={css.text}>cDram intends to expand its platform and services, and provide
                                users with more options and benefits in the future. The launch of
                                a proprietary cryptocurrency may also provide users with a unique and innovative way to
                                participate in the platform and potentially earn greater returns.</p>
                        </div>
                        <div className={css.rightInfo_3}></div>
                    </article>

                    <article className={css.article_4 + ' '+ css.full + ' '+ css.respons}>
                        <div className={css.rightInfo_4}></div>
                        <div className={css.leftInfo_4}>
                            <h5 className={css.title}>cDram – constantly evolving global financial ecosystem</h5>
                            <p className={css.text}>Be a part of it now!</p>
                        </div>
                    </article>
                </div>
                </div>
            </div>

        </section>
    )
}

export default Map;