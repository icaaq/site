import Link from "next/link";
import { Main } from "./components";

export default function Home() {
  return (
    <Main>
      <h1 aria-label="Isaac AB, I, C, A, A, Q">Icaaq AB</h1>
      <p>A company founded and operated by Isak Lagerblad since 2018.</p>
      <p>
        Isak is a frontend developer and architect with a strong passion for
        creating semantic, accessible, and well-structured code that is easy to
        understand and maintain, backed by 20 years of experience.
      </p>
      <hr />
      <p>
        I&apos;m open to exploring new opportunities, particularly those that
        make a meaningful impact on society.{" "}
        <Link href="/contact">Here you can find my contact details.</Link>
      </p>
    </Main>
  );
}
