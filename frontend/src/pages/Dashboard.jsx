import { useSelector } from 'react-redux'
import Header from '../components/Header'
import CircularMetricCard from '../components/CircularMetricCard'

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user)


  return (
    <>
      <Header/>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <h1 className="text-2xl font-semibold tracking-tight text-balance text-gray-700 sm:text-4xl">
              Welcome, {currentUser.name}! 👋
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 animate-fade-in">
          <CircularMetricCard
            title="Career"
            value={68}
            color="#F97316"
          />
          <CircularMetricCard
            title="Health"
            value={52}
            color="#8B5CF6"
          />
          <CircularMetricCard
            title="Finance"
            value={85}
            color="#D946EF"
          />
        </div>
      </div>
    </>
  )
}

export default Dashboard