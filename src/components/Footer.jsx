import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-8 md:mb-0">
                <div className="flex flex-col">
                    <h4 className="text-xl font-bold text-gray-100 mb-4">For Business</h4>
                    <a href="/employer" className="hover:text-gray-500">
                    <p>Employer</p>
                    </a>
                    <a href="/healthplan" className="hover:text-gray-500">
                    <p>Health Plan</p>
                    </a>
                    <a href="/individual" className="hover:text-gray-500">
                    <p>Individual</p>
                    </a>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold text-gray-100 mb-4">Resources</h4>
                  <a href="/resource"  className="hover:text-gray-500">
                    <p>Resource center</p>
                    </a>
                    <a href="/resource" className="hover:text-gray-500">
                    <p>Testimonials</p>
                    </a>
                    <a href="/resource" className="hover:text-gray-500">
                    <p>STV</p>
                    </a>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold text-gray-100 mb-4">Partners</h4>
                  <a href="/employer" className="hover:text-gray-500">
                    <p>Swing Tech</p>
                    </a>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold text-gray-100 mb-4">Company</h4>
                  <a href="/about" className="hover:text-gray-500">
                    <p>About</p>
                    </a>
                    <a href="/pres" className="hover:text-gray-500">
                    <p>Press</p>
                    </a>
                    <a href="/career" className="hover:text-gray-500">
                    <p>Career</p>
                    </a>
                    <a href="/contact" className="hover:text-gray-500">
                    <p>Contact</p>
                    </a>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold text-gray-100 mb-4">Coming soon on</h4>
                  <div className=" flex flex-col">
                    <p><FaFacebook />
                    </p>
                    <p><FaInstagram />
                    </p>
                    <p><FaTwitter />
                    </p>
                    <p><FaLinkedin />
                    </p>
                  </div>
                </div>
            </div>
            <hr></hr>
            <div className="flex flex-col">
              <div className="text-xl font-bold text-gray-100 mb-4">
                <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
              </div>
              <div className="flex flex-col">
                <a href="/terms" className="hover:text-gray-500"><div><p>Terms & Conditions</p></div></a>
                <a href="/privacy" className="hover:text-gray-500"><div><p>Privacy</p></div></a>
                <a href="/security" className="hover:text-gray-500"><div><p>Security</p></div></a>
                <a href="/cookie" className="hover:text-gray-500"><div><p>Cookie Declaration</p></div></a>

              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
