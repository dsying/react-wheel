import React, { Fragment, useState } from 'react'
import Dialog from './dialog'

const DialogExample = () => {
  const [x, setX] = useState(false)
  return (
    <Fragment>
      <button onClick={() => setX(!x)}>click</button>
      <Dialog visible={x}>
        hello
      </Dialog>
    </Fragment>
  )
}
export default DialogExample