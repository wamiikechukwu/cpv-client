import { useState } from 'react';
import { signin } from './styles/style.tailwind'
import { InputError, Notification } from '../components/libs/error';
import sendHttpReq from '../helper/httpRequest';
import circleIcon from '/spinner-solid.svg'
import LoadingButton from '../components/libs/Button';


import axios from 'axios';
import { Link } from 'react-router-dom';


export function Signin() {

    const [isEmailValid, setIsEmailValid] = useState(false);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({
        name: '',
        message: ''
    });

    async function submit(event) {
        event.preventDefault()

        setIsLoading(true)

        const formData = new FormData(event.target);
        const parseFormData = Object.fromEntries(formData.entries())

        if (!parseFormData.email.includes('@gmail.com')) {
            setIsEmailValid(true)
            setIsLoading(false)
            return
        }

        setIsEmailValid(false)

        try {
            const { data } = await axios.post('http://127.0.0.1:5000/api/signin', {
                email: parseFormData.email,
                password: parseFormData.password
            })

            setData(data)

            setIsLoading(false)

            if (data) {
                console.log('response', data)
                console.log('response')
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
        <div className={signin.container}>
            <Notification style={signin.notification} heading={isError.name} message={isError.message} />
            <div className={signin.subcontainer}>
                <div className={signin.headcontainter}>
                    <h2 className={signin.head}> Sign in to your account </h2>
                </div>
                <div className={signin.formcontainer}>
                    <form
                        onSubmit={submit}>
                        <div>
                            <label
                                className={signin.label}
                                htmlFor="email">
                                Email Address
                            </label>

                            <input
                                className={signin.input}
                                type="text"
                                id="email"
                                name="email"
                                placeholder="someone@hcihealthcare.com"
                                required
                            />
                        </div>
                        <InputError style={signin.red_text} message={'Invalid email domain used'} condition={isEmailValid} />
                        <div className={signin.padding_top}>
                            <label
                                className={signin.label}
                                htmlFor="password">
                                Password
                            </label>

                            <input
                                className={signin.input}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="**********"
                                required

                            />
                        </div>
                        <div className={signin.padding_top}>

                            <LoadingButton
                                buttonType={'submit'}
                                buttonClassName={signin.submit}
                                textClassName={'flex-auto'}
                                text={'Sign In'}
                                iconWidth={20}
                                iconHeight={20}
                                iconClassName={'self-center animate-spin'}
                                isLoading={isLoading}
                                icon={circleIcon} />
                        </div>
                    </form>
                    <div>
                        <p
                            className={signin.register_text}>
                            Not a member? {' '}

                            <Link
                                to='/signup'>
                                sign up
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}