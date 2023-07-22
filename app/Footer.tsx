import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>
        Created for the{" "}
        <Link href="https://fireship.io">Fireship Next.js 13 Full Course</Link>
      </p>
      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>{" "}
        |
        <li>
          <Link href={"https://www.youtube.com/@Fireship"}>YouTube</Link>
        </li>{" "}
        |
        <li>
          <Link href={"/login"}>Source Code</Link>
        </li>{" "}
        |
        <li>
          <Link href={"https://nextjs.org"}>NextJS Docs</Link>
        </li>
      </ul>
    </footer>
  );
}
