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
  
            <a href="CV.pdf" download className="button">Download <span className="u-bolder">CV</span></a>
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
            <img src="assets/img/profile.gif" alt="" />
          </div>
        </section>
  
        {/*===== ABOUT =====*/}
        <section className="about section" id="about">
          <h2 className="section-title">About</h2>
          <div className="about-container bd-grid">
            <div className="about-img">
              <img src="assets/img/profile_1.jpeg" alt="" />
            </div>
            <div style={{ textAlign: "center" }}>
              <h2 className="about-subtitle">I'm Shiela Mae Miclat</h2>
              <p className="about-text">
                Quick learner and an aspiring full-stack web developer. Looking forward to applying and
                enhancing my skills and knowledge as a developer. 
              </p>
              <br />
              <p>
                Drop a mail shielamiclat10@gmail.com
                <i
                  style={{
                    color: "#4070f4",
                    fontSize: "1.2rem",
                    cursor: "pointer"
                  }}
                  className="bx bx-copy"
                  id="copy"
                />
              </p>
            </div>
          </div>
        </section>
        {/*-========Education ======-*/}
        <section className="education section" id="education">
          <h2 className="section-title">Education</h2>
          <div className="education-container bd-grid">
            <div className="education-data">
              <div className="education-names">
                {/* <i class="bx bxl-html5 skills-icon"></i> */}
                <span className="education-name">Full Stack Web Development</span>
                <p className="education-platform ">Masai School</p>
                <p className="education-duration ">October 2021 - Present</p>
              </div>
            </div>
          </div>
          <div className="education-container bd-grid">
            <div className="education-data">
              <div className="education-names">
                {/* <i class="bx bxl-html5 skills-icon"></i> */}
                <span className="education-name">B.Tech(IT)</span>
                <p className="education-platform ">
                  Chhatrapati Shivaji Institute of Technology, Durg
                </p>
                <p className="education-duration ">August 2016 - May 2020</p>
              </div>
            </div>
          </div>
          {/*===== SKILLS =====*/}
          <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills-container bd-grid">
              <div>
                <h2 class="skills-subtitle">Front-end Skills</h2>
                <div className="skills-data">
                  <div className="skills-names">
                    <img
                      className="skills-icon"
                      src="./assets/img/html.png"
                      alt=""
                    />
                    <span className="skills-name">HTML</span>
                  </div>
                  <div class="skills-bar skills-html"></div> 
                  <div>
                    <span class="skills-percentage">90%</span>
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
                    <div class="skills-bar skills-java"></div>
                  <div>
                    <span class="skills-percentage">75%</span>
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
                    <span class="skills-percentage">35%</span>
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
                    <span class="skills-percentage">35%</span>
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
                  <div class="skills-bar skills-react"></div>
                  <div>
                    <span class="skills-percentage">60%</span>
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
                  <div class="skills-bar skills-vite"></div>
                  <div>
                    <span class="skills-percentage">60%</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 class="skills-subtitle">Back-end Skills</h2>
                <div className="skills-data">
                  <div className="skills-names">
                  <img
                      className="skills-icon"
                      src="./assets/img/nodejs.png"
                      alt=""
                    />
                    <span className="skills-name">Node.js</span>
                  </div>
                  <div class="skills-bar skills-node"></div>
                  <div>
                    <span class="skills-percentage">10%</span>
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
                    <div class="skills-bar skills-sql"></div>
                      <span className="skills-name">SQL</span>
                    </div>
                    <div>
                      <span class="skills-percentage">70%</span>
                    </div>
                  </div>
                  <h2 class="skills-subtitle">TOOLS</h2>
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
                  A collaborative project, built in 4 days by a team of 6 developers
                  . <br />
                  <br />
                  HTML | CSS | DOM
                </p>
  
              </div>
              <div className="project-img">
                <img src="assets/img/epic.png" alt="Reddit.com" />
                <p className="project-title">Epicgames.com clone</p>
                <p className="project-subtitle">
                  Epic Games, Inc. is an American video game and publisher website.{" "}
                  <br />
                  <br />
                  A collaborative project built by a team of 6, executed in 5 days.
                  <br />
                  <br /> HTML | CSS | Javascript | Node | Express | MongoDB
                </p>
              </div>
              <div className="project-img">
                <img src="assets/img/personalm4.png" alt="cult.fit" />
                <p className="project-title">Portfolio</p>
                <p className="project-subtitle">
                  A portfolio web application.
                  <br />
                  <br />
                  It is Individual Project build by Me. . <br />
                  <br />
                  HTML | CSS | DOM
                </p>
              </div>
              <div className="project-img">
                <img src="assets/img/portfolio.png" alt="cult.fit" />
                <p className="project-title">Portfolio</p>
                <p className="project-subtitle">
                  A portfolio web application.
                  <br />
                  <br />
                  It is Individual Project build by Me. . <br />
                  <br />
                  HTML | CSS | DOM
                </p>
              </div>
              <div className="project-img">
                <img src="assets/img/swiggy.jpg" alt="Swiggy.com" />
                <p className="project-title">Swiggy clone</p>
                <p className="project-subtitle">
                  Swiggy is food ordering and delivery service provider in all over
                  india from your nearest Hotels.
                  <br />
                  <br />
                  A collaborative project built by a team of 4, executed in 4 days.
                  <br />
                  <br />
                  React | Redux | Node | Express | MongoDB
                </p>
              </div>
              <div className="project-img">
                <img src="assets/img/Tinde-chat.png" alt="Tinde chat" />
                <p className="project-title">Tinde Chat</p>
                <p className="project-subtitle">
                  Tinde Chat, it's chat application you can connect and chat with
                  others.
                  <br />
                  <br />
                  A collaborative project built by a team of 3, executed in 3 days.
                  <br />
                  <br />
                  React | Redux | Node | Express | MongoDB
                </p>
                {/* <div className="project-btns">
                  <a
                    href="https://github.com/tusharsahu2599/Tinde_Chatter"
                    target="_blank"
                    className="small-btn button"
                  >
                    Code
                    <i className="bx bxl-github" />
                  </a>
                  <a
                    href="#"
                    className="small-btn button"
                  >
                    Live
                    <i className="bx bx-link-external" />
                  </a>
                </div> */}
              </div>
              <div className="project-img">
                <img src="assets/img/Redux-shop.PNG" alt="shop app" />
                <p className="project-title">Shopping App</p>
                <p className="project-subtitle">
                  It's two Page Shopping app using React Redux.
                  <br />
                  <br />
                  Its Individual project built by me.
                  <br />
                  <br />
                  React | Redux | Rest API
                </p>
              </div>
            </div>
          </section>
          {/*===== CONTACT =====*/}
          <section className="contact section" id="contact">
            <h2 className="section-title">Contact <span>Me</span></h2>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Full Name" required /> 
                <input type="email" placeholder="Email Address" required />
              </div>
  
              <div className="input-box">
                <input type="tel" placeholder="Phone Number" required />
                <input type="text" placeholder="Email Subject" required />
              </div>
    
              <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message" required ></textarea> <br />
  
              <input type="submit" value="Send Massage" className="btn" />
            </form>
          </section>
        </section>
      </main>
      {/*===== FOOTER + CONTACT=====*/}
      <footer className="footer section" id="contact">
        <h2 className="section-title">Get in Touch</h2>
        <p className="footer-title">Shiela Mae Miclat</p>
        <div className="footer-social">
        <a 
          href="https://www.facebook.com/ShillsMiclat16" 
          target="_blank"
          className="footer-icon">
            <i className="bx bxl-facebook">
              <br />
              Facebook <br />
              Shiela Mae Miclat
            </i>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
            className="footer-icon">
            <i className="bx bx-mail-send">
              <br />
              E-mail <br />
              shielamiclat10@gmail.com
            </i>
          </a>
          <a className="footer-icon">
            <i className="bx bx-phone">
              <br />
              Phone <br />
              +63 936 0472 352
            </i>
          </a>
          <a 
            href="https://github.com/shills16"
            target="_blank"
            className="footer-icon">
            <i className="bx bxl-github">
              <br />
              GitHub <br />
              shills16(shie)
            </i>
          </a>
        </div>
        <p>© 2024 copyright all right reserved</p>
      </footer>
    </>
  
    )
  }
  
  export default App
  