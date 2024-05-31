import React, { useState } from 'react';
import Photo from '../../assets/profile.png';
import UK_Flag from '../../assets/Flag_of_the_UK.svg';
import FR_Flag from '../../assets/Flag_of_France.svg';
import './home.scss';
import enLang from '../../json/en-lang.json';
import frLang from '../../json/fr-lang.json';

const Home = () => {
    const [lang, setLang] = useState(enLang);

    const switchLanguage = () => {
        setLang(lang === enLang ? frLang : enLang);
    };
    const printPage = () => {
        window.print();
    };

    return (
        <section className='home'>
            <button onClick={switchLanguage} className='home__lang-switch' title={lang.lang.title}>
                <img className='home__lang-switch-img' src={lang === enLang ? FR_Flag : UK_Flag} alt={lang === enLang ? 'French Flag' : 'UK Flag'} />
            </button>
            <button onClick={printPage} className='home__print-button' title={lang.print.title}>
                <i className='fas fa-print'></i>
            </button>
            <article className='home__profile'>
                <div className='home__profile-photo'>
                    <img className='home__profile-img' src={Photo} alt="profile-photo" />
                </div>
                <div className='home__profile-info'>
                    <h1 className='home__profile-info-name' dangerouslySetInnerHTML={{ __html: lang.profile.name }} />
                    <h2 className='home__profile-info-title'>{lang.profile.title}</h2>
                </div>
                <div className='home__profile-contact'>
                    <span>
                        <a href='https://maps.app.goo.gl/wjmwPXbfxwC1dP3H7' target='_blank' className='home__profile-contact-adress'>
                            {lang.contact.address}
                        </a>
                    </span>
                    <span>
                        <a href='tel:+33641437470' className='home__profile-contact-phone'>
                            {lang.contact.phone}
                            <i className="fa-solid fa-phone"></i>
                        </a>
                    </span>
                    <span>
                        <a href='mailto:tflament@icloud.com' className='home__profile-contact-email'>
                            {lang.contact.email}
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </span>
                </div>
            </article>
            <article className='home__about'>
                <h2 className='home__about-title'>{lang.about.title}</h2>
                <p className='home__about-text' dangerouslySetInnerHTML={{ __html: lang.about.text }} />
            </article>
            <article className='home__skills'>
                <h2 className='home__skills-title'>{lang.skills.title}</h2>
                <ul className='home__skills-text'>
                    <li><h3>{lang.skills.items.languages.split(": ")[0]}:</h3> {lang.skills.items.languages.split(": ")[1]}</li>
                    <li><h3>{lang.skills.items.tools.split(": ")[0]}:</h3> {lang.skills.items.tools.split(": ")[1]}</li>
                    <li><h3>{lang.skills.items.methodologies.split(": ")[0]}:</h3> {lang.skills.items.methodologies.split(": ")[1]}</li>
                    <li><h3>{lang.skills.items.versionControl.split(": ")[0]}:</h3> {lang.skills.items.versionControl.split(": ")[1]}</li>
                    <li><h3>{lang.skills.items.others.split(": ")[0]}:</h3> {lang.skills.items.others.split(": ")[1]}</li>
                </ul>
            </article>
            <article className='home__expertise'>
                <h2 className='home__expertise-title'>{lang.expertise.title}</h2>
                <div className='home__expertise-text'>
                    {lang.expertise.experiences.map((experience, index) => (
                        <div key={index}>
                            <h3>{experience.date}</h3>
                            <p><strong>{lang.expertise.position}</strong> {experience.position}</p>
                            <p><strong>{lang.expertise.company}</strong> {experience.company}</p>
                            <p>{experience.description}</p>
                            {experience.projects && experience.projects.map((project, idx) => (
                                <React.Fragment key={idx}>
                                    <a href={project.url}>- <strong>{project.name}:</strong></a>
                                    <p>{project.description}</p>
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                </div>
            </article>
            <article className='home__more'>
                <h2 className='home__more-title'>{lang.more.title}</h2>
                <p className='home__more-text' dangerouslySetInnerHTML={{ __html: lang.more.text }} />
            </article>
        </section>
    );
};

export default Home;
