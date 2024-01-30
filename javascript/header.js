class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let isImage1Visible = true;

    function toggleImage() {
      isImage1Visible = !isImage1Visible;

      var x = document.getElementById("mobilebottom");
      if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("menuIcon").textContent = "☰"; // Hamburger Icon
      } else {
        x.style.display = "block";
        document.getElementById("menuIcon").textContent = "✖"; // Close Icon
      }
    }

    this.innerHTML = `
          <style>
          /* Navbar */

          .topblue {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            background-color: #001a04;
            color: white;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            font-weight: 300;
          }
          
          .topblue p,
          span {
            color: white;
          }
          
          .topblue a {
            color: white;
            font-weight: 500;
            text-decoration: underline;
          }
          
          .topbluespan {
            font-weight: 400;
          }
          
          .navbardesktop {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 8rem;
            margin-top: 1rem;
            margin-bottom: 0.5rem;
          }
          
          .careerco {
            display: flex;
            flex-direction: row;
            gap: 12rem;
            align-items: center;
          }
          
          .search_logo {
            position: absolute;
            padding-left: 0.5rem;
            padding-top: 0.6rem;
            margin-left: 0.5rem;
          }
          
          .search_course {
            width: 15rem;
            padding: 0.6rem;
            padding-left: 2.5rem;
            border-radius: 1rem;
            border-width: 0.5px;
            color: #e4e4e4;
            font-size: medium;
          }
          
          .navigationdesktop {
            display: flex;
            flex-direction: row;
            gap: 2rem;
            align-items: center;
          }
          
          ul {
            display: flex;
            text-decoration: none;
            list-style-type: none;
            gap: 2rem;
          }
          
          li {
            font-weight: 400;
            font-size: medium;
          }
          
          li a {
            text-decoration: none;
            color: #001a04;
          }
          
          .join {
            border-radius: 20px;
            border: none;
            background-color: #39b54a;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .join a {
            color: #fff;
            text-align: center;
            font-weight: 600;
            font-size: medium;
            font-weight: 300;
          }
          
          .navbarpostajob {
            border: none;
            border-radius: 8.876px;
            background: #0374e4;
            padding: 6px;
          }
          
          .navbarpostajob a {
            text-decoration: none;
            color: #fff;
            white-space: nowrap;
            text-align: center;
            font-weight: 600;
            font-size: medium;
          }
          
          .navbarmobile {
            display: none;
          }
          
          @media screen and (max-width: 768px) {
            .topblue {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: 1rem;
              background-color: #001a04;
              color: white;
              padding-top: 1rem;
              padding-bottom: 1rem;
              padding-left: 1rem;
              padding-right: 1rem;
              font-weight: 300;
              font-size: medium;
            }
          
            .circle {
              width: 10%;
            }
          
            .navbardesktop {
              display: none;
            }
          
            .mobile_logo {
              width: 6rem;
            }
          
            .navbarmobile {
              display: block;
              display: flex;
              flex-direction: column;
              margin-top: 1rem;
            }
          
            .mobiletop {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: 16rem;
              margin-top: 0.5rem;
            }
          
            .mobilebottom {
              display: none;
            }
          
            .navmenu {
              display: flex;
              flex-direction: column;
              margin-bottom: 2rem;
              margin-left: 1rem;
            }
          
            .mobile-btn-cnt {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: 3rem;
              margin-bottom: 3rem;
              margin-top: 2rem;
            }
          
            .NavBar-SignInbtn {
              border-radius: 9px;
              border: 1px solid #0374e4;
              background-color: #fff;
              padding: 6px;
              height: 2rem;
              width: 8rem;
            }
          
            .NavBar-SignInbtn a {
              color: #000;
              text-align: center;
              font-weight: 600;
              font-size: medium;
            }
          
            .NavBar-SignUpbtn {
              background-color: #0374e4;
              border-radius: 5px;
              border: none;
              text-decoration: none;
              color: white;
              cursor: pointer;
              height: 2rem;
              width: 8rem;
              text-align: center;
            }
          
            .NavBar-SignUpbtn a {
              text-decoration: none;
              color: #fff;
              white-space: nowrap;
              text-align: center;
              font-weight: 600;
              font-size: medium;
            }
          
            .mobnavigations {
              display: flex;
              flex-direction: row;
              gap: 0.8rem;
              align-items: center;
              margin-left: 1.1rem;
            }
          }
          </style>
          <header>
          <!-- navigation -->
          <div>
              <div class="topblue">
                  <img src="images/circle.png" width="3%" height="3%" class="circle" />
                  <p>
                      Discover your career path here
                      <span class="topbluespan"><a href="http://quiz.careerco.ca/" target="blank">Take a Quiz</a></span>
                  </p>
              </div>
              <div>
                  <div>
                      <div class="navbardesktop">
                          <div class="careerco">
                              <Link to="/">
                              <img src="images/careercologo.png" />
                              </Link>
                              <div>
                                  <img src="/images/search.svg" class="search_logo" />
                                  <input class="search_course" type="text" placeholder="search courses" />
                              </div>
                          </div>
                          <nav class="navigationdesktop">
                              <div>
                                  <ul class="navbar_menu_desktop">
                                      <li>
                                          <Link to="/">Home</Link>
                                      </li>
                                      <li>
                                          <Link to="/courses">Courses</Link>
                                      </li>
                                      <li>
                                          <Link to="/aboutme">About me</Link>
                                      </li>
                                      <li>
                                          <Link to="/contactus">Contact us</Link>
                                      </li>
                                  </ul>
                              </div>
      
                              <div class="">
                                  <button class="join">
                                      <a target="blank"
                                          to="https://www.eventbrite.ca/e/it-consulting-intro-to-business-analysisproject-mgtscrum-masterqadata-tickets-674367289717">
                                      Join a webinar</a>
                                  </button>
                              </div>
                          </nav>
                      </div>
      
                      <div class="navbarmobile">
                          <div class="mobiletop">
                              <Link to="/Hero">
                              <img src="images/careercologo.png" class="mobile_logo" />
                              </Link>
                              <!-- <div onClick={toggleImage} class="">
                                  {isImage1Visible ?
                                  <GiHamburgerMenu /> :
                                  <GrClose />}
                              </div> -->
                              <div onclick="toggleImage()" class="">
                                  <!-- <span id="menuIcon">&#9776;</span>  -->
                                  <img id="menuIcon" src="images/hamburger.png"/>
                              </div>
                          </div>
      
                          <div class="mobilebottom" id="mobilebottom">
                              <div class="mobile-btn-cnt">
                                  <button class="join">
                                      <Link to="/join">Join for free</Link>
                                  </button>
                              </div>
      
                              <ul class="navmenu">
                                  <li class="mobnavigations">
                                      <Link to="/">Home</Link>
                                  </li>
                                  <li class="mobnavigations">
                                      <Link to="/courses">Courses</Link>
                                  </li>
                                  <li class="mobnavigations">
                                      <Link to="/aboutme">About me</Link>
                                  </li>
                                  <li class="mobnavigations">
                                      <Link to="/contactus">Contact us</Link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      
      
          </header>
        `;
  }
}

customElements.define("header-component", Header);
