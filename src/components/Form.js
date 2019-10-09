import React, { useEffect, useState } from 'react';
import '../styles/tailwind.css';


function Form() {

    const [inputValues, setInputs] = useState({ firstName: "", lastName: "", radioChoice: "", selectChoice: "", textarea: "" });

let setValue = (e) => {
    let name = e.name;
    let value = e.value;
    setInputs({
        ...inputValues,
        [name]: value
    });
}

let submit = (e) => {
    e.preventDefault();
    console.log(inputValues);
}

return (
    <React.Fragment>
        <h1 className='text-center text-lg mt-6 font-bold'>Tailwind Form</h1>
        <form className="lg:w-2/5 sm:w-full rounded bg-gray-200 mx-auto my-10 p-10" action="#" method="post">
            <div className="mb-4 mb-8">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">First name:</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="firstName" id="first-name" value={inputValues.firstName} tabIndex="1" onChange={e => setValue(e.target)} />
            </div>

            <div className="mb-4 mb-8">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Last name:</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="lastName" id="last-name" value={inputValues.lastName} tabIndex="1" onChange={e => setValue(e.target)} />
            </div>

            <div className="w-2/4 mb-8">
                <h4 className="block text-gray-700 text-sm font-bold mb-2">Radio Button Choice</h4>
                <div className="flex items-center flex-row-reverse justify-end">
                    <label htmlFor="radio-choice-1">Choice 1</label>
                    <input className="mr-2" type="radio" name="radioChoice" id="radio-choice-1" tabIndex="2" value="choice-1" onChange={e => setValue(e.target)} />
                </div>
                <div className="flex items-center flex-row-reverse justify-end">
                    <label htmlFor="radio-choice-2">Choice 2</label>
                    <input className="mr-2" type="radio" name="radioChoice" id="radio-choice-2" tabIndex="3" value="choice-2" onChange={e => setValue(e.target)} />
                </div>
            </div>

            <div className="sm:w-auto md:w-full mb-6 lg:2/4 xl:w-2/4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="select-choice">Select Dropdown Choice:</label>
                <select className="w-full rounded" name="selectChoice" id="select-choice" onChange={e => setValue(e.target)}>
                    <option className="text-gray-700" value="Choice 1">Choice 1</option>
                    <option className="text-gray-700" value="Choice 2">Choice 2</option>
                    <option className="text-gray-700" value="Choice 3">Choice 3</option>
                </select>
            </div>

            <div className="mb-8 w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="textarea">Textarea:</label>
                <textarea className="w-full" rows="8" name="textarea" id="textarea" onChange={e => setValue(e.target)}></textarea>
            </div>

            <div className="text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={submit} value="Submit">Submit</button>
            </div>
        </form>

    </React.Fragment>

);
}

export default Form;