
const FinanceMetrics = () => {
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
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
            </div>
        </div>
    </div>
    </>
  )
}

export default FinanceMetrics