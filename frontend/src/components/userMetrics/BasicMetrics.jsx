import { useEffect } from "react"
import PropTypes from "prop-types"

const BasicMetrics = ({ formData, updateFormData }) => {
  const handleGenderChange = (e) => {
    updateFormData({ gender: e.target.value })
    e.target.classList.remove("outline-red-500")
  }

  const handleIsDisableChange = (e) => {
    updateFormData({ isDisabled: e.target.value === "true" })
    e.target.classList.remove("outline-red-500")
  }

  const handleAgeChange = (e) => {
    updateFormData({ age: e.target.value })
    e.target.classList.remove("outline-red-500")
  }

  useEffect(() => {
    const formElements = document.querySelectorAll('input[type="number"], input[type="radio"]:checked')
    formElements.forEach((element) => {
      if (element.name === "age") {
        element.value = formData.age
      }
    })
  }, [formData])

  return (
    <>
      <fieldset className="col-span-4">
        <legend className="text-sm/6 font-semibold text-gray-900">What is your Gender?</legend>
        <div className="mt-6 flex items-center space-x-6">
          <div className="flex items-center gap-x-3">
            <input
              required
              id="female"
              name="gender"
              type="radio"
              value="female"
              onChange={handleGenderChange}
              checked={formData.gender === "female"}
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
              name="gender"
              type="radio"
              value="male"
              onChange={handleGenderChange}
              checked={formData.gender === "male"}
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
              value={formData.age}
              onChange={handleAgeChange}
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
              required
              id="true"
              name="isDisabled"
              type="radio"
              value="true"
              checked={formData.isDisabled === true}
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
              name="isDisabled"
              value="false"
              type="radio"
              checked={formData.isDisabled === false}
              onChange={handleIsDisableChange}
              className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
            />
            <label htmlFor="false" className="block text-sm/6 font-medium text-gray-900">
              False
            </label>
          </div>
        </div>
      </fieldset>
    </>
  )
}

BasicMetrics.propTypes = {
  formData: PropTypes.shape({
    gender: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isDisabled: PropTypes.bool,
  }).isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default BasicMetrics

