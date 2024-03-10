import { useSelector } from "react-redux"

const Message = () => {
  const selector=  useSelector(state=>state.counterSlice);
  console.log('selector',selector);
  return (
    <div>
      <h1>value is {selector.counter}</h1>
    </div>
  )
}

export default Message
