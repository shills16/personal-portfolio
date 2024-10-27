function App() {
  return (
    <>
      {/*===== HEADER =====*/}
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            {/* &#60;&#62; */}
            <a href="#home" className="nav-logo"><img src="./assets/img/h.png" height="70px" alt="H" /></a>
          </div>

          <div className="nav-menu" id="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className="nav-link home active">Home</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link about">About</a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link skills">Skills</a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link projects">Projects</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link contact">Contact</a>
              </li>
              <li className="nav-item">
              <a href = "#" onclick="myFunction()"> <img src="./assets/img/sumoon.png" alt="" height="20px" width="20px" style={{ backgroundColor: "transparent" }} /> </a>
              </li>
            </ul>
          </div>

          <div className="nav-toggle" id="nav-toggle">
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>

      <main className="l-main">
        {/*===== HOME =====*/}
        <section className="home bd-grid section" id="home">
          <div className="home-data">
            <h2 className="home-title">
              Hi 👋,<br />I'am <span className="home-title-color">Tushar Sahu</span><br />
            <span id="jobTitle" >MERN Developer</span> 
            </h2>

            <a href="https://drive.google.com/file/d/1H08bwDDtPX0422uX1svMEH1xnSEEX1Zt/view?usp=sharing" target="_blank"
              className="button">Resume</a>

          </div>

          <div className="home-social">
            <a href="https://www.linkedin.com/in/tushar-sahu-3b9a79204/" target="_blank" className="home-social-icon"><i
                className="bx bxl-linkedin"></i></a>
            <a href="https://github.com/tusharsahu2599" target="_blank" className="home-social-icon"><i
                className="bx bxl-github"></i></a>
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
              <h2 className="about-subtitle">I'am Tushar Sahu</h2>
              <p className="about-text">
                Quick learner and an aspiring full-stack web developer with core
                knowledge of MERN stack technology. Looking forward to applying
                and enhancing my skills and knowledge as a developer.
              </p>
              <br />
              
              <p>
                Drop a mail tksahu1234@gmail.com
                <i style={{ color: "#4070f4; font-size: 1.2rem; cursor: pointer" }} className="bx bx-copy" id="copy"></i>
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
                {/* <i className="bx bxl-html5 skills-icon"></i> */}
                <span className="education-name">Full Stack Web Development</span> 
                <p className="education-platform ">Masai School</p>
                <p className="education-duration ">October 2021 - Present</p>
              </div>
            </div>
          </div>
          <div className="education-container bd-grid">
            <div className="education-data">
              <div className="education-names">
                {/* <i className="bx bxl-html5 skills-icon"></i> */}
                <span className="education-name">B.Tech(IT)</span>
                <p className="education-platform ">Chhatrapati Shivaji Institute of Technology, Durg</p>
                <p className="education-duration ">August 2016 - May 2020</p>
              </div>
            </div>
          </div>
        </section>

        {/*===== SKILLS =====*/}
        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container bd-grid">
            <div>
              {/* <h2 className="skills-subtitle">Front-end Skills</h2> */}
              <div className="skills-data">
                <div className="skills-names">
                  <i className="bx bxl-html5 skills-icon"></i>
                  <span className="skills-name">HTML</span>
                </div>
                {/* <div className="skills-bar skills-html"></div> 
                <div>
                    <span className="skills-percentage">75%</span>
                  </div>  */}
              </div>
              <div className="skills-data">
                <div className="skills-names">
                  <i className="bx bxl-css3 skills-icon"></i>
                  <span className="skills-name">CSS</span>
                </div>
                {/* <div className="skills-bar skills-css"></div>  */}
                {/* <div>
                    <span className="skills-percentage">70%</span>
                  </div>  */}
              </div>
              <div className="skills-data">
                <div className="skills-names">
                  <i className="bx bxl-javascript skills-icon"></i>
                  <span className="skills-name">JavaScript</span>
                </div>
                {/* <div className="skills-bar skills-css"></div>  */}
                <div>
                  {/* <span className="skills-percentage">70%</span> */}
                </div> 
              </div>
              <div className="skills-data">
                <div className="skills-names">
                  <i className="bx bxl-react skills-icon"></i>
                  <span className="skills-name">React</span>
                </div>
                {/* <div className="skills-bar skills-react"></div> */}
                <div>
                  {/* <span className="skills-percentage">50%</span> */}
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-names">
                  <i className="bx bxl-redux skills-icon"></i>
                  <span className="skills-name">Redux</span>
                </div>
                {/* <div className="skills-bar skills-redux"></div>  */}
                {/* <div className="skills-bar skills-css"></div>  */}
                <div>
                  {/* <span className="skills-percentage">50%</span> */}
                </div> 
              </div>

              <div className="skills-data">
                <div className="skills-names">
                  <img className="skills-icon" src="./assets/img/typescript.png" alt="" />
                  <span className="skills-name">TypeScript</span>
                </div>
              </div>
              <div>
                {/* <h2 className="skills-subtitle">Back-end Skills</h2> */}
                <div className="skills-data">
                  <div className="skills-names">
                    <img className="skills-icon" src="./assets/img/express.png" alt="" />
                    <span className="skills-name">Express.js</span>
                  </div>
                  {/* <div className="skills-bar skills-css"></div>  */}
                  <div>
                    {/* <span className="skills-percentage">70%</span> */}
                  </div> 
                </div>
                <div className="skills-data">
                  <div className="skills-names">
                    <i className="bx bxl-nodejs skills-icon"></i>
                    <span className="skills-name">Node.js</span>
                  </div>
                  {/* <div className="skills-bar skills-css"></div> */}
                  <div>
                    {/* <span className="skills-percentage">70%</span> */}
                  </div> 
                </div>
                <div className="skills-data">
                  <div className="skills-names">
                    <img className="skills-icon" src="./assets/img/mongodb.png" alt="" />
                    <span className="skills-name">MongoDB</span>
                  </div>
                  {/* <div className="skills-bar skills-css"></div>  */}
                  <div>
                    {/* <span className="skills-percentage">70%</span> */}
                  </div> 
                </div>
                <div>
                  {/* <h2 className="skills-subtitle">TOOLS</h2> */} 
                  <div className="skills-data">
                    <div className="skills-names">
                      <img className="skills-icon" src="./assets/img/github.svg" alt="" />
                      <span className="skills-name">Github</span>
                    </div>
                  </div>
                  <div className="skills-data">
                    <div className="skills-names">
                      <img className="skills-icon" src="./assets/img/git.png" alt="" />
                      <span className="skills-name">Git</span>
                    </div>
                  </div>
                  <div className="skills-data">
                    <div className="skills-names">
                      <img className="skills-icon" src="./assets/img/dsa.png" alt="" />
                      <span className="skills-name">Data Structures and Algorithms</span>
                    </div>
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
              <img src="assets/img/01.png" alt="cult.fit" />
              <p className="project-title">MedPlusMart.com clone</p>
              <p className="project-subtitle">
                A web application to buy medicines online by uploading the prescriptions.
                Features:
                User authentication
                Prescription upload feature. <br />
                <br />
                A collaborative project, built in 4 days by a team of 6 developers
                . <br />
                <br />HTML | CSS | DOM
              </p>
              <div className="project-btns">
                <a href="https://github.com/tusharsahu2599/medplus" target="_blank" className="small-btn button">
                  <i className="bx bxl-github"></i>
                </a>
                <a href="https://tusharsahu2599.github.io/medplus/homepage" target="_blank" className="small-btn button">
                  Live
                  {/* <i className="bx bx-link-external"></i> */}
                </a>
                {/* <a href="https://medium.com/@hgauba4/how-did-our-team-build-the-mednear-clone-241227129f79" target="_blank"
                  className="small-btn button">
                  Blog
                  <i className="bx bx-blog"></i>
                </a> */}
              </div>
            </div>

            <div className="project-img">
              <img src="assets/img/epic.png" alt="Reddit.com" />
              <p className="project-title">Epicgames.com clone</p>
              <p className="project-subtitle">
                Epic Games, Inc. is an American video game and publisher website. <br />
                <br />
                A collaborative project built by a team of 6, executed in 5 days.
                <br />
                <br /> HTML | CSS | Javascript | Node | Express | MongoDB
              </p>
              <div className="project-btns">
                <a href="https://github.com/salakhas/epicGames" target="_blank" className="small-btn button">
                  <i className="bx bxl-github"></i>
                </a>
                <a href="https://epic-games-web.vercel.app/" target="_blank" className="small-btn button">
                  Live
                  {/* <i className="bx bx-link-external"></i> */}
                </a>
                <a href="https://medium.com/@ssalakha16/building-a-clone-of-epic-games-7f3c5b4ab59c" target="_blank"
                  className="small-btn button">
                  Blog
                  <i className="bx bx-blog"></i>
                </a>
              </div>
            </div>

            <div className="project-img">
              <img src="assets/img/youtube.PNG" alt="cult.fit" />
              <p className="project-title">Youtube clone</p>
              <p className="project-subtitle">
                A web application which is just cpoy of Youtube.
                <br />
                <br />
                It is Individual Project build by Me.
                . <br />
                <br />HTML | CSS | DOM
              </p>
              <div className="project-btns">
                <a href="https://github.com/tusharsahu2599/Youtube-mini-clone" target="_blank" className="small-btn button">
                  <i className="bx bxl-github"></i>
                </a>
                
                {/* <a href="https://tusharsahu2599.github.io/medplus/homepage" target="_blank" className="small-btn button">
                  Live
                  <i className="bx bx-link-external"></i>
                </a>
                <a href="https://medium.com/@hgauba4/how-did-our-team-build-the-mednear-clone-241227129f79" target="_blank"
                  className="small-btn button">
                  Blog
                  <i className="bx bx-blog"></i>
                </a> */}
              </div>
            </div>
            
            <div className="project-img">
              <img src="assets/img/portfolio.PNG" alt="cult.fit" />
              <p className="project-title">Portfolio</p>
              <p className="project-subtitle">
                A portfolio web application.
                <br />
                <br />
                It is Individual Project build by Me.
                . <br />
                <br />HTML | CSS | DOM
              </p>
              <div className="project-btns">
                <a href="https://github.com/tusharsahu2599/portfolio" target="_blank" className="small-btn button">
                  <i className="bx bxl-github"></i>
                </a>
                {/* <a href="" target="_blank" className="small-btn button">
                  Live
                  <i className="bx bx-link-external"></i>
                </a> */}
                {/* --
                <a href="https://medium.com/@hgauba4/how-did-our-team-build-the-mednear-clone-241227129f79" target="_blank"
                  className="small-btn button">
                  Blog
                  <i className="bx bx-blog"></i>
                </a> */}
              </div>
            </div>

            <div className="project-img">
              <img src="assets/img/swiggy.jpg" alt="Swiggy.com" />
              <p className="project-title">Swiggy clone</p>
              <p className="project-subtitle">
                Swiggy is food ordering and delivery service provider in all over india from your nearest Hotels.
                <br />
                <br />
                A collaborative project built by a team of 4, executed in 4 days.
                <br />
                <br />
                React | Redux | Node | Express | MongoDB
              </p>
              <div className="project-btns">
                <a href="https://github.com/h1t3ndr4/Swiggy-Clone" target="_blank"
                  className="small-btn button">
                  Code<i className="bx bxl-github"></i>
                </a>
                <a href="https://swiggy-bwjc9njal-premkumar-hulikoppe.vercel.app/" target="_blank" className="small-btn button">
                  Live<i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>

            <div className="project-img">
              <img src="assets/img/Tinde-chat.png" alt="Tinde chat" />
              <p className="project-title">
                Tinde Chat
              </p>
              <p className="project-subtitle">
                Tinde Chat, it's chat application you can connect and chat with others.
                <br />
                <br />
                A collaborative project built by a team of 3, executed in 3 days.
                <br />
                <br />
              React | Redux | Node | Express | MongoDB
              </p>
              <div className="project-btns">
                <a href="https://github.com/tusharsahu2599/Tinde_Chatter"
                  target="_blank" className="small-btn button">
                  Code<i className="bx bxl-github"></i>
                </a>
                <a href="https://mern-tinde-chater.herokuapp.com/" target="_blank" className="small-btn button">
                  Live<i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>

            <div className="project-img">
              <img src="assets/img/Redux-shop.PNG" alt="shop app" />
              <p className="project-title">
                Shopping App
              </p>
              <p className="project-subtitle">
                It's two Page Shopping app using React Redux.
                <br />
                <br />
                Its Individual project built by me.
                <br />
                <br />
              React | Redux | Rest API
              </p>
              <div className="project-btns">
                <a href="https://github.com/tusharsahu2599/Redux-app"
                  target="_blank" className="small-btn button">
                  Code<i className="bx bxl-github"></i>
                </a>
                <a href="https://react-redux-routing.vercel.app/" target="_blank" className="small-btn button">
                  Live<i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>
          </div>
      </section>
    </main>

    {/*===== FOOTER + CONTACT=====*/}
      
    <footer className="footer section" id="contact">
      <h2 className="section-title">Get in Touch</h2>
      <p className="footer-title">Tushar Sahu</p>
      <div className="footer-social">
        <a href="https://www.linkedin.com/in/tushar-sahu-3b9a79204/" target="_blank" className="footer-icon">
          <i className="bx bxl-linkedin">
            <br />
             LinkedIn
          </i>
        </a>
        <a href="https://twitter.com/Tushars2526" target="_blank" className="footer-icon"><i className="bx bxl-twitter">
            <br />
              Twitter</i></a>
          <a href="mailto:tksahu1234@gmail.com" target="_blank" className="footer-icon"><i className="bx bx-mail-send">
              <br />
              E-mail</i></a>
          <a href="tel:+91 8839819475" target="_blank" className="footer-icon"><i className="bx bx-phone">
              <br />
              Phone</i></a>
          <a href="https://github.com/tusharsahu2599" target="_blank" className="footer-icon"><i
                className="bx bxl-github">
              <br />
              GitHub
              </i></a>
        </div>
        <p>&#169; 2020 copyright all right reserved</p>
      </footer>
    </>
  )
}

export default App
