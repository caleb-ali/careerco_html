class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        /* Footer */

        .footer_top {
          background-color: #001a04;
          padding-top: 2rem;
          padding-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .top1 {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-left: 10%;
          margin-right: 10%;
        }
        
        .top1 h4 {
          font-weight: 600;
          font-size: small;
          margin-bottom: 0.5rem;
          color: white;
        }
        
        .top1 p {
          font-size: small;
          color: white;
        }
        
        .enter_email {
          width: 12rem;
          padding: 0.4rem;
          padding-left: 0.5rem;
          border-radius: 5px;
          border-width: 0.5px;
          color: #e4e4e4;
        }
        
        .top2 {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-left: 10%;
          margin-right: 17.5%;
          margin-top: 1rem;
        }
        
        .top2_li {
          color: white;
          font-size: small;
        }
        
        .top2 p {
          font-size: small;
          font-weight: 500;
          color: white;
          margin-bottom: 0.5rem;
        }
        
        .subscribe {
          border-radius: 5px;
          border: none;
          background-color: #39b54a;
          padding-top: 0.4rem;
          padding-bottom: 0.4rem;
          padding-left: 1rem;
          padding-right: 1rem;
          margin-left: 1rem;
        }
        
        .subscribe a {
          color: #fff;
          text-align: center;
          font-weight: 600;
          font-size: small;
          font-weight: 300;
        }
        .line {
          border-top: 0.5px solid white; /* 1px solid black line */
          margin-left: 6%;
          margin-right: 6%;
        }
        
        .top3 {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-left: 10%;
          margin-right: 10%;
          margin-bottom: 2rem;
        }
        
        .top3 p {
          color: white;
          font-size: small;
        }
        
        .socials {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          color: white;
        }
        
        .new_btn {
          border-radius: 1rem;
          border: none;
          background-color: white;
          padding-top: 0.2rem;
          padding-bottom: 0.2rem;
          padding-left: 0.4rem;
          padding-right: 0.4rem;
          color: #39b54a;
          margin-left: 0.5rem;
        }
        
        .footer_new {
          display: flex;
          flex-direction: row;
        }
        
        @media screen and (max-width: 768px) {
          .footer_top {
            flex-direction: column;
          }
          .top1 {
            flex-direction: column;
          }
        
          .top3 {
            flex-direction: column;
          }
        
          .top2 ul {
            display: flex;
            flex-direction: column;
          }
        
          .footer_email {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            margin-top: 1rem;
          }
        
          .enter_email {
            width: 100%;
          }
        
          .subscribe {
            width: 100%;
            margin-left: 0rem;
          }
        
          .top3 {
            flex-direction: column-reverse;
          }
        
          .footer_new {
            display: flex;
            flex-direction: row;
          }
        
          .socials img {
            width: 5%;
            margin-bottom: 1rem;
          }
        }
        
        </style>
        <footer>
        <!-- Footer -->
        <div>
            <div class="footer_top">
                <div class="top1">
                    <div>
                        <h4>Join our Newsletter</h4>
                        <p>We’ll send you a nice letter once per week. No spam.</p>
                    </div>
                    <div class="footer_email">
                        <input class="enter_email" type="text" placeholder="Enter your email" />
                        <button class="subscribe">
                            <a to="/join">Subscribe</a>
                        </button>
                    </div>
                </div>
                <div class="top2">
                    <div>
                        <div>
                            <p>Sitemap</p>
                            <ul>
                                <li>
                                    <a to="" class="top2_li">Home</a>
                                </li>
                                <li>
                                    <a to="" class="top2_li">About Us</a>
                                </li>
                                <li>
                                    <a to="" class="top2_li">Contact Us</a>
                                </li>
                                <div class="footer_new">
                                    <li>
                                        <a to="" class="top2_li">All Courses</a>
                                    </li>
                                    <button class="new_btn">new</button>
                                </div>
    
                            </ul>
                        </div>
                    </div>
                    <div class="legal">
                        <p>Legal</p>
                        <ul>
                            <li>
                                <a to="" class="top2_li">Terms</a>
                            </li>
                            <li>
                                <a to="" class="top2_li">Privacy</a>
                            </li>
                            <li>
                                <a to="" class="top2_li">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="line"></div>
                <div class="top3">
                    <div>
                        <p>© 2023 Careerco. All rights reserved.</p>
                    </div>
                    <div class="socials">
                        <img src="images/twitter.svg" width="15%" />
                        <img src="images/linkedin.svg" width="15%" />
                        <img src="images/facebook.svg" width="15%" />
                    </div>
                </div>
            </div>
        </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);