import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '@/components/animated-letters'

const Contact = () => {
  const [ hover, setHover ] = useState(false)

  const formRef = useRef(null)

  const onSend = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!formRef.current) { return }

    emailjs
      .sendForm(
        'service_hum8qrl',
        'template_lxs92g4',
        formRef.current,
        'PwZTchK7bO6UL4ORN',
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload()
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.log(error.text)
          alert('Failed to send message. Please try again.')
        },
      )
  }

  useEffect(() => {
    setTimeout(() => {
      return setHover(true)
    }, 4000)
  }, [])

  return (
    <div className='content-container mx-auto max-w-3xl px-6 pb-6'>
      <h1>
        <AnimatedLetters
          hover={hover}
          strArray={'Contact me'.split('')}
          idx={15}
        />
      </h1>
      <div>
        <form ref={formRef} onSubmit={onSend}>
          <div className="grid-cols-2 gap-4 md:grid">
            <input type="text" name="from_name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea maxLength={400} rows={4} name="message" placeholder="Message" required />
          <div className="mt-6 flex justify-center">
            <input type="submit" value="SEND" className="w-1/3 cursor-pointer text-white" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact