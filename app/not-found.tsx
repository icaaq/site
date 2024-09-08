import Link from "next/link";
import { Main } from "./components";

export default function NotFound() {
  return (
    <Main>
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </Main>
  );
}
