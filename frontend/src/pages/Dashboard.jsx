import { useSelector } from 'react-redux'
import Header from '../components/Header'

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
    </>
  )
}

export default Dashboard