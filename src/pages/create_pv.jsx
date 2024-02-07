import { useState } from "react"
import Card from "../components/libs/Card"
import Header from "../components/libs/header"
import { dashboardStyle } from "./styles/style.tailwind"



// cheack if permission is valid for this route

export const CreatePV = ({ label }) => {

    const [newItem, setNewItem] = useState([{ id: 1, code: '', acctName: '', description: '', amount: '', chequeNo: '' }])

    const addItem = () => {
        setNewItem([...newItem, { id: newItem.id + 1, code: '', acctName: '', description: '', amount: '', chequeNo: '' }])
    }
    return (
        <>
            <Header title={label} user={{ name: 'wami', email: 'ikechukwu.wami' }} />

            <div className={dashboardStyle.container}>
                <div className={dashboardStyle.subcontainer}>
                    {/* <!-- Contact Form --> */}
                    <div className="rounded-lg  bg-white shadow p-4">
                        <form>
                            {/* Date */}
                            <div className={dashboardStyle.date_style} >
                                <label className="mb-2.5 text-2xl block text-black dark:text-white">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    placeholder="Select subject"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>

                            {/* Payee Details */}
                            <div className={'py-4 px-6.5'}>
                                <h3 className="text-2xl text-black dark:text-white pb-5">
                                    Payee Details
                                </h3>
                                {/* First Name */}
                                <div>
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your first name"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                                {/* Address */}
                                <div>
                                    <label className="mb-2.5 pt-5 block text-black dark:text-white">
                                        Address
                                    </label>
                                    <textarea
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        placeholder="Enter an address"
                                    >

                                    </textarea>
                                </div>
                            </div>

                            {/*Payment Details*/}
                            <div className={'py-4 px-6.5'}>
                                <h3 className="text-2xl text-black dark:text-white pb-5">
                                    Payment Details
                                </h3>

                                <div>
                                    {newItem.map((input, index) => (
                                        <div key={input.id} className="mb-4">
                                            <input
                                                type="text"
                                                value={input.value}
                                                onChange={(e) => handleChange(e, index)}
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <button type="button" onClick={addItem}>Add New Items</button>

                            </div>

                            <div className="p-6.5">
                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">

                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            placeholder="Enter your last name"
                                            required
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Email <span className="text-meta-1">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Select subject"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Subject
                                    </label>
                                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                                        <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                            <option value="">Type your subject</option>
                                            <option value="">USA</option>
                                            <option value="">UK</option>
                                            <option value="">Canada</option>
                                        </select>
                                        <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                                            <svg
                                                className="fill-current"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g opacity="0.8">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                        fill=""
                                                    ></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Message
                                    </label>
                                    <textarea
                                        rows={6}
                                        placeholder="Type your message"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    ></textarea>
                                </div>

                                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </>
    )
}
