import { useSelector } from 'react-redux'

const Dashboard = () => {

  const { currentUser } = useSelector((state) => state.user)

  return (
    <div>
      {currentUser.data.name}
      <br />
      {currentUser.data.email}
    </div>
  )
}

export default Dashboard