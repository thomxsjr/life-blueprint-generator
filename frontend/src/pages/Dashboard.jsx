// import { useSelector } from 'react-redux'
import Header from '../components/Header'
import ScoreMetrics from '../components/ScoreMetrics'
import BGGradient from '../components/BGGradient'
import MultiLineChart from '../components/MultiLineChart'
import RadarScoreChart from '../components/RadarScoreChart'

const Dashboard = () => {
  // const { currentUser } = useSelector((state) => state.user)


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


        <div className='max-w-7xl mx-auto p-4'>
        <MultiLineChart />
        <RadarScoreChart />
        </div>


    </>
  )
}

export default Dashboard