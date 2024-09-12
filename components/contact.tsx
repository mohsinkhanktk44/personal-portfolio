// "use client";

// import React, { useRef } from "react";
// import SectionHeading from "./section-heading";
// import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";
// import SubmitBtn from "./submit-btn";
// import emailjs from "emailjs-com";
// import toast from "react-hot-toast";

// export default function Contact() {
//   const { ref } = useSectionInView("Contact");
//   const formRef = useRef(); // Use useRef to access form data

//   const sendEmail = (e) => {
//     e.preventDefault();

//     // Replace with your EmailJS credentials
//     emailjs
//       .sendForm(
//         "service_nfebp3h", // Your EmailJS service ID
//         "template_mj892x6", // Your EmailJS template ID
//         formRef.current,
//         "VxWtf267U6U53wm6m" // Your EmailJS user ID
//       )
//       .then(
//         (result) => {
//           toast.success("Message sent successfully!");
//           console.log(result.text);
//         },
//         (error) => {
//           toast.error("Failed to send the message. Please try again.");
//           console.log(error.text);
//         }
//       );

//     // Optionally reset the form after submission
//     e.target.reset();
//   };

//   return (
//     <motion.section
//       id="contact"
//       ref={ref}
//       className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       viewport={{ once: true }}
//     >
//       <SectionHeading>Contact me</SectionHeading>

//       <p className="text-gray-700 -mt-6 dark:text-white/80">
//         Please contact me directly at{" "}
//         <a className="underline" href="mailto:mohsinkhanktk44@gmail.com">
//           mohsinkhanktk44@gmail.com
//         </a>{" "}
//         or through this form.
//       </p>

//       <form
//         ref={formRef}
//         onSubmit={sendEmail}
//         className="mt-10 flex flex-col dark:text-black"
//       >
//         <input
//           className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
//           name="senderEmail"
//           type="email"
//           required
//           maxLength={500}
//           placeholder="Your email"
//         />
//         <input
//           className="h-14 px-4 my-3 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
//           name="senderNumber"
//           type="text"
//           maxLength={500}
//           placeholder="Your Phone Number"
//         />
//         <textarea
//           className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
//           name="message"
//           placeholder="Your message"
//           required
//           maxLength={5000}
//         />
//         <SubmitBtn />
//       </form>
//     </motion.section>
//   );
// }

"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef(null); // Initialize useRef with null

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (formRef.current) {
      // Ensure formRef.current is not undefined
      emailjs
        .sendForm(
          "service_nfebp3h", // Your EmailJS service ID
          "template_mj892x6", // Your EmailJS template ID
          formRef.current,
          "VxWtf267U6U53wm6m" // Your EmailJS user ID
        )
        .then(
          (result) => {
            toast.success("Message sent successfully!");
            console.log(result.text);
          },
          (error) => {
            toast.error("Failed to send the message. Please try again.");
            console.log(error.text);
          }
        );

      // Optionally reset the form after submission
      e.target.reset();
    } else {
      console.error("Form reference is not available.");
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:mohsinkhanktk44@gmail.com">
          mohsinkhanktk44@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <input
          className="h-14 px-4 my-3 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderNumber"
          type="text"
          maxLength={500}
          placeholder="Your Phone Number"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
