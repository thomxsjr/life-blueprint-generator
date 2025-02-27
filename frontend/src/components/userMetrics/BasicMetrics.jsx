import { useState } from "react";

const BasicMetrics = () => {
  const [haveDisabilities, setHaveDisabilities] = useState(true);
  const [gender, setGender] = useState('female')


  const handleIsDisableChange = (e) => {
    setHaveDisabilities(e.target.value === "true"); // Converts string to boolean

  }
  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }

  return (
    <>
        <fieldset className="col-span-4">
              <legend className="text-sm/6 font-semibold text-gray-900">What is you Gender?</legend>
              <div className="mt-6 flex items-center space-x-6">
                <div className="flex items-center gap-x-3">
                  <input
                    required
                    defaultChecked
                    id="female"
                    name="female"
                    type="radio"
                    value="female"
                    onChange={handleGenderChange}
                    checked={gender === 'female'}
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label htmlFor="female" className="block text-sm/6 font-medium text-gray-900">
                  Female
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    required
                    id="male"
                    name="male"
                    type="radio"
                    value="male"
                    onChange={handleGenderChange}
                    checked={gender === 'male'}
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label htmlFor="male" className="block text-sm/6 font-medium text-gray-900">
                    Male
                  </label>
                </div>
                
              </div>
            </fieldset>

                <div className="sm:col-span-4">
                <label htmlFor="age" className="block text-sm/6 font-medium text-gray-900">
                  What is your Age?
                </label>
                <div className="mt-2">
                  <div className="flex min-w-0 grow items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      required
                      id="age"
                      name="age"
                      type="number"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <fieldset className="col-span-4">
              <legend className="text-sm/6 font-semibold text-gray-900">Do you have any disabilities</legend>
              <div className="mt-6 flex items-center space-x-6">
                <div className="flex items-center gap-x-3">
                  <input
                    defaultChecked
                    required
                    id="true"
                    name="true"
                    type="radio"
                    value={true}
                    checked={haveDisabilities === true}
                    onChange={handleIsDisableChange}
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label htmlFor="true" className="block text-sm/6 font-medium text-gray-900">
                  True
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    required
                    id="false"
                    name="false"
                    value={false}
                    type="radio"
                    checked={haveDisabilities === false}
                    onChange={handleIsDisableChange}
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label htmlFor="false" className="block text-sm/6 font-medium text-gray-900">
                    False
                  </label>
                </div>
                
              </div>
            </fieldset>

            {/* <div className="col-span-full">
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
            </div> */}
            </>
  )
}

export default BasicMetrics
