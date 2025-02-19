import { Button } from "@/components/ui/button";
import checkAuth from "@/lib/api/auth/General";
import logIn from "@/lib/api/auth/LogIn";
import Register from "@/lib/api/auth/Register";
import { AuthenticationTexts } from "@/lib/texts";
import { RegisterRequest } from "@/lib/types";
import { FormEvent, useEffect, useState } from "react";
import { replace } from "react-router";

function Authenticate() {
    async function initialValidation() {
        const res = await checkAuth()
        if (res) {
            window.location.replace("/")
        }
        else {
            console.log("nem fasza")
        }
    }
    useEffect(() => {
        initialValidation()
    }, [])
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (authFunction === "LOGIN") {
            const res = await logIn({
                email: form.email,
                password: form.password
            })
            if (res) {
                if (res === true) console.log("fasza");
                else console.log("nem fasza");
            }
            return
        }
        const res = await Register(form)
        if (res) {
            if (res === true) console.log("fasza");
            else console.log("nem fasza");
        }
        return

    }
    const [authFunction, setAuthFunctions] = useState<"LOGIN" | "SIGNUP">("LOGIN")
    const [form, setForm] = useState<RegisterRequest>({
        confirmPassword: "",
        email: "",
        firstName: "",
        lastName: "",
        password: ""
    })
    return (
        <div className="flex justify-center items-center h-screen overflow-hidden primary">

        <div className="w-2/3 md:w-1/2 xl:w-1/3 h-2/3 p-4 secondary rounded-xl stroke flex flex-col justify-between">
        <h1 className="basis-1/6 m-auto text-2xl font-bold">{AuthenticationTexts.header[authFunction]}</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 h-full justify-between">
                <div className="flex flex-col gap-2">

                <span>
                    <label htmlFor="email">E-mail address</label>
                <input value={form.email} onChange={(e) => setForm({...form, email: e.currentTarget.value})} name="email" className="primary stroke p-3 rounded-xl w-full" placeholder="john@shopper.com" type="email"/>
                </span>
                <span>
                    <label htmlFor="password">Password</label>
                <input value={form.password} onChange={(e) => setForm({...form, password: e.currentTarget.value})}  name="password" className="primary stroke p-3 rounded-xl w-full" placeholder="Password" type="password"/>
                </span>
                {authFunction === "SIGNUP" &&
                <>
                <span>
                    <label htmlFor="confirm">Confirm Password</label>
                <input value={form.confirmPassword} onChange={(e) => setForm({...form, confirmPassword: e.currentTarget.value})} name="confirm" className="primary stroke p-3 rounded-xl w-full" placeholder="Confirm Password" type="password"/>
                </span>
                <div className="grid grid-cols-2 gap-4">
                <span>
                    <label htmlFor="firstname">First Name</label>
                <input value={form.firstName} onChange={(e) => setForm({...form, firstName: e.currentTarget.value})}  name="firstname" className="primary stroke p-3 rounded-xl w-full" placeholder="John" type="text"/>
                </span>
                <span>
                    <label htmlFor="lastname">Last Name</label>
                <input value={form.lastName} onChange={(e) => setForm({...form, lastName: e.currentTarget.value})}  name="lastname" className="primary stroke p-3 rounded-xl w-full" placeholder="Shopper" type="text"/>
                </span>
                </div>
                </>
                }

                </div>
                <div className="flex flex-col justify-center mt-2">
                    <Button variant={"default"} type="submit">
                        {AuthenticationTexts.submit[authFunction]}
                    </Button>
                    
                    <Button variant={"link"} type="button" onClick={authFunction === "LOGIN" ? () => {setAuthFunctions("SIGNUP")} : () => setAuthFunctions("LOGIN")}>
                        <p className="underline">{AuthenticationTexts.switch[authFunction]}</p>
                    </Button>
                    
                </div>
            </form>
            
        </div>
        </div>
    );
}

export default Authenticate;