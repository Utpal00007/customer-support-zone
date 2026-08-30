import Container from "../Container/Container";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
const socialLinks = [
  {
    icon: <FaXTwitter />,
    text: "@CS — Ticket System",
  },
  {
    icon: <FaLinkedinIn />,
    text: "@CS — Ticket System",
  },
  {
    icon: <FaFacebookF />,
    text: "@CS — Ticket System",
  },
  {
    icon: <SiGmail />,
    text: "support@cst.com",
  },
];

const Footer = () => {
  return (
    <footer className="mt-16 bg-black text-white">
      {/* Main Footer */}
      <Container>
        <div className="px-5 py-12 sm:px-6 lg:px-8">
          <div className="my-18 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-5">
            <div>
              <h2 className="text-2xl font-bold">CS — Ticket System</h2>

              <p className="mx-auto mt-3 max-w-sm text-base leading-6 text-[#A1A1AA] sm:mx-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className="sm:ml-10">
              <h3 className="mb-4 text-xl font-medium">Company</h3>

              <ul className="space-y-3 text-base text-[#A1A1AA]">
                <li className="cursor-pointer transition hover:text-black">
                  About Us
                </li>

                <li className="cursor-pointer transition hover:text-black">
                  Our Mission
                </li>

                <li className="cursor-pointer transition hover:text-black">
                  Contact Saled
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-medium">Services</h3>

              <div className="space-y-3 text-base text-[#A1A1AA]">
                <p>Products & Services</p>
                <p>Customer Stories</p>

                <p>Saturday - Sunday</p>
                <p>Download AppsPM</p>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-medium">Information</h3>

              <div className="space-y-3 text-sm text-[#A1A1AA]">
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>

                <p className="">Join Us</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="mb-4 text-xl font-medium">Social Links</h3>
              <div className="space-y-3">
                {" "}
                {socialLinks.map((link, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-[#A1A1AA]"
                  >
                    <span className="bg-white rounded-full h-8 w-8 flex items-center justify-center  text-black">
                      {link.icon}
                    </span>
                    {link.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* Bottom */}
      <div className="">
        <Container>
          <div className=" border-gray-200/20 border-t   px-5 py-5 text-center sm:px-6 lg:px-8 shadow-2xl">
            <p className="text-sm font-medium text-[#3d3d3d]">
              © {new Date().getFullYear()} Kitchen Room. All rights reserved.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
