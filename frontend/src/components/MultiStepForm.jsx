import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react';

export default function MultiStepForm() {

    const stepper = [
        {step:1, name: 'Basic Info'},
        {step:2, name: 'Career Info'},
        {step:3, name: 'Health Info'},
        {step:4, name: 'Finance Info'}
    ]

    const [step, setStep] = useState(1);
    const totalSteps = 4;
    
    const handleNext = () => {
        setStep(prevStep => Math.min(prevStep + 1, totalSteps));
    };
    
    const handlePrevious = () => {
        setStep(prevStep => Math.max(prevStep - 1, 1));
    };

    const handleStepperClick = (step) => {
        setStep(step)
    }


  return (
    <>

        <ol className="lg:flex items-center w-full space-y-4 lg:space-x-8 lg:space-y-0">
      
            {stepper.map((item)=>(
                <li onClick={() => handleStepperClick(item.step)} key={item.step} id={item.step} className=" flex-1">
                    <div className={item.step==step? "border-l-2 flex flex-col border-t-0 pl-4 pt-0 border-solid border-indigo-600 font-medium lg:pt-4 lg:border-t-2 lg:border-l-0 lg:pl-0" 
                        : "border-l-2 flex flex-col border-t-0 pl-4 pt-0 border-solid border-gray-600 font-medium lg:pt-4 lg:border-t-2 lg:border-l-0 lg:pl-0"
                    }>
                        <span className={item.step==step? "text-sm lg:text-base text-indigo-600" 
                            : "text-sm lg:text-base text-gray-600"
                        }>Step {item.step}</span>
                        <h4 className="text-base lg:text-lg text-gray-900">{item.name}</h4>
                    </div>
                </li>
            ))}
        </ol>
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">


          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            
            {step === 1 && (
                <>
                <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="janesmith"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

            <div className="col-span-full">
                <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                About
                </label>
                <div className="mt-2">
                <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    defaultValue={''}
                />
                </div>
                <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about yourself.</p>
            </div>
            </>
            ) }

            
            {step === 2 && (
                <>
                    <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    </div>
                </>
            )}
            

            {step === 3 && (
                <>
                    <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                            Country
                        </label>
                        <div className="mt-2 grid grid-cols-1">
                            <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                            <option>Canada</option>
                            <option>United States</option>
                            <option>Mexico</option>
                            </select>
                            <ChevronDownIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                        </div>
                    </div>
                </>
            )}

            {step === 4 && (
                <>
                    <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                            Country
                        </label>
                        <div className="mt-2 grid grid-cols-1">
                            <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                            </select>
                            <ChevronDownIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                        </div>
                    </div>
                </>
            )}
            

          </div>


            {/* <fieldset>
              <legend className="text-sm/6 font-semibold text-gray-900">Push notifications</legend>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    defaultChecked
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label htmlFor="push-everything" className="block text-sm/6 font-medium text-gray-900">
                    Everything
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label htmlFor="push-email" className="block text-sm/6 font-medium text-gray-900">
                    Same as email
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label htmlFor="push-nothing" className="block text-sm/6 font-medium text-gray-900">
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset> */}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button 
        onClick={handlePrevious}
        type="button" className="rounded-md px-3 py-2 text-sm/6 font-semibold text-gray-900 border shadow-xs border-gray-300 hover:bg-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">
          Previous
        </button>
        <button
        onClick={handleNext}
          type="button"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {step==4 ? 'Save' : 'Next'}
        </button>
      </div>
    </form>
    </>
  )
}
