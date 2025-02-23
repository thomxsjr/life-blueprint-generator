import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../redux/user/userSlice'

const Dashboard = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentUser } = useSelector((state) => state.user)

  const handleClick = async() => {
    try {
      const res = await fetch('/api/auth/signout', {
        method: 'POST',
      })
      const data = await res.json()
      if(data.success){
        dispatch(removeUser())
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }
  console.log(currentUser)

  return (
    <div>
      {currentUser.name}
      <br />
      {currentUser.email}
      <br />
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Dashboard