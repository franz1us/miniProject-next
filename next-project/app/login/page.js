"use client";

import { useFormState } from "react-dom";
import { login } from "./action";

function Page() {
  const initState = {
    message: "",
  }

  const [state, formAction] = useFormState(login, initState);

  return (
    <form action={formAction}>
      <div>
        Email
        <input
          type="text"
          name="email"
          placeholder=" email"
          style={{ color: "black" }}
        />
      </div>
      <div>
        Password
        <input
          type="password"
          name="password"
          placeholder=" password"
          style={{ color: "black" }}
        />
      </div>
      <div>Message: {state.message}</div>
      <button>Login</button>
    </form>
  );
}

export default Page;
