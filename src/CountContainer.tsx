import {createContext, PropsWithChildren, useState} from "react";

type CountContextType = {
  count: number
  increment: () => void
  decrement: () => void
}

export const CountContext = createContext<CountContextType>({
  count: 0,
  increment: () => {},
  decrement: () => {},
})

const CountContainer = ({children}: PropsWithChildren) => {
  const [count, setCount] = useState(0)

  return (
    <CountContext.Provider value={{
      count,
      increment: () => setCount(count => count + 1),
      decrement: () => setCount(count => count - 1),
    }}>
      {children}
    </CountContext.Provider>
  )
}

export default CountContainer
