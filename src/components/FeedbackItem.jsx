// import { FaTimes, FaEdit } from 'react-icons/fa'
// import { useContext } from 'react'
// import PropTypes from 'prop-types'
// import Card from './shared/Card'
// import FeedbackContext from '../context/FeedbackContext'

// function FeedbackItem({ item }) {
//   const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

//   return (
//     <Card>
//       <div className='num-display'>{item.rating}</div>
//       <button onClick={() => deleteFeedback(item.id)} className='close'>
//         <FaTimes color='purple' />
//       </button>
//       <button onClick={() => editFeedback(item)} className='edit'>
//         <FaEdit color='purple' />
//       </button>
//       <div className='text-display'>{item.text}</div>
//     </Card>
//   )
// }

// FeedbackItem.propTypes = {
//   item: PropTypes.object.isRequired,
// }

// export default FeedbackItem

import { FaTimes, FaEdit } from 'react-icons/fa'
import { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is an example of a feedback item')

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
