import { useState } from 'react';
import BasicMetrics from './userMetrics/BasicMetrics';
import CareerMetrics from './userMetrics/CareerMetrics';
import HealthMetrics from './userMetrics/HealthMetrics';
import FinanceMetrics from './userMetrics/FinanceMetrics';

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

        <ol className="flex items-center w-full space-x-8 space-y-0">
      
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
            
            {step === 1 &&  <BasicMetrics />}
            
            {step === 2 && <CareerMetrics />}
            
            {step === 3 && <HealthMetrics />}

            {step === 4 && <FinanceMetrics />}
            

          </div>


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
