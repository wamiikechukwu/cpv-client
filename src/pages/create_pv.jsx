import { useState } from "react"
import Card from "../components/libs/Card"
import Header from "../components/libs/header"
import { dashboardStyle } from "./styles/style.tailwind"
import { FiPlus } from "react-icons/fi";
import { LoadingButton, IconButton } from "../components/libs/Button";




// cheack if permission is valid for this route

export const CreatePV = ({ label }) => {

    const [newItem, setNewItem] = useState([{ id: 1, code: '', acctName: '', description: '', amount: '', chequeNo: '' }])

    const addItem = () => {
        setNewItem([...newItem, { id: newItem.id + 1, code: '', acctName: '', description: '', amount: '', chequeNo: '' }])
    }

    const createPv = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target);
        const parseFormData = Object.fromEntries(formData.entries())

        // TODO validate code input to accept only digits
        // TODO check for empty inputs
        // button to remove items

        console.log(parseFormData)
        console.log(formData)
    }
    return (
        <>
            <Header title={label} user={{ name: 'wami', email: 'ikechukwu.wami' }} />

            <div className={dashboardStyle.container}>
                <div className={dashboardStyle.subcontainer}>
                    {/* <!-- Create payment voucher --> */}
                    <div className="rounded-lg  bg-white shadow p-4">
                        <form
                            onSubmit={createPv}>
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
                                    <label className="mb-2.5 pt-5 block text-black ">
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
                                <h3
                                    className="text-2xl text-black pb-5">
                                    Payment Details
                                </h3>

                                <div>
                                    {newItem.map((input, index) => (
                                        <div className="flex">
                                            {/* Code */}
                                            <div>
                                                <label
                                                    className="mb-2.5 pt-5 block text-black"
                                                    htmlFor={`code-${index}`}>
                                                    Code
                                                </label>
                                                <input
                                                    type="number"
                                                    id={`code-${index}`}
                                                    name={`code-${index}`}
                                                    min={0}
                                                    className="w-[100px] rounded border-[1.5px] border-stroke font-medium py-3 px-2 mr-1"
                                                />
                                            </div>

                                            {/* account name */}
                                            <div>
                                                <label
                                                    className="mb-2.5 pt-5 block text-black"
                                                    htmlFor={`acctName-${index}`}>
                                                    Account Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id={`acctName-${index}`}
                                                    name={`acctName-${index}`}
                                                    className="w-[150px] rounded border-[1.5px] border-stroke font-medium py-3 px-2 ml-1 mr-1"
                                                />
                                            </div>

                                            {/* description */}
                                            <div className="flex-1 mr-3">
                                                <label
                                                    className="mb-2.5 pt-5 block text-black"
                                                    htmlFor={`descrip-${index}`}>
                                                    Description
                                                </label>
                                                <textarea
                                                    type="text"
                                                    id={`descrip-${index}`}
                                                    name={`descrip-${index}`}
                                                    className="w-full rounded border-[1.5px] border-stroke font-medium px-2 ml-1">
                                                </textarea>
                                            </div>

                                            {/* Amount */}
                                            <div>
                                                <label
                                                    className="mb-2.5 pt-5 block text-black"
                                                    htmlFor={`amt-${index}`}>

                                                    Amount
                                                </label>
                                                <input
                                                    type="number"
                                                    min="0"
                                                    id={`amt-${index}`}
                                                    name={`amt-${index}`}
                                                    className="w-[150px] rounded border-[1.5px] border-stroke font-medium py-3 px-2 mr-1"
                                                />
                                            </div>

                                            {/* Cheque No. */}
                                            <div>
                                                <label
                                                    className="mb-2.5 pt-5 block text-black"
                                                    htmlFor={`cheqNo-${index}`}>
                                                    cheque No.
                                                </label>
                                                <input
                                                    type="number"
                                                    min="0"
                                                    id={`cheqNo-${index}`}
                                                    name={`cheqNo-${index}`}
                                                    className="w-[150px] rounded border-[1.5px] border-stroke font-medium py-3 px-2 ml-1"
                                                />
                                            </div>

                                        </div>
                                    ))}
                                </div>

                                {/* Add new button */}
                                {/* TODO MAKE A COMPONENT */}
                                <div>
                                    <IconButton
                                        buttonType={'button'}
                                        text={'Add New Items'}
                                    />
                                    {/* <button
                                        className={dashboardStyle.add_new_item_btn}
                                        type="button"
                                        onClick={addItem}>
                                        <FiPlus className="mr-2" />

                                    </button> */}
                                </div>


                            </div>



                            <div>

                            </div>
                            <LoadingButton
                                buttonType={'submit'}
                                text={'create payment PV'}
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </>
    )
}
