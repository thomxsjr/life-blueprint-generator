// import { useSelector } from 'react-redux'
import Header from '../components/Header'
import ScoreMetrics from '../components/graphs/ScoreMetrics'
import BGGradient from '../components/BGGradient'
import MultiLineChart from '../components/graphs/MultiLineChart'
import RadarScoreChart from '../components/graphs/RadarScoreChart'
import PlanRenderer from '../components/PlanRenderer'
import { useSelector } from 'react-redux'
import { useState } from 'react'


const Dashboard = () => {
  const { currentUserMetrics } = useSelector((state) => state.userMetrics)
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  console.log(currentUserMetrics);

  const formData = {
    "age": currentUserMetrics.basicInfo.age,
    "salary": currentUserMetrics.financeInfo.salary,
    "savings": currentUserMetrics.financeInfo.savings,
    "debt": currentUserMetrics.financeInfo.debt,
    "stress": currentUserMetrics.healthInfo.stressLevel,
    "health_satisfaction": currentUserMetrics.healthInfo.healthStatus,
    "career_satisfaction": currentUserMetrics.careerInfo.salarySatisfaction,
    "finance_satisfaction": currentUserMetrics.financeInfo.salarySatisfaction,
  }


  const handleGenreatePlan = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/ml/life-blueprint-generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const mlData = await res.json();
      
      if (mlData.success === false) {
        setError(mlData.message);
        setLoading(false);
  
      } else {
        setData(mlData.data);
        setLoading(false);
      }
  
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
  };
  
  
  return (
    <>
      <BGGradient offset={0}/>
      <BGGradient offset={500}/>
      <BGGradient offset={1000}/>
      <BGGradient offset={-800}/>

      
      <Header/>
      <div id='stats'></div>
      <div className="max-w-7xl mx-auto relative isolate px-6 pt-10 lg:px-8">
        <h1 className="text-5xl font-bold tracking-tight text-balance text-gray-700 md:text-6xl">
              Dashboard
        </h1>
      </div>
      
        <ScoreMetrics />

        <div className='max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4'>
          <div className="bg-white border border-gray-300 rounded-4xl my-6 p-4 flex"><MultiLineChart /></div>
          <div className="bg-white border border-gray-300 rounded-4xl my-6 p-4 flex "><RadarScoreChart /></div>
        </div>

      {/* {currentUserMetrics.careerInfo.currentJob} */}
      <div className="max-w-7xl mx-auto sm:w-full px-4 py-4">
          <div className="bg-white border border-gray-300 rounded-4xl p-6 w-full">
            <h1 className="text-2xl font-bold mb-4 text-center">Yearly Life Plan</h1>
            {data?
              <PlanRenderer markdownData={data}/> 
            :
            <button
              disabled={loading}
              onClick={handleGenreatePlan}
              className="cursor-pointer flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? 'Loading...' : 'Generate Plan'}
            </button>}
          </div>
          {error && <div className="text-red-500 text-center mt-4">{error}</div>}
      </div>


    </>
  )
}

export default Dashboard