import './App.css'
import CountContainer from "./CountContainer.tsx";
import Counter from "./Counter.tsx";
import Intermediate from "./Intermediate.tsx";

function App() {
  return (
    <>
      <CountContainer>
        <Intermediate>
          <Counter />
        </Intermediate>
      </CountContainer>
    </>
  )
}

export default App
