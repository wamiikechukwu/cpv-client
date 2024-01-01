import { Style } from "./style.tailwind"
import { useState, useContext } from "react"


export default function signin(){
    return(
        <div className={Style.container}>
            <div className={Style.subcontainer}>
                <div className={Style.headcontainter}>
                    <h2 className={Style.head}> Sign in to your account </h2>
                </div>
                <div className={Style.formcontainer}>
                    {status?.code}
                    <form onSubmit={submit} className={Style.form}>
                        <label
                            className={Style.lable}
                            htmlFor="email">
                            Email Address
                        </label>
                        <input
                            className={Style.input}
                            type="text"
                            id="email"
                            name="email"
                            placeholder="someone@hcihealthcare.com"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={userEmail}
                        />

                        <label
                            className={Style.lable}
                            htmlFor="password">
                            Password
                        </label>

                        <input
                            className={Style.input}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="**********"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            value={userPassword}
                        />

                        <div>
                            <button type='submit' className={Style.submit}> Sign in</button>
                        </div>
                    </form>
                    <div>
                        <p className={Style.register_text}>Not a member?{' '}
                            <Link href="/signup" className={Style.register_link}> Create an account </Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}