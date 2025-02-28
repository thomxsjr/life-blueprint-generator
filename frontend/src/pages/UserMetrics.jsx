import BGGradient from "@/components/BGGradient"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setUserMetrics } from "@/redux/userMetrics/userMetricsSlice"
import BasicMetrics from "@/components/userMetrics/BasicMetrics"
import CareerMetrics from "@/components/userMetrics/CareerMetrics"
import HealthMetrics from "@/components/userMetrics/HealthMetrics"
import FinanceMetrics from "@/components/userMetrics/FinanceMetrics"

const UserMetrics = () => {
  const stepper = [
    { step: 1, name: "Basic Info" },
    { step: 2, name: "Career Info" },
    { step: 3, name: "Health Info" },
    { step: 4, name: "Finance Info" },
  ]
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user)
  const [error, setError] = useState(null)
  const [step, setStep] = useState(1)
  const totalSteps = 4

  const [formData, setFormData] = useState({
    // Basic info
    gender: "female",
    age: "",
    isDisabled: true,

    // Career info
    highestDegree: "",
    currentJob: "",
    domainExperience: "",
    skills: "",
    salarySatisfaction: "",

    // Health info
    healthStatus: "ok",
    medicalConditions: "",
    sleepTime: "",
    stressLevel: "",
    dietType: "vegetarian",

    // Finance info
    salary: "",
    savings: "",
    monthlyExpenses: "",
    debt: "",
    totalAssets: "",
  })

  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }))
  }

  const [validationError, setValidationError] = useState("")

  const handleNext = () => {
    const currentForm = document.querySelector("form")
    const currentStepInputs = currentForm.querySelectorAll(`input[required], select[required]`)

    let allFieldsFilled = true
    let firstEmptyField = null

    currentStepInputs.forEach((input) => {
      if (!input.value) {
        allFieldsFilled = false
        if (!firstEmptyField) {
          firstEmptyField = input
        }
      }
    })
    if (allFieldsFilled) {
      setStep((prevStep) => Math.min(prevStep + 1, totalSteps))
    } else {
      setValidationError("Please fill in all required fields")
      if (firstEmptyField) {
        firstEmptyField.focus()
      }
      setTimeout(() => {
        setValidationError("")
      }, 3000)
    }
  }



  const handleSubmit = async (e) => {
    e.preventDefault()

    const formattedFormData = {
      email: currentUser.email,
      basicInfo: {
        gender: formData.gender,
        age: formData.age,
        isDisabled: formData.isDisabled,
      },
      careerInfo:{
        highestDegree: formData.highestDegree,
        currentJob: formData.currentJob,
        domainExperience: formData.domainExperience,
        skills: formData.skills,
        salarySatisfaction: formData.salarySatisfaction,
      },
      healthInfo: {
        healthStatus: formData.healthStatus,
        medicalConditions: formData.medicalConditions,
        sleepTime: formData.sleepTime,
        stressLevel: formData.stressLevel,
        dietType: formData.dietType,
      },
      financeInfo: {
        salary: formData.salary,
        savings: formData.savings,
        monthlyExpenses: formData.monthlyExpenses,
        debt: formData.debt,
        totalAssets: formData.totalAssets,
      },
    }
    
    console.log("Submitting form data:", formattedFormData)

    try {
      const response = await fetch('/api/user-metrics/create', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formattedFormData),
      });
      const data = await response.json();
      console.log(data);

      if (data.success === false) {
        setError(data.message);
        return;
      }
      dispatch(setUserMetrics(data.data));
      navigate('/dashboard');
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("An error occurred while submitting the form")
    }
  }

  const handlePrevious = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1))
  }

  const handleStepperClick = (step) => {
    setStep(step)
  }

  return (
    <>
      <BGGradient offset={-200} />
      <div className="p-4 mx-auto w-full md:max-w-7xl">
        <ol className="flex items-center w-full space-x-8 space-y-0">
          {stepper.map((item) => (
            <li
              style={{ cursor: "pointer" }}
              onClick={() => handleStepperClick(item.step)}
              key={item.step}
              id={item.step}
              className="flex-1"
            >
              <div
                className={
                  item.step == step
                    ? "border-l-2 flex flex-col border-t-0 pl-4 pt-0 border-solid border-indigo-600 font-medium lg:pt-4 lg:border-t-2 lg:border-l-0 lg:pl-0"
                    : "border-l-2 flex flex-col border-t-0 pl-4 pt-0 border-solid border-gray-600 font-medium lg:pt-4 lg:border-t-2 lg:border-l-0 lg:pl-0"
                }
              >
                <span
                  className={
                    item.step == step ? "text-sm lg:text-base text-indigo-600" : "text-sm lg:text-base text-gray-600"
                  }
                >
                  Step {item.step}
                </span>
                <h4 className="text-base lg:text-lg text-gray-900">{item.name}</h4>
              </div>
            </li>
          ))}
        </ol>
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {step === 1 && <BasicMetrics formData={formData} updateFormData={updateFormData} />}
                {step === 2 && <CareerMetrics formData={formData} updateFormData={updateFormData} />}
                {step === 3 && <HealthMetrics formData={formData} updateFormData={updateFormData} />}
                {step === 4 && <FinanceMetrics formData={formData} updateFormData={updateFormData} />}
              </div>
            </div>
          </div>

          {validationError && <div className="mt-4 text-red-500 text-center font-medium">{validationError}</div>}
          {error && <div className="mt-4 text-red-500 text-center font-medium">{error}</div>}

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              onClick={handlePrevious}
              type="button"
              className="rounded-md px-3 py-2 text-sm/6 font-semibold text-gray-900 border shadow-xs border-gray-300 hover:bg-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Previous
            </button>
            {step === 4 ? (
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                type="button"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  )
}

export default UserMetrics

