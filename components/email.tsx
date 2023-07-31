import * as React from "react";

import { Html } from "@react-email/html";
import { Container } from "@react-email/container";
import { Text } from "@react-email/text";
import { Hr } from "@react-email/hr";
import { Heading } from "@react-email/heading";
import { Tailwind } from "@react-email/tailwind";
import { Link } from "@react-email/link";
import { formDataProps } from "@/types/props";
// import { Img } from "@react-email/img";

export default function Contact({ formData }: { formData: formDataProps }) {
  //copyright date
  const now = new Date();
  let year = now.getFullYear();

  //Client Details
  const { fullName, email, phoneNumber, messageID, message } = formData;
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >
      <Html lang="en" className="text-lg">
        <Container className="">
          <Heading as="h3" className="font-PolySansBulky font-black">
            Client Details📋
          </Heading>
          <Hr />
          <Text className="">
            <b>Client Name:</b> {fullName}
          </Text>
          <Text className="">
            <b>Client Phone Number:</b>{" "}
            <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
          </Text>
          <Text className="">
            <b>Client Email:</b> {email}
          </Text>
          {/* <Text className="">
            <b>Client Service:</b> {services}
          </Text> */}
          <Text className="">
            <b>Client ID:</b> {messageID}
          </Text>
          <Text className="">
            <b>Client Message:</b> {message}
          </Text>
          <Hr />
          <Text className="text-primary-200">
            © {year}. Made With Love By{" "}
            <Link href="https://kelvinworld.com" className="text-blue-700">
              Kelvin Kumordzi
            </Link>
          </Text>
        </Container>
      </Html>
    </Tailwind>
  );
}
// export function RecuitEmail(props: { form: any }) {
//   //copyright date
//   const now = new Date();
//   let year = now.getFullYear();

//   //Client Details
//   const { firstName, lastName, emailAddress } = props.form;
//   return (
//     <Tailwind
//       config={{
//         theme: {
//           extend: {
//             colors: {
//               brand: "#007291",
//             },
//           },
//         },
//       }}
//     >
//       <Html lang="en" className="text-lg">
//         <Container className="">
//           <Heading as="h3" className="font-PolySansBulky font-black">
//             New Recuit Details📋
//           </Heading>
//           <Hr />
//           <Text className="">
//             <b>Full Name:</b> {firstName} {lastName}
//           </Text>
//           <Text className="">
//             <b>Email Address:</b> {emailAddress}
//           </Text>
//           <Hr />
//           <Text className="text-primary-200">
//             © {year}. Made With Love By{" "}
//             <Link href="https://iamjulius.com" className="text-blue-700">
//               Julius Eghan
//             </Link>
//           </Text>
//         </Container>
//       </Html>
//     </Tailwind>
//   );
// }
// export function EmailForRecuit(props: { form: any }) {
//   //copyright date
//   const now = new Date();
//   let year = now.getFullYear();

//   //Client Details
//   const { firstName, lastName } = props.form;
//   return (
//     <Tailwind
//       config={{
//         theme: {
//           extend: {
//             colors: {
//               brand: "#007291",
//             },
//           },
//         },
//       }}
//     >
//       <Html lang="en" className="text-lg">
//         <Container className="">
//           <Hr />
//           <Img src="../public/Logo.png" alt="Logo" width="98" height="98" />
//           <Hr />
//           <Heading as="h3" className="font-PolySansBulky font-black">
//             You Have Been Added To The List📋
//           </Heading>
//           <Hr />
//           <Text className="">
//             <b>Hello,</b> {firstName} {lastName}.You have been successfully
//             added to the webncos recuit list. Your instructions to follow will
//             be sent to you as soon as you submit the following details.
//           </Text>
//           <Hr />
//           <Text className="">
//             We Will need you to send the following details to our recuit email{" "}
//             <Link href={`mailto:recuit@webncos.com`}>recuit@webncos.com</Link>
//             <b> - Full Name</b>
//             <b> - Contact</b>
//             <b> - Portfolio Site</b>
//             <b> - LinkedIn Profile</b>
//             <b> - Twitter Profile</b>
//             <b> - Location</b>
//             <b> - Current Work</b>
//             <b> - Tech Stack</b>
//           </Text>
//           <Hr />
//           <Text className="">
//             For More Information Contact Us at
//             <Link href={`mailto:recuit@webncos.com`}>
//               support@kelvinworld.com
//             </Link>
//           </Text>
//           <Text className="">
//             Join Our Telegram Channel
//             <Link href={`https://t.me/webncos`}>webncos telegram</Link>
//           </Text>
//           <Hr />
//           <Text className="text-primary-200">
//             © {year}. Made With Love By{" "}
//             <Link href="https://kelvinworld.com" className="text-blue-700">
//               Julius Eghan
//             </Link>
//           </Text>
//         </Container>
//       </Html>
//     </Tailwind>
//   );
// }
// export function EmailForCourseWaitList({
//   formData,
// }: {
//   formData: waitlistformProps;
// }) {
//   //copyright date
//   const now = new Date();
//   let year = now.getFullYear();

//   //Client Details
//   const { emailAddress } = formData;
//   return (
//     <Tailwind
//       config={{
//         theme: {
//           extend: {
//             colors: {
//               brand: "#007291",
//             },
//           },
//         },
//       }}
//     >
//       <Html lang="en" className="text-lg">
//         <Container className="">
//           <Hr />
//           <Img
//             src="https://www.webncos.com/Logo.png"
//             alt="Logo"
//             width="42"
//             height="42"
//           />
//           <Hr />
//           <Heading as="h3" className="font-PolySansBulky font-black">
//             You Have Been Added To The List📋
//           </Heading>
//           <Hr />
//           <Text className="">
//             <b>Hello,</b>.Your Email : {emailAddress} have been successfully
//             added to the webncos Course waitlist. You will be notified when
//             courses are ready.
//           </Text>
//           <Hr />
//           <Text className="">
//             For More Information Contact Us at -
//             <Link href={`mailto:support@webncos.com`}>
//               {" "}
//               support@webncos.com
//             </Link>
//           </Text>
//           <Text className="">
//             Join Our Telegram Channel -
//             <Link href={`https://t.me/webncos`}> webncos telegram</Link>
//           </Text>
//           <Hr />
//           <Text className="text-primary-200">
//             © {year}. Made With Love By{" "}
//             <Link href="https://iamjulius.com" className="text-blue-700">
//               Julius Eghan
//             </Link>
//           </Text>
//         </Container>
//       </Html>
//     </Tailwind>
//   );
// }
