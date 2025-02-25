// import { useSelector } from 'react-redux'
import Header from '../components/Header'
import ScoreMetrics from '../components/ScoreMetrics'
import BGGradient from '../components/BGGradient'
const Dashboard = () => {
  // const { currentUser } = useSelector((state) => state.user)


  return (
    <>
      <BGGradient offset={0}/>
      <BGGradient offset={500}/>
      <BGGradient offset={1000}/>
      <BGGradient offset={-800}/>

      
      <Header/>
      
      <div className="max-w-7xl mx-auto relative isolate px-6 pt-10 lg:px-8">
        <h1 className="text-5xl font-bold tracking-tight text-balance text-gray-700 md:text-6xl">
              Dashboard
        </h1>
      </div>
      <div id='stats'>
        <ScoreMetrics />
      </div>




    </>
  )
}

export default Dashboard