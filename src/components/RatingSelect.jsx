// function RatingSelect({ select, selected }) {
//   // NOTE: We don't need local state here as it's a duplicate of parent state
//   // also no real need for useEffect or context
//   // useEffect(() => {
//   //   select(feedbackEdit.item.rating)
//   // }, [feedbackEdit])

import { setSelection } from '@testing-library/user-event/dist/cjs/event/selection/setSelection.js'

//   const handleChange = (e) => {
//     select(+e.currentTarget.value)
//   }

//   // NOTE: simplified with iteration
//   return (
//     <ul className='rating'>
//       {Array.from({ length: 10 }, (_, i) => (
//         <li key={`rating-${i + 1}`}>
//           <input
//             type='radio'
//             id={`num${i + 1}`}
//             name='rating'
//             value={i + 1}
//             onChange={handleChange}
//             checked={selected === i + 1}
//           />
//           <label htmlFor={`num${i + 1}`}>{i + 1}</label>
//         </li>
//       ))}
//     </ul>
//   )
// }

// export default RatingSelect

import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10)

  const { feedbackEdit } = useContext(FeedbackContext)

  const handleChange = (e) => {
    // console.log(e.currentTarget.value)
    select(+e.currentTarget.value)
    setSelected(+e.currentTarget.value)
  }

  useEffect(() => {
    setSelected(feedbackEdit.item.rating)
  }, [feedbackEdit])

  // NOTE: simplified with iteration
  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
  // return (
  //   <ul className='rating'>
  //     <li>
  //       <input
  //         type='radio'
  //         id='num1'
  //         name='rating'
  //         value='1'
  //         onChange={handleChange}
  //         checked={selected === 1}
  //       />
  //       <label htmlFor='1'>1</label>
  //     </li>
  //     <li>
  //       <input
  //         type='radio'
  //         id='num2'
  //         name='rating'
  //         value='2'
  //         onChange={handleChange}
  //         checked={selected === 2}
  //       />
  //       <label htmlFor='2'>2</label>
  //     </li>
  //     <li>
  //       <input
  //         type='radio'
  //         id='num3'
  //         name='rating'
  //         value='3'
  //         onChange={handleChange}
  //         checked={selected === 3}
  //       />
  //       <label htmlFor='3'>3</label>
  //     </li>
  //     <li>
  //       <input
  //         type='radio'
  //         id='num4'
  //         name='rating'
  //         value='4'
  //         onChange={handleChange}
  //         checked={selected === 4}
  //       />
  //       <label htmlFor='4'>4</label>
  //     </li>
  //     <li>
  //       <input
  //         type='radio'
  //         id='num5'
  //         name='rating'
  //         value='5'
  //         onChange={handleChange}
  //         checked={selected === 5}
  //       />
  //       <label htmlFor='5'>5</label>
  //     </li>
  //     <li>
  //       <input
  //         type='radio'
  //         id='num6'
  //         name='rating'
  //         value='6'
  //         onChange={handleChange}
  //         checked={selected === 6}
  //       />
  //       <label htmlFor='6'>6</label>
  //     </li>
  //     <li>
  //       <input
  //         type='radio'
  //         id='num7'
  //         name='rating'
  //         value='7'
  //         onChange={handleChange}
  //         checked={selected === 7}
  //       />
  //       <label htmlFor='7'>7</label>
  //     </li>
  //     <li>
  //       <input
  //         type='radio'
  //         id='num8'
  //         name='rating'
  //         value='8'
  //         onChange={handleChange}
  //         checked={selected === 8}
  //       />
  //       <label htmlFor='8'>8</label>
  //     </li>
  //     <li>
  //       <input
  //         type='radio'
  //         id='num9'
  //         name='rating'
  //         value='9'
  //         onChange={handleChange}
  //         checked={selected === 9}
  //       />
  //       <label htmlFor='9'>9</label>
  //     </li>
  //     <li>
  //       <input
  //         type='radio'
  //         id='num10'
  //         name='rating'
  //         value='10'
  //         onChange={handleChange}
  //         checked={selected === 10}
  //       />
  //       <label htmlFor='10'>10</label>
  //     </li>
  //   </ul>
  // )
}

export default RatingSelect

// function RatingSelect({ select, selected }) {
//   // NOTE: We don't need local state here as it's a duplicate of parent state
//   // also no real need for useEffect or context
//   // useEffect(() => {
//   //   select(feedbackEdit.item.rating)
//   // }, [feedbackEdit])

//   const [selected, setSelected] = useState(10)
//   const handleChange = (e) => {
//     select(+e.currentTarget.value)

//   }

//   // NOTE: simplified with iteration
//   return (
//     <ul className='rating'>
//       {Array.from({ length: 10 }, (_, i) => (
//         <li key={`rating-${i + 1}`}>
//           <input
//             type='radio'
//             id={`num${i + 1}`}
//             name='rating'
//             value={i + 1}
//             onChange={handleChange}
//             checked={selected === i + 1}
//           />
//           <label htmlFor={`num${i + 1}`}>{i + 1}</label>
//         </li>
//       ))}
//     </ul>
//   )
// }

// export default RatingSelect
