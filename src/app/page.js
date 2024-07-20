import Image from "next/image";
// import styles from "./page.module.css";
import { HeaderMenu } from "@/components/HeaderMenu/HeaderMenu";
import { HoverCardMain } from "@/components/HoverCardMain/HoverCardMain";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "150dvh",
        margin: 0,
        padding: 0,
        width: "100%",
        border: "3px solid green",
      }}
    >
      <nav
        style={{
          width: "100%",
          height: "80px",
          background: "salmon",
          position: "fixed",
          zIndex: 999,
          top: 0,
          left: 0,
        }}
      >
        <ul style={{ display: "flex", listStyle: "none", gap: "2rem" }}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </nav>
      {/* <HeaderMenu /> */}
      <main style={{ marginTop: "80px" }}>
        <HoverCardMain />
      </main>
    </div>
  );
}
