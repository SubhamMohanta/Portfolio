import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Image from "./assets/1.png"
import Lenis from 'lenis'
import { useForm, ValidationError } from '@formspree/react';

import Skill1 from "./assets/skill1.png"
import Skill2 from "./assets/skill2.png"
import Skill3 from "./assets/skill3.png"
import Skill4 from "./assets/skill4.png"
import Skill5 from "./assets/skill5.png"
import Skill6 from "./assets/skill6.png"
import Skill7 from "./assets/skill7.png"
import Skill8 from "./assets/skill8.png"
import Skill9 from "./assets/skill9.png"
import Skill10 from "./assets/skill10.png"
import Project1 from "./assets/project1.png"
import Project2 from "./assets/project2.png"

const App = () => {
  const [state, handleSubmit] = useForm("mvoeleav");
  if (state.succeeded) {
    return (
      <div className='container-2'>
        <div className='box'>
          <p>Hiwkigvbdwowbpewnewfe</p>
        </div>
      </div>
    )
    w
  }

  return (
    <>
      <div className='container'>
        <nav className='navbar'>
          <div className='web-logo'>
            <a href="#hero">
              <svg width="100" height="45" viewBox="0 0 100 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="44.7619" rx="14" fill="#161616" />
                <path d="M32.7624 12.489H35.7654V30H32.9054L20.3344 27.699V24.826L24.1304 23.045L25.4694 22.278L33.2694 18.742V21.576L24.0914 25.684V25.827L33.2694 27.4L32.7624 28.024V20.913L32.7494 17.78L32.3984 15.609H32.8534L32.7624 12.489ZM26.8604 22.031L24.3514 23.734C23.7361 23.6387 23.1597 23.5043 22.6224 23.331C22.0937 23.149 21.6127 22.9193 21.1794 22.642C20.7461 22.356 20.3734 22.0137 20.0614 21.615C19.7581 21.2163 19.5241 20.7527 19.3594 20.224C19.1947 19.6867 19.1124 19.08 19.1124 18.404V18.04C19.1124 16.1247 19.7407 14.6427 20.9974 13.594C22.2627 12.5367 24.0741 12.008 26.4314 12.008C28.4334 12.008 29.9457 12.3893 30.9684 13.152C31.9997 13.9147 32.6367 14.946 32.8794 16.246L34.2964 19.6H32.7494C32.7061 18.5253 32.4461 17.637 31.9694 16.935C31.5014 16.2243 30.8427 15.6913 29.9934 15.336C29.1527 14.9807 28.1647 14.803 27.0294 14.803C25.4347 14.803 24.2561 15.089 23.4934 15.661C22.7307 16.2243 22.3494 17.052 22.3494 18.144V18.469C22.3494 18.9023 22.4187 19.2967 22.5574 19.652C22.6961 19.9987 22.8954 20.3107 23.1554 20.588C23.4154 20.8567 23.7274 21.0907 24.0914 21.29C24.4641 21.4893 24.8801 21.6497 25.3394 21.771C25.8074 21.8923 26.3144 21.979 26.8604 22.031ZM30.2737 38.71C28.939 38.71 27.9294 38.411 27.2447 37.813C26.56 37.2237 26.2177 36.3873 26.2177 35.304V35.161C26.2177 34.1123 26.547 33.289 27.2057 32.691C27.8557 32.1017 28.7787 31.807 29.9747 31.807C30.7114 31.807 31.3484 31.9197 31.8857 32.145C32.423 32.3703 32.9474 32.6867 33.4587 33.094L32.7957 34.992C32.4317 34.6627 32.0634 34.407 31.6907 34.225C31.3094 34.0517 30.889 33.965 30.4297 33.965C29.9444 33.965 29.5804 34.069 29.3377 34.277C29.095 34.485 28.9737 34.7797 28.9737 35.161V35.252C28.9737 35.6247 29.1037 35.9193 29.3637 36.136C29.6237 36.3613 30.0137 36.474 30.5337 36.474C31.123 36.474 31.5867 36.3093 31.9247 35.98C32.2627 35.6593 32.4664 35.161 32.5357 34.485L32.4707 33.484L32.6917 33.042C32.7177 32.574 32.735 32.106 32.7437 31.638C32.7437 31.17 32.7437 30.65 32.7437 30.078V26.672H35.7597V30.078C35.7597 30.6327 35.751 31.1613 35.7337 31.664C35.7077 32.1753 35.673 32.6563 35.6297 33.107C35.5777 33.5663 35.504 33.9953 35.4087 34.394L35.2527 34.823L35.0447 35.226C34.8454 35.9627 34.555 36.591 34.1737 37.111C33.7837 37.6397 33.2724 38.0383 32.6397 38.307C32.007 38.5757 31.2184 38.71 30.2737 38.71ZM39.9327 38.645C39.196 38.4977 38.468 38.2897 37.7487 38.021C37.038 37.761 36.3404 37.4317 35.6557 37.033C34.971 36.6343 34.295 36.1707 33.6277 35.642L34.6807 33.51C35.4434 34.134 36.2754 34.628 37.1767 34.992C38.0694 35.356 38.988 35.5943 39.9327 35.707V38.645ZM60.9017 32.548L54.4797 29.779C54.9824 29.1117 55.355 28.3793 55.5977 27.582C55.8404 26.776 55.9617 25.957 55.9617 25.125V21.485C55.9617 19.2663 55.3247 17.598 54.0507 16.48C52.7854 15.3533 50.8787 14.79 48.3307 14.79C46.0167 14.79 44.292 15.2017 43.1567 16.025C42.0214 16.8397 41.4537 18.0313 41.4537 19.6V20.185C41.4537 20.887 41.5664 21.433 41.7917 21.823C42.017 22.213 42.4027 22.5467 42.9487 22.824L42.0907 25.333C40.8254 24.969 39.8764 24.3623 39.2437 23.513C38.6197 22.6637 38.3077 21.5717 38.3077 20.237V19.522C38.3077 17.91 38.6977 16.545 39.4777 15.427C40.2577 14.309 41.393 13.4597 42.8837 12.879C44.3744 12.2983 46.1944 12.008 48.3437 12.008C50.6577 12.008 52.612 12.359 54.2067 13.061C55.8014 13.763 57.0104 14.7943 57.8337 16.155C58.6657 17.5157 59.0817 19.1883 59.0817 21.173V24.657C59.0817 25.4977 58.9604 26.2907 58.7177 27.036C58.475 27.7813 58.072 28.427 57.5087 28.973L56.9497 28.297L60.9017 29.467V32.548ZM47.7197 30.312C45.6744 30.312 44.1144 29.8397 43.0397 28.895C41.9737 27.9417 41.4407 26.5767 41.4407 24.8V23.851L41.7527 23.006C41.848 22.434 41.9694 21.9227 42.1167 21.472C42.264 21.0213 42.4287 20.6097 42.6107 20.237H45.2107C44.968 20.7483 44.773 21.2813 44.6257 21.836C44.4784 22.3907 44.4047 23.0103 44.4047 23.695V24.592C44.4047 25.658 44.695 26.477 45.2757 27.049C45.8564 27.6123 46.71 27.894 47.8367 27.894C48.9114 27.894 49.7174 27.6513 50.2547 27.166C50.792 26.672 51.065 25.944 51.0737 24.982L51.0347 24.566L51.0217 23.37C51.013 22.9107 50.987 22.4773 50.9437 22.07C50.9004 21.654 50.8527 21.2597 50.8007 20.887H53.4787C53.5654 21.3117 53.639 21.7753 53.6997 22.278C53.769 22.772 53.8037 23.2747 53.8037 23.786V24.813C53.8037 26.5637 53.2794 27.92 52.2307 28.882C51.182 29.8353 49.6784 30.312 47.7197 30.312ZM48.7597 26.724C47.867 26.724 47.1997 26.451 46.7577 25.905C46.3157 25.3503 46.0947 24.6007 46.0947 23.656V23.097C46.0947 22.6897 46.1337 22.304 46.2117 21.94C46.2897 21.576 46.3937 21.225 46.5237 20.887H49.0717C48.985 21.1903 48.9157 21.4937 48.8637 21.797C48.8204 22.0917 48.7987 22.4167 48.7987 22.772V23.227C48.7987 23.695 48.8854 24.0503 49.0587 24.293C49.2407 24.527 49.531 24.644 49.9297 24.644C50.2677 24.644 50.532 24.5357 50.7227 24.319C50.922 24.1023 51.026 23.8163 51.0347 23.461L51.6587 25.372H50.9567C50.8267 25.7793 50.5927 26.1087 50.2547 26.36C49.9167 26.6027 49.4184 26.724 48.7597 26.724ZM68.9136 12.008C70.9242 12.008 72.4496 12.3893 73.4896 13.152C74.5296 13.9147 75.1709 14.946 75.4136 16.246L75.2576 19.652C75.2316 18.56 74.9759 17.6587 74.4906 16.948C74.0139 16.2287 73.3466 15.6913 72.4886 15.336C71.6392 14.9807 70.6296 14.803 69.4596 14.803C67.8736 14.803 66.6862 15.141 65.8976 15.817C65.1176 16.4843 64.7276 17.4333 64.7276 18.664V19.067C64.7276 19.6737 64.8316 20.2023 65.0396 20.653C65.2562 21.095 65.5726 21.472 65.9886 21.784C66.4132 22.0873 66.9419 22.33 67.5746 22.512C68.2159 22.694 68.9569 22.837 69.7976 22.941C70.1269 22.967 70.4476 22.9887 70.7596 23.006C71.0716 23.0233 71.3576 23.032 71.6176 23.032L69.7846 25.333C69.5246 25.3417 69.2429 25.3417 68.9396 25.333C68.6449 25.3243 68.3676 25.3027 68.1076 25.268C67.0936 25.1467 66.1836 24.9473 65.3776 24.67C64.5716 24.384 63.8826 23.9983 63.3106 23.513C62.7386 23.0277 62.3009 22.4253 61.9976 21.706C61.6942 20.978 61.5426 20.1157 61.5426 19.119V18.573C61.5426 16.5103 62.1839 14.9027 63.4666 13.75C64.7579 12.5887 66.5736 12.008 68.9136 12.008ZM66.1186 30H61.4516V29.948L68.5366 24.644L69.7976 23.721L75.9726 19.301L75.9336 22.499L66.1186 30ZM75.2576 30V17.234L74.8936 15.609H75.3616L75.2706 12.489H78.2736V30H75.2576ZM75.143 31.547V31.261H78.302L81.994 36.552V36.669H79.199L75.143 31.547Z" fill="#7A7A7A" />
              </svg>
            </a>
          </div>

          <div className='main-routes'>
            <Link to="#about" style={{ textDecoration: "none" }}>
              <p>About</p>
            </Link>
            <Link to="#resume" style={{ textDecoration: "none" }}>
              <p>Resume</p>
            </Link>
            <Link to="#contact" style={{ textDecoration: "none" }}>
              <p>Contact</p>
            </Link>
          </div>
        </nav>
        <svg id="gradient" width="688" height="713" viewBox="0 0 688 713" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="459.953" cy="243.156" rx="576.029" ry="314.351" transform="rotate(-133.844 459.953 243.156)" fill="url(#paint0_linear_54_10241)" />
          <defs>
            <linearGradient id="paint0_linear_54_10241" x1="415.057" y1="43.9969" x2="441.809" y2="558.451" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0B0B0B" stop-opacity="0" />
              <stop offset="1" stop-color="#3C3359" stop-opacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
        <div className='main'>
          <section id="hero">
            <div className='profile'>
              <img src={Image} alt='Profile image' />
            </div>
            <div className='skills'>
              <div className='slide-track'>
                <img src={Skill1} />
                <img src={Skill2} />
                <img src={Skill3} />
                <img src={Skill4} />
                <img src={Skill5} />
                <img src={Skill6} />
                <img src={Skill7} />
                <img src={Skill8} />
                <img src={Skill9} />
                <img src={Skill10} />
              </div>
              <div className='slide-track'>
                <img src={Skill1} />
                <img src={Skill2} />
                <img src={Skill3} />
                <img src={Skill4} />
                <img src={Skill5} />
                <img src={Skill6} />
                <img src={Skill7} />
                <img src={Skill8} />
                <img src={Skill9} />
                <img src={Skill10} />
              </div>
            </div>
            <div className='intro'>
              <h1>Hi there,<br />I am Subham💫</h1>
            </div>
            <div className='work-status'>
              <div><p>Open for work</p></div>
              <div className='circle'>
              </div>
            </div>
          </section>
          <section>
            <div className='projects'>
              <h1>Projects</h1>
              <div className='project-listing'>
                <div className='project-1'>
                  <img src={Project1} alt="Jamify" width="95%" />
                  <img src={Project1} id="glow" width="95%" />
                  <div className='Jamify'>
                    <div className='badge'>
                      <p>Web-app</p>
                    </div>
                    <div>
                      <p style={{ fontSize: "1.25rem" }}>Jamify</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <p id="sub-text">Collaborate with artists around you</p>
                      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 28C0 18.5678 0 13.8517 1.73389 10.2059C3.50013 6.49204 6.49204 3.50013 10.2059 1.73389C13.8517 0 18.5678 0 28 0C37.4322 0 42.1483 0 45.7941 1.73389C49.508 3.50013 52.4999 6.49204 54.2661 10.2059C56 13.8517 56 18.5678 56 28C56 37.4322 56 42.1483 54.2661 45.7941C52.4999 49.508 49.508 52.4999 45.7941 54.2661C42.1483 56 37.4322 56 28 56C18.5678 56 13.8517 56 10.2059 54.2661C6.49204 52.4999 3.50013 49.508 1.73389 45.7941C0 42.1483 0 37.4322 0 28Z" fill="#222222" />
                        <path d="M13.2222 8.55556H43.5556V44.3333H13.2222V8.55556Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M41.1021 7.80082H12.6858C11.7852 7.80082 11.9477 8.08061 11.3108 8.71747C10.6739 9.35434 10.3942 9.19179 10.3942 10.0925L10.3942 43.5503C10.3942 40.8785 9.7573 44.7467 10.3942 45.3836C11.031 46.0204 10.8685 45.8419 11.7691 45.8419H42.4057C43.3063 45.8419 43.2151 45.5621 43.852 44.9253C44.4888 44.2884 44.3103 43.5343 44.3103 42.6336V10.0925C44.3103 9.19179 44.0305 8.89601 43.3936 8.25915C42.7568 7.62228 42.0027 7.80082 41.1021 7.80082ZM37.2462 31.464C36.6179 32.7612 35.9795 32.8291 36.258 31.464C36.9745 27.9356 36.4889 20.3558 31.1505 19.5136V35.6444C31.1505 38.9487 29.6291 41.825 25.5845 43.1257C21.6588 44.3788 17.2678 43.0713 16.2388 40.2527C15.2099 37.4341 17.5191 34.0042 21.3939 32.5914C23.5571 31.8036 26.0633 31.5998 27.7545 32.2484V9.32576H31.1505C31.1505 17.3232 44.955 15.5709 37.2462 31.464Z" fill="#222222" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='project-2'>
                  <img src={Project2} alt="Pop-Quiz" width="95%" />
                  <img src={Project2} id="glow" width="95%" />
                  <div className='Jamify'>
                    <div className='badge'>
                      <p>Web-app</p>
                    </div>
                    <div>
                      <p style={{ fontSize: "1.25rem" }}>Pop-Quiz</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <p id="sub-text">Quiz app related to pop culture</p>
                      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 28C0 18.5678 0 13.8517 1.73389 10.2059C3.50013 6.49204 6.49204 3.50013 10.2059 1.73389C13.8517 0 18.5678 0 28 0C37.4322 0 42.1483 0 45.7941 1.73389C49.508 3.50013 52.4999 6.49204 54.2661 10.2059C56 13.8517 56 18.5678 56 28C56 37.4322 56 42.1483 54.2661 45.7941C52.4999 49.508 49.508 52.4999 45.7941 54.2661C42.1483 56 37.4322 56 28 56C18.5678 56 13.8517 56 10.2059 54.2661C6.49204 52.4999 3.50013 49.508 1.73389 45.7941C0 42.1483 0 37.4322 0 28Z" fill="#222222" />
                        <path d="M13.2222 8.55556H43.5556V44.3333H13.2222V8.55556Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M41.1021 7.80082H12.6858C11.7852 7.80082 11.9477 8.08061 11.3108 8.71747C10.6739 9.35434 10.3942 9.19179 10.3942 10.0925L10.3942 43.5503C10.3942 40.8785 9.7573 44.7467 10.3942 45.3836C11.031 46.0204 10.8685 45.8419 11.7691 45.8419H42.4057C43.3063 45.8419 43.2151 45.5621 43.852 44.9253C44.4888 44.2884 44.3103 43.5343 44.3103 42.6336V10.0925C44.3103 9.19179 44.0305 8.89601 43.3936 8.25915C42.7568 7.62228 42.0027 7.80082 41.1021 7.80082ZM37.2462 31.464C36.6179 32.7612 35.9795 32.8291 36.258 31.464C36.9745 27.9356 36.4889 20.3558 31.1505 19.5136V35.6444C31.1505 38.9487 29.6291 41.825 25.5845 43.1257C21.6588 44.3788 17.2678 43.0713 16.2388 40.2527C15.2099 37.4341 17.5191 34.0042 21.3939 32.5914C23.5571 31.8036 26.0633 31.5998 27.7545 32.2484V9.32576H31.1505C31.1505 17.3232 44.955 15.5709 37.2462 31.464Z" fill="#222222" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='contact'>
              <h1>Get in touch</h1>
              <div className='bottom-div'>
                <form method="POST" onSubmit={handleSubmit}>
                  <label htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <textarea
                    id="message"
                    name="message"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <button type="submit" disabled={state.submitting}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </section>
          <footer>
            <div>

            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App