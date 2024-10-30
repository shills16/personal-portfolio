function App() {
  return (
  <>
    {/*===== HEADER =====*/}
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          {/* &#60;&#62; */}
          <a href="#home" className="nav-logo">
            <img src="./assets/img/h.png" height="70px" alt="H" />
          </a>
        </div>
        <div className="nav-menu" id="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link home active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume" className="nav-link resume">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="#" onclick="myFunction()">
                {" "}
                <img
                  src="./assets/img/sumoon.png"
                  alt=""
                  height="20px"
                  width="20px"
                  style={{ backgroundColor: "transparent" }}
                />{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-toggle" id="nav-toggle">
          <i className="bx bx-menu" />
        </div>
      </nav>
    </header>
    <main className="l-main">
      {/*===== HOME =====*/}
      <section className="home bd-grid section" id="home">
        <div className="home-data">
          <h2 className="home-title">
            Hi! 👋
            <br />
            I'm <span className="home-title-color">Shiela Mae Miclat</span>
            <br />
            <span id="jobTitle">Web Developer</span>
          </h2>
          <p className="description">
            Welcome to my web developer portfolio! I'm Shiela, a skilled and creative <br />
            web developer with a passion for creating beautiful, responsive, and <br />
            user-friendly websites.
          </p>
          <a href="#" className="button">Hire Me</a> <span>
          <a href="CV.pdf" download className="button">Download <span className="u-bolder">CV</span></a> </span>
        </div>
        <div className="home-social">
          <a
            href="https://www.facebook.com/ShillsMiclat16"
            target="_blank"
            className="home-social-icon"
          >
            <i className="bx bxl-facebook" />
          </a>
          <a
            href="https://www.instagram.com/flwr__1/"
            target="_blank"
            className="home-social-icon"
          >
            <i className="bx bxl-instagram" />
          </a>
          <a
            href="https://discord.com/invite/vhrdWbdT"
            target="_blank"
            className="home-social-icon"
          >
            <i className="bx bxl-discord" />
          </a>
          <a
            href="https://github.com/shills16"
            target="_blank"
            className="home-social-icon"
          >
            <i className="bx bxl-github" />
          </a>
        </div>
        <div className="home-img">
          <img src="assets/img/girl.png" alt="" />
        </div>
      </section>

      <section className="ftco-counter img bg-light" id="section-counter">
        <div className="about-container">
          <div className="row">
            <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
              <div className="block-18 d-flex">
                <div className="text">
                  <strong className="number">
                    5
                  </strong>
                  <span>Project Complete</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
              <div className="block-18 d-flex">
                <div className="text">
                  <strong className="number">
                    5   
                  </strong>
                  <span>Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
              <div className="block-18 d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                </div>
                <div className="text">
                  <strong className="number">
                    100
                  </strong>
                  <span>Cups of coffee</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
              <div className="block-18 d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-calendar" />
                </div>
                <div className="text">
                  <strong className="number">
                    3
                  </strong>
                  <span>Years experienced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*===== ABOUT =====*/}
      <section className="ftco-about img ftco-section ftco-no-pb" id="about">
          <h2 className="section-title">About Me</h2>
          <div className="container">
            <div className="row d-flex">
              <div className="col-md-6 col-lg-5 d-flex">
                <div className="img-about img d-flex align-items-stretch">
                  <div className="overlay"></div>
                  <div className="img d-flex align-self-stretch align-items-center" style={{ backgroundImage: "url(assets/img/profile_1.png)" }}>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
                <div className="row justify-content-start pb-3">
                  <div className="col-md-12 heading-section ftco-animate">
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <ul className="about-info mt-4 px-md-0 px-2">
                      <li className="d-flex"><span>Name:</span> <span>Shiela Mae Miclat</span></li>
                      <li className="d-flex"><span>Date of birth:</span> <span>October 16, 2003</span></li>
                      <li className="d-flex"><span>Address:</span> <span>Macabebe, Pampanga, PH</span></li>
                      <li className="d-flex"><span>Zip code:</span> <span>2018</span></li>
                      <li className="d-flex"><span>Email:</span> <span>shielamiclat10@gmail.com</span></li>
                      <li className="d-flex"><span>Phone: </span> <span>+63-9360-472-352</span></li>
                    </ul>
                    <div className="col-md-12">
                      <div className="my-interest d-lg-flex w-100">
                        <div className="interest-wrap d-flex align-items-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="flaticon-listening" />
                          </div>
                          <div className="text">Music</div>
                        </div>
                        <div className="interest-wrap d-flex align-items-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="flaticon-suitcases" />
                          </div>
                          <div className="text">Reading</div>
                        </div>
                        <div className="interest-wrap d-flex align-items-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="flaticon-video-player" />
                          </div>
                          <div className="text">Movie</div>
                        </div>
                        <div className="interest-wrap d-flex align-items-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="flaticon-video-player" />
                          </div>
                          <div className="text">Puzzles</div>
                        </div>
                        <div className="interest-wrap d-flex align-items-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="flaticon-football" />
                          </div>
                          <div className="text">Sports</div>
                        </div>
                      </div>
                    </div>
                    <div className="counter-wrap ftco-animate d-flex mt-md-3">
                      <div className="text">
                        <p><a href="CV.pdf" download className="button">Download <span className="u-bolder">CV</span></a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/*-========Education ======-*/}
      <section className="education section" id="education">
        <h2 className="section-title">Educational Achievements</h2>
        <div className="education-container bd-grid">
          <div className="education-data">
            <div className="education-names">
              <span className="education-name">Gold Medalist</span>
              <p className="education-platform ">La Verdad Christian College</p>
              <p className="education-duration ">Associate in Computer Technology</p>
              <p className="education-duration ">2022-2024</p>
            </div>
          </div>
        </div>
        <div className="education-container bd-grid">
          <div className="education-data">
            <div className="education-names">
              <span className="education-name">With Honors</span>
              <p className="education-platform "> 
                San Vicent-San Francisco High School
              </p>
              <p className="education-duration ">Senior High (GAS-HUMSS)</p>
              <p className="education-duration ">2020-2022</p>
            </div>
          </div>
        </div>
        <div className="education-container bd-grid">
          <div className="education-data">
            <div className="education-names">
              <span className="education-name">With Honors</span>
              <p className="education-platform "> 
                San Vicent-San Francisco High School
              </p>
              <p className="education-duration ">Junior High</p>
              <p className="education-duration ">2016-2020</p>
            </div>
          </div>
        </div>
        <div className="education-container bd-grid">
          <div className="education-data">
            <div className="education-names">
              <span className="education-name">Honorable Mention</span>
              <p className="education-platform "> 
                Batasan Elementary School
              </p>
              <p className="education-duration ">Elementary</p>
              <p className="education-duration ">2009-2016</p>
            </div>
          </div>
        </div>
      </section>
      
      {/*===== SKILLS =====*/}
      <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container bd-grid">
            <div>
              <h2 className="skills-subtitle">Front-end Skills</h2>
              <div className="skills-data">
                <div className="skills-names">
                  <img
                    className="skills-icon"
                    src="./assets/img/html.png"
                    alt=""
                  />
                  <span className="skills-name">HTML</span>
                </div>
                <div className="skills-bar skills-html"></div> 
                <div>
                  <span className="skills-percentage">90%</span>
                </div> 
              </div>
              <div className="skills-data">
                <div className="skills-names">
                  <img
                    className="skills-icon"
                    src="./assets/img/css.png"
                    alt=""
                  />
                  <span className="skills-name">CSS</span>
                </div>
                <div className="skills-bar skills-css"></div> 
                <div>
                  <span className="skills-percentage">90%</span>
                </div> 
              </div>
              <div className="skills-data">
                <div className="skills-names">
                  <img
                    className="skills-icon"
                    src="./assets/img/java.png"
                    alt=""
                  />
                  <span className="skills-name">Java</span>
                </div>
                  <div className="skills-bar skills-java"></div>
                <div>
                  <span className="skills-percentage">75%</span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-names">
                  <img
                    className="skills-icon"
                    src="./assets/img/js.png"
                    alt=""
                  />
                  <span className="skills-name">JavaScript</span>
                </div>
                <div className="skills-bar skills-js"></div> 
                <div>
                  <span className="skills-percentage">35%</span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-names">
                  <img
                    className="skills-icon"
                    src="./assets/img/php.png"
                    alt=""
                  />
                  <span className="skills-name">PHP</span>
                </div>
                <div className="skills-bar skills-php"></div> 
                <div>
                  <span className="skills-percentage">35%</span>
                 </div>
              </div>
              <div className="skills-data">
                <div className="skills-names">
                  <img
                    className="skills-icon"
                    src="./assets/img/react.png"
                    alt=""
                  />
                  <span className="skills-name">React</span>
                </div>
                <div className="skills-bar skills-react"></div>
                <div>
                  <span className="skills-percentage">60%</span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-names">
                  <img
                    className="skills-icon"
                    src="./assets/img/vite.svg"
                    alt=""
                  />
                  <span className="skills-name">Vite</span>
                </div>
                <div className="skills-bar skills-vite"></div>
                <div>
                  <span className="skills-percentage">60%</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="skills-subtitle">Back-end Skills</h2>
              <div className="skills-data">
                <div className="skills-names">
                <img
                    className="skills-icon"
                    src="./assets/img/nodejs.png"
                    alt=""
                  />
                  <span className="skills-name">Node.js</span>
                </div>
                <div className="skills-bar skills-node"></div>
                <div>
                  <span className="skills-percentage">10%</span>
                </div>
              </div>
              <div>
              <div className="skills-data">
                  <div className="skills-names">
                    <img
                      className="skills-icon"
                      src="./assets/img/sql.png"
                      alt=""
                    />
                  <div className="skills-bar skills-sql"></div>
                    <span className="skills-name">SQL</span>
                  </div>
                  <div>
                    <span className="skills-percentage">70%</span>
                  </div>
                </div>
                <h2 className="skills-subtitle">TOOLS</h2>
                <div className="skills-data">
                  <div className="skills-names">
                    <img
                      className="skills-icon"
                      src="./assets/img/github.svg"
                      alt=""
                    />
                    <span className="skills-name">Github</span>
                  </div>
                </div>
                <div className="skills-data">
                  <div className="skills-names">
                    <img
                      className="skills-icon"
                      src="./assets/img/gitlab.png"
                      alt=""
                    />
                    <span className="skills-name">Gitlab</span>
                  </div>
                </div>
                <div className="skills-data">
                  <div className="skills-names">
                    <img
                      className="skills-icon"
                      src="./assets/img/git.png"
                      alt=""
                    />
                    <span className="skills-name">Git</span>
                  </div>
                </div>
                <div className="skills-data">
                  <div className="skills-names">
                    <img
                      className="skills-icon"
                      src="./assets/img/dsa.png"
                      alt=""
                    />
                    <span className="skills-name">
                      Data Structures and Algorithms
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/*===== Projects =====*/}
      <section className="projects section" id="projects">
          <h2 className="section-title">Projects</h2>
          <div className="project-container">
            <div className="project-img">
              <img src="assets/img/mooncafe.jpg" alt="cult.fit" />
              <p className="project-title">Moon Cafe Website</p>
              <p className="project-subtitle">
                A website of a coffe shop with clear navigation, allowing visitors to 
                find important details, such as opening hours and the café’s menu, with ease. <br />
                <br />
                A collaborative project, built in 4 days by a team of 4 developers
                . <br />
                <br />
                HTML | CSS 
              </p>
            </div>

            <div className="project-img">
              <img src="assets/img/happyfurr.png" alt="Reddit.com" />
              <p className="project-title">Online Pet Shop</p>
              <p className="project-subtitle">
                Happy Furr is a prototype online shopping app for pets.
                <br />
                <br />
                A collaborative project built by a team of 3, executed in 7 days.
                <br />
                <br /> Figma  
              </p>
              <a
                href="https://www.figma.com/design/7yvwrGlG3SsAfZE5uxurE7/Happy-Furr?m=auto&t=BGOPt7bJ10PV3J60-6"
                target="_blank"
                className="home-social-icon">
                <i className="bx bxl-figma" />
              </a>
            </div>

            <div className="project-img">
              <img src="assets/img/personalm4.png" alt="cult.fit" />
              <p className="project-title">Personal Portfolio</p>
              <p className="project-subtitle">
                A portfolio web application.
                <br />
                <br />
                It is Individual Project build by Me. . <br />
                <br />
                HTML | CSS 
              </p>
              <a
                href="https://github.com/shills16/webapp1-portfolio-project.git"
                target="_blank"
                className="home-social-icon">
                <i className="bx bxl-github" />
              </a>
            </div>

            <div className="project-img">
              <img src="assets/img/portfolio.png" alt="cult.fit" />
              <p className="project-title">Personal Portfolio</p>
              <p className="project-subtitle">
                A personal portfolio web application.
                <br />
                <br />
                It is Individual Project build by Me. . <br />
                <br />
                HTML | CSS | DOM | ReactJS
              </p>
              <a
                href="https://github.com/shills16/personal-portfolio.git"
                target="_blank"
                className="home-social-icon">
                <i className="bx bxl-github" />
              </a>
            </div>

            <div className="project-img">
              <img src="assets/img/website.png" alt="website.com" />
              <p className="project-title">A Website</p>
              <p className="project-subtitle">
                A website that requires you to login to access some posts from JSONPlaceholder.
                <br />
                <br />
                It is Individual Project build by Me.
                <br />
                <br />
                HTML | CSS | JS | React 
              </p>
              <a
                href="https://github.com/shills16/webapp2-midterm-project.git"
                target="_blank"
                className="home-social-icon">
                <i className="bx bxl-github" />
              </a>
            </div>
          </div>
      </section>

      {/*===== RESUME ===== */}
      <i className="bx bxl-map" />

      <section className="resume section" id="resume">
          <h2 className="section-title">Resume</h2>
          <div className="container">
            <div className="row justify-content-center pb-5">
              <div className="col-md-10 heading-section text-center ftco-animate">
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="resume-wrap ftco-animate">
                  <span className="date">2024-Present</span>
                  <h2>BS in Information Systems</h2>
                  <span className="position">La Verdad Christian College</span>
                  <p className="mt-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
                <div className="resume-wrap ftco-animate">
                  <span className="date">2016-2022</span>
                  <h2>High School</h2>
                  <span className="position">San Vicente-San Francisco HS</span>
                  <p className="mt-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="resume-wrap ftco-animate">
                  <span className="date">2022-2024</span>
                  <h2>Associate in Computer Technology </h2>
                  <span className="position">La Verdad Christian College</span>
                  <p className="mt-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
                <div className="resume-wrap ftco-animate">
                  <span className="date">2009-2016</span>
                  <h2>Elementary School</h2>
                  <span className="position">Batasan Elementary School</span>
                  <p className="mt-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-md-6 text-center ftco-animate">
              <a href="CV.pdf" download className="button">Download <span className="u-bolder">CV</span></a>
              </div>
            </div>
          </div>
      </section>
        
      {/*===== CONTACT =====*/}
      <section className="ftco-section contact-section ftco-no-pb" id="contact">
        <h2 className="section-title">Contact Me</h2>
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h2 className="mb-4">Have a Project?</h2>
            </div>
          </div>

          <div className="row block-9">
            <div className="col-md-8">
              <form action="#" className="bg-light p-4 p-md-5 contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                  </div>
          
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Your Email" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                    </div>
                  </div>
                </div>
              </form> 
            </div>

            <div className="col-md-4 d-flex pl-md-5">
              <div className="row">
                <div className="dbox w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-map-marker"></span>
                  </div>
                  <div className="text">
                    <p><span>Address:</span> Macabebe, Pampanga, PH</p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-phone"></span>
                  </div>
                  <div className="text">
                    <p><span>Phone:</span> <a href="tel://1234567920">+63-936-0472-352</a></p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-paper-plane"></span>
                  </div>
                  <div className="text">
                    <p><span>Email:</span> <a href="mailto:info@yoursite.com">shielamiclat10@gmail.com</a></p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-globe"></span>
                  </div>
                  <div className="text">
                    <p><span>Website</span> <a href="#">yoursite.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
    {/*===== FOOTER =====*/}
    <footer className="ftco-footer ftco-section">
		  <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Lets talk about</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <p><a href="#" className="btn btn-primary">Learn more</a></p>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span> Home</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span> About</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span> Skills</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span> Projects</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span> Resume</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span> Contact</a></li>

              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="icon fa fa-map marker"></span><span className="text">Macabebe, Pampanga, PH</span></li>
                  <li><a href="#"><span className="icon fa fa-phone"></span><span className="text">+63-936-0472-352</span></a></li>
                  <li><a href="#"><span className="icon fa fa-paper-plane pr-4"></span><span className="text">shielamiclat10@gmail.com</span></a></li>
                </ul>
              </div>
              <ul className="ftco-footer-social list-unstyled mt-2">
                <li className="ftco-animate"><a href="#"><span className="fa fa-github"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="fa fa-facebook"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="fa fa-instagram"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
			  <div className="row">
				  <div className="col-md-12 text-center">
					  <p>Copyright &copy; 2024 All rights reserved</p>
				  </div>
				</div>
			</div>
		</footer>
  </>

  )
}

export default App