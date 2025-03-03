import { useAuthentication } from "@/components/contexts/AuthenticationContext";
import { Button } from "@/components/ui/button";
import { initialValidation } from "@/lib/api/auth/General";
import { AuthenticationTexts } from "@/lib/texts";
import { RegisterRequest } from "@/lib/types";
import { validateLogin, validateRegister } from "@/lib/validation/validation";
import { FormEvent, useEffect, useState } from "react";

function Authenticate() {
  const { login, register } = useAuthentication();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (authFunction === "LOGIN") {
      if (!validateLogin(form.email, form.password).valid) {
        return;
      }
      login({
        email: form.email,
        password: form.password,
      });
    } else {
      if (!validateRegister(form.email, form.password, form.confirmPassword).valid) {
        return;
      }
      register(form);
    }
  }
  const [authFunction, setAuthFunctions] = useState<"LOGIN" | "SIGNUP">(
    "LOGIN"
  );
  const [form, setForm] = useState<RegisterRequest>({
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  return (
    <div className="flex justify-center flex-col gap-4 items-center h-screen overflow-hidden primary">
      <h1 className="text-4xl">
        We're so excited to have{" "}
        <span className="text-highlight font-bold">you</span> onboard!
      </h1>
      <div className="w-2/3 md:w-1/2 xl:w-1/3 h-2/3 p-4 secondary rounded-xl border border-highlight flex flex-col justify-between">
        <h1 className="basis-1/6 m-auto text-2xl font-bold">
          {AuthenticationTexts.header[authFunction]}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 h-full justify-between"
        >
          <div className="flex flex-col gap-2">
            <span>
              <label htmlFor="email">E-mail address</label>
              <input
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.currentTarget.value })
                }
                name="email"
                className="p-3 rounded-xl w-full"
                placeholder="john@shopper.com"
                type="email"
              />
            </span>
            <span>
              <label htmlFor="password">Password</label>
              <input
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.currentTarget.value })
                }
                name="password"
                className=" p-3 rounded-xl w-full"
                placeholder="Password"
                type="password"
              />
            </span>
            {authFunction === "SIGNUP" && (
              <>
                <span>
                  <label htmlFor="confirm">Confirm Password</label>
                  <input
                    value={form.confirmPassword}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        confirmPassword: e.currentTarget.value,
                      })
                    }
                    name="confirm"
                    className=" p-3 rounded-xl w-full"
                    placeholder="Confirm Password"
                    type="password"
                  />
                </span>
                <div className="grid grid-cols-2 gap-4">
                  <span>
                    <label htmlFor="firstname">First Name</label>
                    <input
                      value={form.firstName}
                      onChange={(e) =>
                        setForm({ ...form, firstName: e.currentTarget.value })
                      }
                      name="firstname"
                      className=" p-3 rounded-xl w-full"
                      placeholder="John"
                      type="text"
                    />
                  </span>
                  <span>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      value={form.lastName}
                      onChange={(e) =>
                        setForm({ ...form, lastName: e.currentTarget.value })
                      }
                      name="lastname"
                      className="p-3 rounded-xl w-full"
                      placeholder="Shopper"
                      type="text"
                    />
                  </span>
                </div>
              </>
            )}
          </div>
          <div className="flex flex-col justify-center mt-2">
            <button className="card-l highlight" type="submit">
              {AuthenticationTexts.submit[authFunction]}
            </button>

            <Button
              variant={"link"}
              type="button"
              onClick={
                authFunction === "LOGIN"
                  ? () => {
                      setAuthFunctions("SIGNUP");
                    }
                  : () => setAuthFunctions("LOGIN")
              }
            >
              <p className="underline">
                {AuthenticationTexts.switch[authFunction]}
              </p>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Authenticate;
