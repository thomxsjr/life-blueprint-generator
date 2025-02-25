import { useSelector } from 'react-redux'
import Header from '../components/Header'
import ScoreMetrics from '../components/ScoreMetrics'
import BGGradient from '../components/BGGradient'
const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user)


  return (
    <>
      <BGGradient offset={0}/>
      <BGGradient offset={500}/>
      <BGGradient offset={1000}/>

      
      <Header/>
      
      <div className="relative isolate px-6 pt-10 lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-balance text-gray-700 sm:text-5xl">
              {currentUser.name}'s Dashboard
        </h1>
      </div>

      <ScoreMetrics />




    </>
  )
}

export default Dashboard