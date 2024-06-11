import { BsFillTelephoneFill } from "react-icons/bs";
import logo from "../../assets/logoWhite.jpg";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <section className="mt-10">
      <div className="footer p-10 py-24 bg-[#39474F] text-lg text-white">
        <aside>
          <img className="w-32" src={logo} alt="" />
          <br />

          <p className="md:w-2/3">
            <span className="text-4xl font-bold text-[#FDB913]">
              019 - 4565 - 009
            </span>
            <br />
            NovaHomes / Real Estate Agency
            <br />
            Providing all the latest Real Estate houses and updates to all the
            people
          </p>
        </aside>
        <nav className="space-y-5 mr-0 md:mr-10">
          <h6 className="footer-title">Contact Us</h6>
          <a className="link link-hover flex items-center gap-3">
            <BsFillTelephoneFill /> +999-111-0000
          </a>
          <a className="link link-hover flex items-center gap-3">
            <MdEmail className="text-2xl" /> NovaHomes@007.com
          </a>
          <a className="link link-hover flex items-center gap-5">
            <FaFacebook className="text-3xl" />{" "}
            <FaSquareInstagram className="text-3xl" />{" "}
            <FaLinkedinIn className="text-3xl" />{" "}
            <FaSquareTwitter className="text-3xl" />
          </a>
        </nav>
        <nav className="space-y-2">
          <h6 className="footer-title">Services</h6>
          <p>- Real Estate</p>
          <p>- Houses Rent</p>
          <p>- Buying land</p>
          <p>- Lifetime Servie</p>
        </nav>
      </div>
      <div className="footer items-center px-4 py-10 bg-[#39474F] text-neutral-content border-t">
        <aside className="items-center grid-flow-col">
          <p className="text-lg">Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p className="text-xl">Privacy Policy</p>
        </nav>
      </div>
    </section>
  );
};

export default Footer;
