import Photo from '../../assets/profile.png';

import './home.scss';

const Home = () => {
    return (
        <section className='home'>
            <article className='home__profile'>
                <div className='home__profile-photo'>
                    <img className='home__profile-img' src={Photo} alt="" />
                </div>
                <div className='home__profile-info'>
                    <h1 className='home__profile-info-name'>
                        THOMAS <br /><strong>FLAMENT</strong>
                    </h1>
                    <h2 className='home__profile-info-title'>
                        UI/UX & Full Stack Web Developer
                    </h2>
                </div>
                <div className='home__profile-contact'>
                    <span>
                        <a href='https://maps.app.goo.gl/wjmwPXbfxwC1dP3H7' target='_blank' className='home__profile-contact-adress'>120 Bd Clémenceau, <br /> 59700 Marcq-en-Baroeul</a>
                    </span>
                    <span>
                        <a href='tel:+33641437470' className='home__profile-contact-phone' >
                            +33641437470
                            <i className="fa-solid fa-phone"></i>
                        </a>
                    </span>
                    <span>
                        <a href='mailto:waltorias.as@gmail.com' className='home__profile-contact-email'>
                            waltorias.as@gmail.com
                            <i className="fa-solid fa-envelope"></i>
                        </a>

                    </span>
                </div>
            </article>
            <article className='home__about'>

            </article>
            <article className='home__skills'>

            </article>
            <article className='home__expertise'>

            </article>

            <article className='home__more'>

            </article>
        </section>
    );
};

export default Home;
