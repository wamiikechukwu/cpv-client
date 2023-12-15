import { useState } from 'react';
import { Style } from './../signin/style.tailwind'
import { InputError, Notification } from './../libs/error';
import sendHttpReq from '../../helper/httpRequest';
import circleIcon from '/spinner-solid.svg'
import LoadingButton from '../libs/Button';

import axios from 'axios';


export default function Signin() {

    const [isEmailValid, setIsEmailValid] = useState(false);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({
        name:'',
        message: ''
    });

    async function submit(event) {
        event.preventDefault()
        
        setIsLoading(true)

        const formData = new FormData(event.target);
        const parseFormData = Object.fromEntries(formData.entries())

        if (!parseFormData.email.includes('@hcihealthcare.ng')) {
            setIsEmailValid(true)
            return
        }

        setIsEmailValid(false)

        try {
            const response = await axios.post('http://127.0.0.1:5000/api/signin', {
                email: parseFormData.email,
                password: parseFormData.password
            })

            setData(response)
            setIsLoading(false)

        } catch (error) {
            // setIsError(error.message || 'something went wrong')
            setIsError({
                name: error.name,
                message: error.message
            })
            setIsLoading(false)
            console.log(error)


        }
    }
    return (
        <div className={Style.container}>
            <Notification style={Style.notification} heading={isError.name} message={isError.message} />
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
                        
                            <LoadingButton
                                buttonType={'submit'}
                                buttonClassName={Style.submit}
                                textClassName={'flex-auto'}
                                text={'Sign In'} 
                                iconWidth={20}
                                iconHeight={20}
                                iconClassName={'self-center animate-spin'}
                                isLoading={isLoading}
                                icon={circleIcon}/>
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