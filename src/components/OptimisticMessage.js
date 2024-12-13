import { useRef, useState } from 'react'

async function sendMessage(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message)
    }, 1000)
  })
}

export default function OptimisticMessage() {
  const formRef = useRef()
  const [messages, setMessages] = useState([])

  async function formAction(formData) {
    formRef.current.reset()
    const message = await sendMessage(formData.get('message'))
    setMessages((messages) => [...messages, { text: message, pending: false }])
  }
  return (
    <form ref={formRef} action={formAction}>
      <div className="input-field">
        <input name="message" />
      </div>
      <button type="submit" className="btn">
        Send
      </button>
      <ul className="collection">
        {messages.map((message, i) => (
          <li className="collection-item" key={i}>
            {message.text} {message.pending && <small>(Adding)</small>}
          </li>
        ))}
      </ul>
    </form>
  )
}
