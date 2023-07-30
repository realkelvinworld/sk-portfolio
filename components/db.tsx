export const Navlinks = [
  { id: 1, name: "works", link: "works" },
  { id: 2, name: "contact", link: "/contact" },
  { id: 3, name: "blog", link: "/courses" },
];
import { GitHub, Twitter, Mail } from "react-feather";
import { Snapchat, Whatsapp } from "iconsax-react";
export const Socials = [
  {
    id: 1,
    name: "Twitter",
    link: "https://twitter.com/kumordziii",
    icon: (
      <span>
        <Twitter className="h-6 w-6" />
      </span>
    ),
  },
  {
    id: 2,
    name: "GitHub",
    link: "https://github.com/realkelvinworld",
    icon: (
      <span>
        <GitHub className="h-6 w-6" />
      </span>
    ),
  },
  {
    id: 3,
    name: "Mail",
    link: "https://mail.google.com/mail/u/?authuser=kevskum2002#gmail.com",
    icon: (
      <span>
        <Mail className="h-6 w-6" />
      </span>
    ),
  },
  {
    id: 3,
    name: "Mail",
    link: "https://t.snapchat.com/xepAWXS6",
    icon: (
      <span>
        <Snapchat className="h-7 w-7" />
      </span>
    ),
  },
  {
    id: 3,
    name: "Mail",
    link: "https://wa.me/209974302",
    icon: (
      <span>
        <Whatsapp className="h-7 w-7" />
      </span>
    ),
  },
];
