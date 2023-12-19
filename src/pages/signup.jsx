import { InputError } from '../components/libs/error'
import { signUpStyle } from './styles/style.tailwind'
import { Notification } from '../components/libs/error';
import LoadingButton from '../components/libs/Button';
import circleIcon from '../assets/spinner-solid.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


export default function Signup() {
    const [doesPasswordMatch, setDoesPasswordMatch] = useState(false)
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({
        name: '',
        message: ''
    });

    const navigate = useNavigate();

    async function submit(event) {
        event.preventDefault()

        setIsLoading(true)

        const formData = new FormData(event.target);
        const parseFormData = Object.fromEntries(formData.entries())

        // check if password matches
        if (parseFormData.password !== parseFormData.confirm_password) {
            setDoesPasswordMatch(true)
            return
        }

        setDoesPasswordMatch(false)

        // network call
        try {

            const { data } = await axios.post('/signup', {
                firstname: parseFormData.firstname,
                lastname: parseFormData.lastname,
                email: parseFormData.email,
                password: parseFormData.password,

            })

            setData(data)

            setIsLoading(false)

            // run if user is registered
            if (data) {
                console.log(data)
                navigate('/signin')
            }

        } catch (error) {
            if (error.response?.data) {
                setIsError({
                    name: error.response.data.status,
                    message: error.response.data.message
                })
                console.log('true')
            } else {
                setIsError({
                    name: error.name,
                    message: error.message
                })
                console.log('false')

            }

            setIsLoading(false)
        }


    }
    return (
        <>
            <Notification style={signUpStyle.notification} heading={isError.name} message={isError.message} />
            <div className={signUpStyle.container}>

                <div className={signUpStyle.text_container}>
                    <h2 className={signUpStyle.text_style}>Sign Up</h2>
                </div>

                <form
                    onSubmit={submit}
                    className={signUpStyle.form_style}>

                    <div className={signUpStyle.subcontainer}>
                        <div>
                            <label
                                htmlFor="firstname"
                                className={signUpStyle.label}>
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="firstname"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className={signUpStyle.input}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="lastname"
                                className={signUpStyle.label}>
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    autoComplete="family-name"
                                    className={signUpStyle.input}
                                    required
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="email"
                                className={signUpStyle.label}>
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    className={signUpStyle.input}
                                    required
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="password"
                                className={signUpStyle.label}>
                                password
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className={signUpStyle.input}
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="confirm_password"
                                className={signUpStyle.label}>
                                confirm password
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="password"
                                    name="confirm_password"
                                    id="confirm_password"
                                    className={signUpStyle.input}
                                    required
                                />
                                <InputError condition={doesPasswordMatch} style={'text-red-600'} message={'password does not match'} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">

                        <LoadingButton
                            buttonType={'submit'}
                            buttonClassName={signUpStyle.button}
                            text={'sign up!'}
                            textClassName={'flex-auto'}
                            icon={circleIcon}
                            isLoading={isLoading}
                            iconWidth={20}
                            iconHeight={20}
                            iconClassName={'self-center animate-spin'}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}