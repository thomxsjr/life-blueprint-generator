import PropTypes from "prop-types"
import { useEffect } from "react"

const CareerMetrics = ({ formData, updateFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
    e.target.classList.remove("outline-red-500")
  }

  useEffect(() => {
    const formElements = document.querySelectorAll("input")
    formElements.forEach((element) => {
      if (formData[element.id]) {
        element.value = formData[element.id]
      }
    })
  }, [formData])

  return (
    <>
      <div className="sm:col-span-4">
        <label htmlFor="highestDegree" className="block text-sm/6 font-medium text-gray-900">
          What is the highest degree you have obtained?
        </label>
        <div className="mt-2">
          <input
            id="highestDegree"
            name="highestDegree"
            type="text"
            required
            value={formData.highestDegree}
            onChange={handleInputChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="currentJob" className="block text-sm/6 font-medium text-gray-900">
          What is your current Job?
        </label>
        <div className="mt-2">
          <input
            id="currentJob"
            name="currentJob"
            type="text"
            required
            value={formData.currentJob}
            onChange={handleInputChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="domainExperience" className="block text-sm/6 font-medium text-gray-900">
          How many years of experience do you have in your domain?
        </label>
        <div className="mt-2">
          <div className="flex min-w-0 grow items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <input
              required
              id="domainExperience"
              name="domainExperience"
              type="number"
              value={formData.domainExperience}
              onChange={handleInputChange}
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="skills" className="block text-sm/6 font-medium text-gray-900">
          What skills do you possess? (Separate each skill using a comma)
        </label>
        <div className="mt-2">
          <input
            id="skills"
            name="skills"
            type="text"
            required
            value={formData.skills}
            onChange={handleInputChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="stressLevel" className="block text-sm/6 font-medium text-gray-900">
          How satisfied are you with your salary on a scale of 1 to 10?
        </label>
        <div className="mt-2">
          <div className="flex min-w-0 grow items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <input
              required
              min="1"
              max="10"
              id="stressLevel"
              name="stressLevel"
              type="number"
              value={formData.stressLevel}
              onChange={handleInputChange}
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>
    </>
  )
}

CareerMetrics.propTypes = {
    formData: PropTypes.shape({
      highestDegree: PropTypes.string,
      currentJob: PropTypes.string,
      domainExperience: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      skills: PropTypes.string,
      stressLevel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,
    updateFormData: PropTypes.func.isRequired,
  };
  

export default CareerMetrics

