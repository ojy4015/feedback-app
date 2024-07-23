import {
  useParams,
  Navigate,
  useNavigate,
  Routes,
  Route,
} from 'react-router-dom'

function Post() {
  const params = useParams()
  const navigate = useNavigate()

  const status = 200

  if (status === 404) {
    return <Navigate to='/notfound' />
  }

  const onClick = () => {
    console.log('hi')
    navigate('/about')
  }

  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>button</button>
      <Routes>
        <Route path='/show' element={<h1>Hello Seyeon</h1>} />
      </Routes>
    </div>
    // <div>
    //   <h1>Post {params.id}</h1>
    //   <h1>Name {params.name}</h1>
    // </div>
  )
}

export default Post
