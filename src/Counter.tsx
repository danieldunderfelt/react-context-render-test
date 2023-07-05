import {useContext} from "react";
import {CountContext} from "./CountContainer.tsx";

function Counter() {
  const {count, increment, decrement} = useContext(CountContext)

  return (
    <>
      <div className="card">
        <div>
          count is {count}
        </div>
        <button style={{ marginRight: '2rem' }} onClick={() => decrement()}>
          -
        </button>
        <button onClick={() => increment()}>
          +
        </button>
      </div>
    </>
  )
}

export default Counter
