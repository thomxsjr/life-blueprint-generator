import PropTypes from "prop-types"
import { useEffect } from "react"

const FinanceMetrics = ({ formData, updateFormData }) => {
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
        <label htmlFor="salary" className="block text-sm/6 font-medium text-gray-900">
          What is your Salary?
        </label>
        <div className="mt-2">
          <div className="flex min-w-0 grow items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <input
              required
              id="salary"
              name="salary"
              type="number"
              value={formData.salary}
              onChange={handleInputChange}
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="savings" className="block text-sm/6 font-medium text-gray-900">
          How much savings do you currently have?
        </label>
        <div className="mt-2">
          <div className="flex min-w-0 grow items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <input
              required
              id="savings"
              name="savings"
              type="number"
              value={formData.savings}
              onChange={handleInputChange}
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="monthlyExpenses" className="block text-sm/6 font-medium text-gray-900">
          What are your current monthly expenses?
        </label>
        <div className="mt-2">
          <div className="flex min-w-0 grow items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <input
              required
              id="monthlyExpenses"
              name="monthlyExpenses"
              type="number"
              value={formData.monthlyExpenses}
              onChange={handleInputChange}
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="debt" className="block text-sm/6 font-medium text-gray-900">
          How much debt do you currently have?
        </label>
        <div className="mt-2">
          <div className="flex min-w-0 grow items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <input
              required
              id="debt"
              name="debt"
              type="number"
              value={formData.debt}
              onChange={handleInputChange}
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="totalAssets" className="block text-sm/6 font-medium text-gray-900">
          What is the total value of all your assets? (eg: Gold, Land etc.)
        </label>
        <div className="mt-2">
          <div className="flex min-w-0 grow items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <input
              required
              id="totalAssets"
              name="totalAssets"
              type="number"
              value={formData.totalAssets}
              onChange={handleInputChange}
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>
    </>
  )
}

FinanceMetrics.propTypes = {
    formData: PropTypes.shape({
      salary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      savings: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      monthlyExpenses: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      debt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      totalAssets: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
    updateFormData: PropTypes.func.isRequired,
  };
  

export default FinanceMetrics

