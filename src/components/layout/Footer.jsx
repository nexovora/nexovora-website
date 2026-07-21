import { Mail, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Logo from "../common/Logo";
import StaggerContainer from "../animations/StaggerContainer";
import { buttonHover, buttonTap, fadeInVariant } from "../../utils/motionVariants";

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

const resources = [
  { label: "Blog", path: "/blog" },
  { label: "FAQs", path: "/faqs" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms & Conditions", path: "/terms-and-conditions" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592011827591",
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
];

function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="bg-[#06142E] text-white">
      <StaggerContainer
        as="div"
        className="section-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5"
      >
        <motion.div
          variants={
            reduceMotion
              ? undefined
              : fadeInVariant({ direction: "up", distance: 16 })
          }
          className="lg:col-span-1"
        >
          <Logo light />

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            Modern digital solutions for students, professionals, startups, and
            businesses.
          </p>

          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={reduceMotion ? undefined : buttonHover}
                whileTap={reduceMotion ? undefined : buttonTap}
                className="focus-visible-ring rounded-full bg-white/10 p-2.5 text-white transition hover:bg-blue-600"
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={
            reduceMotion
              ? undefined
              : fadeInVariant({ direction: "up", distance: 16 })
          }
        >
          <h3 className="font-heading font-bold">Quick Links</h3>

          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition hover:text-white ${
                      isActive ? "text-white" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={
            reduceMotion
              ? undefined
              : fadeInVariant({ direction: "up", distance: 16 })
          }
        >
          <h3 className="font-heading font-bold">Services</h3>

          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={
            reduceMotion
              ? undefined
              : fadeInVariant({ direction: "up", distance: 16 })
          }
        >
          <h3 className="font-heading font-bold">Resources</h3>

          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {resources.map((resource) => (
              <li key={resource.path}>
                <NavLink
                  to={resource.path}
                  className={({ isActive }) =>
                    `transition hover:text-white ${
                      isActive ? "text-white" : ""
                    }`
                  }
                >
                  {resource.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={
            reduceMotion
              ? undefined
              : fadeInVariant({ direction: "up", distance: 16 })
          }
        >
          <h3 className="font-heading font-bold">Contact</h3>

          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <p className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-blue-300" />
              Islamabad, Pakistan
            </p>

            <a
              href="tel:+923288651551"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Phone size={18} className="shrink-0 text-blue-300" />
              +92 328 8651551
            </a>

            <a
              href="mailto:hello.nexovora@gmail.com"
              className="flex items-start gap-3 break-all transition hover:text-white"
            >
              <Mail size={18} className="mt-0.5 shrink-0 text-blue-300" />
              hello.nexovora@gmail.com
            </a>
          </div>
        </motion.div>
      </StaggerContainer>

      <div className="border-t border-white/10">
        <div className="section-container flex flex-col gap-3 py-6 text-sm text-slate-400 md:flex-row md:justify-between">
          <p>© 2026 Nexovora. All Rights Reserved.</p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <NavLink
              to="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </NavLink>

            <NavLink
              to="/terms-and-conditions"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
