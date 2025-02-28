// import { useSelector } from 'react-redux'
import Header from '../components/Header'
import ScoreMetrics from '../components/graphs/ScoreMetrics'
import BGGradient from '../components/BGGradient'
import MultiLineChart from '../components/graphs/MultiLineChart'
import RadarScoreChart from '../components/graphs/RadarScoreChart'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const { currentUserMetrics } = useSelector((state) => state.userMetrics)


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

      {currentUserMetrics.careerInfo.currentJob}


    </>
  )
}

export default Dashboard