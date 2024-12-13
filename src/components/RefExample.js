import { useImperativeHandle, useRef } from 'react'

const AppInput = ({ ref }) => {
  const inputRef = useRef()

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }))

  return (
    <div className="input-field">
      <input ref={inputRef} />
    </div>
  )
}

export default function RefExample() {
  const ref = useRef()
  return (
    <>
      <AppInput ref={ref} />
      <button className="btn" onClick={() => ref.current.focus()}>
        Focus
      </button>
    </>
  )
}
