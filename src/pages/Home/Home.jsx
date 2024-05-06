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
                <h2 className='home__about-title'>ABOUT</h2>
                {/* <p className='home__about-text'>
                    Je suis un développeur fullstack passionné, spécialisé dans le développement frontend UI/UX, avec une solide expérience dans la conception et la mise en œuvre d'APIs, le développement backend, ainsi que l'intégration de systèmes complexes. <br />
                    J'aime créer des solutions technologiques qui offrent une expérience utilisateur exceptionnelle. <br />
                    Je suis également compétent dans la coordination avec les équipes backend pour intégrer harmonieusement les interfaces utilisateur avec les fonctionnalités backend. <br />
                    Ma capacité à comprendre les besoins des utilisateurs et à traduire ces besoins en solutions techniques efficaces fait de moi un atout précieux pour tout projet de développement web. <br />
                    Je suis également familier avec les méthodologies Agile telles que SCRUM et KANBAN, ce qui me permet de travailler de manière collaborative et efficace.
                </p> */}
                <p className='home__about-text'>
                    I am a passionate fullstack developer, specializing in frontend UI/UX development, with a strong background in designing and implementing APIs, backend development, as well as integrating complex systems. <br />
                    I enjoy crafting technological solutions that provide exceptional user experiences. <br />
                    Additionally, I am proficient in collaborating with backend teams to seamlessly integrate user interfaces with backend functionalities. <br />
                    My ability to grasp user needs and translate them into efficient technical solutions makes me a valuable asset for any web development project. <br />
                    I am also familiar with Agile methodologies such as SCRUM and KANBAN, enabling me to work collaboratively and efficiently.
                </p>
            </article>
            <article className='home__skills'>
                <h2 className='home__skills-title'>SKILLS</h2>
                <ul className='home__skills-text'>
                    <li><h3>Languages:</h3> HTML5, CSS3, SASS, JavaScript, ReactJS, Thymeleaf, Java</li>
                    <li><h3>Tools:</h3> IntelliJ, Visual Studio Code, PSQL, MySQL, PostMan, Docker</li>
                    <li><h3>Methodologies:</h3> SCRUM, KANBAN</li>
                    <li><h3>Version Control:</h3> Git/GitHub</li>
                    <li><h3>Others:</h3> Development best practices, technology watch, naming conventions, Micro-feature work.</li>
                </ul>
            </article>
            <article className='home__expertise'>
                <h2 className='home__expertise-title'>MY LAST EXPERIENCES</h2>
                <div className='home__expertise-text'>
                    <h3>FROM 03/03/2023 TO 25/12/2023</h3>
                    <p><strong>POSITION:</strong> Fullstack Developer on assignment</p>
                    <p><strong>COMPANY:</strong> EkeepIT - Client: MATCH</p>

                    <p>I developed an API for a connected cash register, ensuring compatibility with current and future systems through the hexagonal architecture. Implemented in JAVA 11, this approach prioritized robustness, maintainability, and scalability. Additionally, I optimized the frontend  in ReactJS, enhancing performance by minimizing file size and resource usage.</p>


                    <h3>FROM 03/01/2021 TO 03/2023</h3>
                    <p><strong>POSITION:</strong> Web Developer</p>
                    <p><strong>COMPANY:</strong> EkeepIT</p>

                    <p>Taking on the role of integrator and Frontend developer in 2 incubation projects:</p>

                    <p>- <strong>My-UUU:</strong></p>
                    <p>In a team of five, I contributed as a Frontend/Integrator to a website facilitating equestrian center registration and user search based on specific criteria. I focused on UI/UX enhancements, integrating APIs in ReactJS, converting mockups into functional pages.</p>

                    <p>- <strong>My-Actividay:</strong></p>
                    <p>In a team of six, I served as a Frontend/Integrator for a web app providing CRA creation services to micro-enterprises and SMEs. I focused on UI/UX improvements, including mockup conversion to functional pages, SCSS animations, and project structuring using xHTML5 and Thymeleaf.</p>

                </div>
            </article>

            <article className='home__more'>
                <h2 className='home__more-title'>MORE ABOUT ME</h2>
                <p className='home__more-text'>I'm passionate about music as well, particularly playing the guitar. In my spare time, I'm also actively involved in creating small projects for myself and a fan website dedicated to a video game community. I have a strong appetite for learning and am constantly exploring new topics and technologies to expand my skills and knowledge.</p>
            </article>
        </section>
    );
};

export default Home;
