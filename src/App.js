import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom'
import Card from './components/shared/Card'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import Post from './components/Post'

// import FeedbackItem from './components/FeedbackItem'

import FeedbackData from './data/FeedbackData'
import { useState } from 'react'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
            <Route path='/post/*' element={<Post />} />
            <Route path='/post/:id/:name' element={<Post />} />
          </Routes>
          <AboutIconLink />

          {/* <Card>
            <NavLink to='/' activeClassName='active'>
              Home
            </NavLink>
            <NavLink to='/about' activeClassName='active'>
              About
            </NavLink>
          </Card>

          <AboutIconLink /> */}
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App

// import Header from './components/Header'
// // import FeedbackItem from './components/FeedbackItem'
// import FeedbackList from './components/FeedbackList'
// import FeedbackData from './data/FeedbackData'
// import { useState } from 'react'
// import FeedbackStats from './components/FeedbackStats'
// import FeedbackForm from './components/FeedbackForm'
// import { v4 as uuidv4 } from 'uuid'
// import AboutPage from './pages/AboutPage'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// function App() {
//   const [feedback, setFeedback] = useState(FeedbackData)

//   const addFeedback = (newFeedback) => {
//     newFeedback.id = uuidv4()
//     console.log(newFeedback)
//     setFeedback([newFeedback, ...feedback])
//   }

//   const deleteFeedback = (id) => {
//     if (window.confirm('Are you sure you want to delete?')) {
//       setFeedback(feedback.filter((item) => item.id !== id))
//     }
//   }
//   return (
//     <Router>
//       <Header />
//       <div className='container'>
//         <Routes>
//           <Route path='/'>
//             <FeedbackForm handleAdd={addFeedback} />
//             <FeedbackStats feedback={feedback} />
//             <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
//           </Route>
//         </Routes>
//         <Routes>
//           <Route path='/about' Component={AboutPage} />
//         </Routes>
//       </div>
//     </Router>
//   )
// }

// export default App
