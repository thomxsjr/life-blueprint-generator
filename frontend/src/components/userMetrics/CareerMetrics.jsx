

const careerMetrics = () => {
  return (
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
  )
}

export default careerMetrics