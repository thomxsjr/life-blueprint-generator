import PropTypes from "prop-types"
import { ChevronDownIcon } from "@heroicons/react/16/solid"
import { useEffect } from "react"

const HealthMetrics = ({ formData, updateFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
    e.target.classList.remove("outline-red-500")
  }

  useEffect(() => {
    const formElements = document.querySelectorAll("input, select")
    formElements.forEach((element) => {
      if (formData[element.id]) {
        element.value = formData[element.id]
      }
    })
  }, [formData])

  return (
    <>
      <div className="sm:col-span-3">
        <label htmlFor="healthStatus" className="block text-sm/6 font-medium text-gray-900">
          How would you describe your current health status?
        </label>
        <div className="mt-2 grid grid-cols-1">
          <select
            id="healthStatus"
            name="healthStatus"
            required
            value={formData.healthStatus}
            onChange={handleInputChange}
            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            <option value="very-bad">Very Bad</option>
            <option value="bad">Bad</option>
            <option value="ok">Ok</option>
            <option value="good">Good</option>
            <option value="very-good">Very Good</option>
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="medicalConditions" className="block text-sm/6 font-medium text-gray-900">
          Do you have any medical conditions? (Separate each condition with a comma)
        </label>
        <div className="mt-2">
          <input
            id="medicalConditions"
            name="medicalConditions"
            type="text"
            required
            value={formData.medicalConditions}
            onChange={handleInputChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="sleepTime" className="block text-sm/6 font-medium text-gray-900">
          How many hours of sleep do you get on average?
        </label>
        <div className="mt-2">
          <div className="flex min-w-0 grow items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <input
              required
              min="1"
              max="24"
              id="sleepTime"
              name="sleepTime"
              type="number"
              value={formData.sleepTime}
              onChange={handleInputChange}
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="salarySatisfaction" className="block text-sm/6 font-medium text-gray-900">
          On a scale of 1 to 10, how would you rate your stress level?
        </label>
        <div className="mt-2">
          <div className="flex min-w-0 grow items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <input
              required
              min="1"
              max="10"
              id="salarySatisfaction"
              name="salarySatisfaction"
              type="number"
              value={formData.salarySatisfaction}
              onChange={handleInputChange}
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>

      <div className="sm:col-span-3">
        <label htmlFor="dietType" className="block text-sm/6 font-medium text-gray-900">
          What type of diet do you follow?
        </label>
        <div className="mt-2 grid grid-cols-1">
          <select
            id="dietType"
            name="dietType"
            required
            value={formData.dietType}
            onChange={handleInputChange}
            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="keto">Keto (Ketogenic)</option>
            <option value="paleo">Paleo</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="carnivore">Carnivore</option>
            <option value="gluten-free">Gluten-Free</option>
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </div>
      </div>
    </>
  )
}

HealthMetrics.propTypes = {
    formData: PropTypes.shape({
      healthStatus: PropTypes.string.isRequired,
      medicalConditions: PropTypes.string.isRequired,
      sleepTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      salarySatisfaction: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      dietType: PropTypes.string.isRequired,
    }).isRequired,
    updateFormData: PropTypes.func.isRequired,
  };
  

export default HealthMetrics

