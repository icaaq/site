import { Main } from "../components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Icaaq AB - Contact",
  description:
    "Feel free to reach out to me at info@icaaq.com or by phone at +46 73 313 70 06",
};

const Contact = () => {
  return (
    <Main>
      <h1>Contact</h1>
      <p>
        Feel free to reach out to me by{" "}
        <a href="mailto:info@icaaq.com">email</a> or by{" "}
        <a href="tel:+46 73 313 70 06">phone</a>.
      </p>
    </Main>
  );
};

export default Contact;
