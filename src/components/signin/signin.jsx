import { useState } from 'react';
import { Style } from './../signin/style.tailwind'
import {InputError, Notification} from './../libs/error';

export default function Signin() {

    const [isEmailValid, setIsEmailValid] = useState(false)
    const [userAuth, setUserAuth] = useState()

    function submit(event) {
        event.preventDefault()

        const formData = new FormData(event.target);
        const parseFormData = Object.fromEntries(formData.entries())

        if (!parseFormData.email.includes('@hcihealthcare.ng')) {
            setIsEmailValid(true)
            return

        }

        setIsEmailValid(false)

        console.log(parseFormData)
        // setUserAuth(parseFormData.email)

        //     // const signinDetails = {
        //     //     email: userEmail,
        //     //     password: userPassword
        //     // }

        //     // axios.post('/signin', {
        //     //     email: userEmail,
        //     //     password: userPassword
        //     // }).then(function (response) {
        //     //     // handle success
        //     //     console.log(response);
        //     //     setStatus({code: response.data.message})

        //     // }).catch(function (error) {
        //     //     // handle error
        //     //     setStatus({code: error.response.data.message})
        //     //     console.log("this is from state", status.code);
        //     //     console.log(error.response.data.status);

        //     // })



        //     // const request = await fetch('http://127.0.0.1:5000/api/signin',{
        //     //     method: "POST",
        //     //     headers: {'Content-Type': 'application/json'},
        //     //     body: JSON.stringify(signinDetails)
        //     // })


    }
    return (
        <div className={Style.container}>
            <Notification style={Style.notification} heading={'test'} message={userAuth} />
            <div className={Style.subcontainer}>
                <div className={Style.headcontainter}>
                    <h2 className={Style.head}> Sign in to your account </h2>
                </div>
                <div className={Style.formcontainer}>
                    <form
                        onSubmit={submit}>
                        <div>
                            <label
                                className={Style.label}
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
                            />
                        </div>
                        <InputError style={Style.red_text} message={'Invalid email domain used'} condition={isEmailValid} />
                        <div className={Style.padding_top}>
                            <label
                                className={Style.label}
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

                            />
                        </div>
                        <div className={Style.padding_top}>
                            <button
                                type='submit'
                                className={Style.submit}>
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div>
                        <p className={Style.register_text}>Not a member?
                            {/* No link to signup yet */}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}