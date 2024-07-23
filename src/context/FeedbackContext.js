// import { createContext, useState, useEffect } from 'react'

// const FeedbackContext = createContext()

// export const FeedbackProvider = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(true)
//   const [feedback, setFeedback] = useState([])
//   const [feedbackEdit, setFeedbackEdit] = useState({
//     item: {},
//     edit: false,
//   })

//   useEffect(() => {
//     fetchFeedback()
//   }, [])

//   // Fetch feedback
//   const fetchFeedback = async () => {
//     const response = await fetch(`/feedback?_sort=id&_order=desc`)
//     const data = await response.json()

//     setFeedback(data)
//     setIsLoading(false)
//   }

//   // Add feedback
//   const addFeedback = async (newFeedback) => {
//     const response = await fetch('/feedback', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newFeedback),
//     })

//     const data = await response.json()

//     setFeedback([data, ...feedback])
//   }

//   // Delete feedback
//   const deleteFeedback = async (id) => {
//     if (window.confirm('Are you sure you want to delete?')) {
//       await fetch(`/feedback/${id}`, { method: 'DELETE' })

//       setFeedback(feedback.filter((item) => item.id !== id))
//     }
//   }

//   // Update feedback item
//   const updateFeedback = async (id, updItem) => {
//     const response = await fetch(`/feedback/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updItem),
//     })

//     const data = await response.json()

//     // NOTE: no need to spread data and item
//     setFeedback(feedback.map((item) => (item.id === id ? data : item)))

//     // FIX: this fixes being able to add a feedback after editing
//     // credit to Jose https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29768200#questions/16462688
//     setFeedbackEdit({
//       item: {},
//       edit: false,
//     })
//   }

//   // Set item to be updated
//   const editFeedback = (item) => {
//     setFeedbackEdit({
//       item,
//       edit: true,
//     })
//   }

//   return (
//     <FeedbackContext.Provider
//       value={{
//         feedback,
//         feedbackEdit,
//         isLoading,
//         deleteFeedback,
//         addFeedback,
//         editFeedback,
//         updateFeedback,
//       }}
//     >
//       {children}
//     </FeedbackContext.Provider>
//   )
// }

// export default FeedbackContext

import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 9,
    },
    {
      id: 3,
      text: 'This is feedback item 4',
      rating: 7,
    },
  ])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {}, // update될 내용 id, text, rating을 가질 빈 object
    edit: false, // update인가 아닌가?
  })

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    // console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item, // 이미 update될 내용을 갖고 왔음
      edit: true,
    })
  }

  // Update feedback item
  const updateFeedback = (id, updItem) => {
    // const response = await fetch(`/feedback/${id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(updItem),
    // })
    // console.log(id, updItem)
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
