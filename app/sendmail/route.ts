import { NextResponse, NextRequest } from "next/server";
import Contact from "@/components/email";
// import mailchimp from "@mailchimp/mailchimp_marketing";
import { render } from "@react-email/render";
import sgMail from "@sendgrid/mail";
// import md5 from "md5";
// import Contact from "@/app/contact/page";
import { formDataProps } from "@/types/props";
const SG_API_KEY = process.env.SENDGRID_API_KEY;
// const MP_API_KEY = process.env.MAILCHIMP_API_KEY;
// const MP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
// const MP_API_SERVER = process.env.MAILCHIMP_API_SERVER;

//SendGrid Setup Call
sgMail.setApiKey(SG_API_KEY!);

//Mailchimp Setup Call
// mailchimp.setConfig({
//   apiKey: MP_API_KEY,
//   server: MP_API_SERVER,
// });

// Create an api key in sendgrid and store someplace safe
type ResponseData = {
  status?: string;
  message?: string;
};

export async function POST(request: Request) {
  let response: ResponseData = {};
  const formData: formDataProps = await request.json();
  const { phoneNumber, email, fullName, message, messageID } = formData;
  // React Email Call
  const emailHtml = render(Contact({ formData }));
  // //   const listId = MP_AUDIENCE_ID!;
  // //   const subscriberHash = md5(emailAddress.toLowerCase());
  // //   const subscribingUser = {
  // //     firstName: firstName,
  // //     lastName: lastName,
  // //     email: emailAddress,
  // //     phone: contact,
  // //     text: message,
  //   };

  //   // console.log(
  //   //    form.firstName,
  //   //    form.lastName,
  //   //    form.emailAddress,
  //   //    form.contact,
  //   //    form.messageID,
  //   //    form.message,
  //   //    form.budget,
  //   //    form.project
  //   // );

  const msg = {
    to: "kevskum2002@gmail.com",
    cc: "kelvin@kelvinworld.com",
    bcc: "julius@webncos.com",
    from: "support@kelvinworld.com",
    subject: `New Client Message  📬`,
    html: emailHtml,
  };

  //Sendgrid Works...
  await sgMail
    .send(msg)
    .then(() => {
      response = {
        status: "success",
        message: "Your message was sent. I'll be in contact shortly.",
      };
    })
    .catch((error) => {
      response = {
        status: "error",
        message: `Message failed to send with error, ${error}`,
      };
      console.log(error);
    });

  //   //This is to check is the email from the form is subscribe or not
  //   await mailchimp.lists.setListMember(listId, subscriberHash, {
  //     email_address: subscribingUser.email,
  //     status_if_new: "subscribed",
  //     merge_fields: {
  //       FNAME: subscribingUser.firstName,
  //       LNAME: subscribingUser.lastName,
  //       PHONE: subscribingUser.phone,
  //       NOTES: subscribingUser.text,
  //     },
  //   });
  return NextResponse.json(response);
}
