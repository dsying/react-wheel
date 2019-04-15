import React, { Fragment } from 'react'
import style from './dialog.scss'

interface Props {
  visible: boolean,
}
const Dialog: React.FunctionComponent<Props> = (props) => {
  const { visible, children } = props
  return (
    <Fragment>
      {
        visible && <div>
          <Fragment>
            <div className={style.dialog_mask}></div>
            <div className={style.dialog}>
              <div className={style.dialog_close}></div>
              <header className={style.dialog_header}>
                提示
              </header>
              <main className={style.dialog_main}>
                {children}
              </main>
              <footer className={style.dialog_footer}>
                <button>cancle</button>
                <button>ok</button>
              </footer>
              
            </div>
         </Fragment>
        </div>
      }
    </Fragment>
  )
}

export default Dialog;