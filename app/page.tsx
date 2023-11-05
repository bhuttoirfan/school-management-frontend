import Login from "./login/page";
import { useRouter } from "next/router";

export default function home() {
  return (
    <>
      <h5>Hello World</h5>
      <Login />
    </>
  );
}
