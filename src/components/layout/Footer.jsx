import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Pricing", path: "/pricing" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const services = [
  "Website Development",
  "Portfolio Development",
  "Graphic Design & Branding",
  "QA & Testing",
  "Domain & Hosting",
  "Resume & LinkedIn",
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nexovorastudio",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: FaXTwitter,
  },
];

function Footer() {
  return (
    <footer className="bg-[#06142E] px-5 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-['Space_Grotesk'] text-2xl font-bold">
            Nexovora
          </h2>

          <p className="mt-2 text-sm text-blue-200">
            Creating Digital Excellence
          </p>

          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
            We help businesses, professionals, startups, and individuals grow
            through websites, branding, QA, hosting, and digital solutions.
          </p>

          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 p-2 transition hover:bg-blue-600"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Quick Links</h3>

          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className="transition hover:text-white"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Services</h3>

          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Contact Us</h3>

          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0" size={18} />
              Islamabad, Pakistan
            </p>

            <a
              href="tel:+923288651551"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Phone size={18} />
              +92 328 8651551
            </a>

            <a
              href="mailto:hello.nexovora@gmail.com"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Mail size={18} />
              hello.nexovora@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:justify-between">
        <p>© 2026 Nexovora. All Rights Reserved.</p>
        <p>Made with care by Nexovora</p>
      </div>
    </footer>
  );
}

export default Footer;