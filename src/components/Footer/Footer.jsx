// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedin,
//   FaTiktok,
//   FaYoutube,
// } from "react-icons/fa";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <>
      <div className=" w-11/12 md:w-3/4 mx-auto  grid-rows-2 ">
        <footer className=" dark:text-white py-10">
          {/* Footer Top Section */}
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5">
            {/* About Us Section */}
            <div>
              <h2 className="font-bold text-lg mb-4">ABOUT US</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">Who we are</a>
                </li>
                <li>
                  <a href="#">How it works</a>
                </li>
                <li>
                  <a href="#">Preply reviews</a>
                </li>
                <li>
                  <a href="#">Preply app</a>
                </li>
                <li>
                  <a href="#">Work at Preply</a>
                </li>
                <li>
                  <a href="#">Status</a>
                </li>
                <li>
                  <a href="#">Media kit</a>
                </li>
                <li>
                  <a href="#">Affiliate program</a>
                </li>
              </ul>
            </div>

            {/* For Students Section */}
            <div>
              <h2 className="font-bold text-lg mb-4">FOR STUDENTS</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">Preply Blog</a>
                </li>
                <li>
                  <a href="#">Questions and Answers</a>
                </li>
                <li>
                  <a href="#">Student discount</a>
                </li>
                <li>
                  <a href="#">Refer a friend</a>
                </li>
                <li>
                  <a href="#">Test your English for free</a>
                </li>
                <li>
                  <a href="#">Test your vocab</a>
                </li>
                <li>
                  <a href="#">Preply discounts</a>
                </li>
              </ul>
            </div>

            {/* Learn Section */}
            <div>
              <h2 className="font-bold text-lg mb-4">LEARN</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">Learn English online</a>
                </li>
                <li>
                  <a href="#">Learn Spanish online</a>
                </li>
                <li>
                  <a href="#">Learn French online</a>
                </li>
                <li>
                  <a href="#">Learn German online</a>
                </li>
                <li>
                  <a href="#">Learn Japanese online</a>
                </li>
                <li>
                  <a href="#">Learn Italian online</a>
                </li>
                <li>
                  <a href="#">Learn another language</a>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h2 className="font-bold text-lg mb-4">SUPPORT</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">Need any help?</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Middle Section */}
          <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 px-5">
            {/* Online Language Classes Section */}
            <div>
              <h2 className="font-bold text-lg mb-4">
                ONLINE LANGUAGE CLASSES AND COURSES
              </h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">Online English Classes</a>
                </li>
                <li>
                  <a href="#">Business English Courses</a>
                </li>
                <li>
                  <a href="#">Online Spanish Classes</a>
                </li>
                <li>
                  <a href="#">Online German Classes</a>
                </li>
                <li>
                  <a href="#">Online French Classes</a>
                </li>
                <li>
                  <a href="#">Online Japanese Classes</a>
                </li>
                <li>
                  <a href="#">Online Portuguese Classes</a>
                </li>
              </ul>
            </div>

            {/* Tutors Section */}
            <div>
              <h2 className="font-bold text-lg mb-4">TUTORS NEAR YOU</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">Tutors in NYC</a>
                </li>
                <li>
                  <a href="#">Tutors in Los Angeles</a>
                </li>
                <li>
                  <a href="#">Tutors in Toronto</a>
                </li>
                <li>
                  <a href="#">Tutors in London</a>
                </li>
                <li>
                  <a href="#">Tutors in Singapore</a>
                </li>
                <li>
                  <a href="#">Tutors abroad</a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h2 className="font-bold text-lg mb-4">CONTACTS</h2>
              <p className="text-sm">Bangladesh</p>
              <p className="text-sm">
                1207 Passport Street, Suite 149, Brookline, MA, 02446
              </p>
            </div>

            {/* Apps Section */}
            <div>
              <form>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="form-control w-80">
                  <label className="label">
                    <span className="label-text dark:text-white">
                      Enter your email address
                    </span>
                  </label>
                  <div className="join">
                    <input
                      type="text"
                      placeholder="username@site.com"
                      className="input input-bordered join-item"
                    />
                    <button className="btn bg-primaryColor join-item">
                      Subscribe
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-10 border-t border-gray-700 pt-5">
            <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
              <p>©2012-2024 TutorSphere.</p>
              <ul className="flex space-x-5">
                <li>
                  <a href="#">Legal Center</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer footer-center w-11/12 md:w-3/4 mx-auto dark:text-white mt-10">
            <aside className="">
              <img className="h-[80px] w-[80px]" src={logo} alt="" />
              <p className="text-xl font-bold">
                TutorSpare
                <br />
                Providing reliable tech since 1992
              </p>
              <p> All right reserved</p>
            </aside>
            <nav>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
