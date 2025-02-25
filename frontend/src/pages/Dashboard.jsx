import { useSelector } from 'react-redux'
import Header from '../components/Header'
import ScoreMetrics from '../components/ScoreMetrics'
import BGGradient from '../components/BGGradient'
const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user)


  return (
    <>
      <BGGradient offset={0}/>
      <BGGradient offset={1000}/>

      
      <Header/>
      
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <h1 className="text-2xl font-semibold tracking-tight text-balance text-gray-700 sm:text-4xl">
              Welcome, {currentUser.name}! 👋
        </h1>
      </div>

      <ScoreMetrics />


    </>
  )
}

export default Dashboard