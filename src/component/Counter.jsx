import { useDispatch } from "react-redux"
import { minus, plus } from "../Redux/counter-slice"
import Message from "./Message"

const Counter = () => {
    const dispatch=useDispatch()
  return (
    <div>
      <Message/>
     <button onClick={()=>dispatch(plus(2))}>+</button>
     <button onClick={()=>dispatch(minus(2))}>-</button>

    </div>
  )
}

export default Counter
