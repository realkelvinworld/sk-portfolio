export const Navlinks = [
  { id: 1, name: "projects", link: "projects" },
  { id: 2, name: "contact", link: "/contact" },
  { id: 3, name: "blog", link: "/blog" },
  // { id: 3, name: "blog", link: "/blog" },
];
import { GitHub, Twitter, Mail, Linkedin } from "react-feather";
import { Whatsapp } from "iconsax-react";
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
    link: "https://www.linkedin.com/in/kelvin-kumordzi-2276a61ba/",
    icon: (
      <span>
        <Linkedin className="h-7 w-7" />
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

export const works = [
  {
    id: 1,
    name: "Webncos",
    link: "https://webncos.com",
    description: "A development agency",
  },
  {
    id: 2,
    name: "Just Guess",
    link: "https://justguess.netlify.app/",
    description: "A guessing game",
  },
  {
    id: 3,
    name: "Pentecost University IDC",
    link: "http://pentvarsidc.com/",
    description: "A dedicated tech department",
  },
  {
    id: 4,
    name: "Events",
    link: "https://eventsp1.netlify.app/",
    // decription: "An events site template",
    description: "An events site template",
  },
  {
    id: 5,
    name: "Dice Roll",
    link: "https://dicereollgame.netlify.app/",
    description: "A strategy game",
  },
  {
    id: 6,
    name: "UI/UX Board",
    link: "",
    description: "A figma board with all my UI/UX designs on them ",
  },
];
