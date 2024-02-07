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
    id: 5,
    name: "Webncos",
    link: "https://webncos.com",
    description: "A development agency",
  },
  {
    id: 1,
    name: "Genelab Ghnana",
    link: "https://genelabgh.com",
    description:
      "A private medical diagnostics molecular and general laboratory service",
  },
  {
    id: 2,
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
    id: 3,
    name: "Buildaf Ghana",
    link: "https://buildafghana.com/",
    description: "A leading real estate developer",
  },
  {
    id: 6,
    name: "UI/UX Board",
    link: "https://www.figma.com/file/Ka6T0tPqXXK5c34NUFqVaK/My-Board?type=design&node-id=0%3A1&mode=design&t=h5lFyNFn4yVeORLr-1",
    description: "A figma board with all my UI/UX designs on them ",
  },
];
