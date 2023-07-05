import {PropsWithChildren} from "react";

const Intermediate = ({ children }: PropsWithChildren) => {
  console.log('Intermediate render', Math.random())

  return (
    <div style={{ background: 'red', color: 'white' }}>
      {children}
    </div>
  )
}

  export default Intermediate
