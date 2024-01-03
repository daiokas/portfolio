import { useEffect, useState } from 'react'
import AnimatedLetters from '@/components/animated-letters'

const About = () => {
  const [ hover, setHover ] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      return setHover(true)
    }, 4000)
  }, [])

  return (
    <div className='content-container mx-auto max-w-3xl px-8 md:px-0'>
      <h1>
        <AnimatedLetters
          hover={hover}
          strArray={'About me'.split('')}
          idx={15}
        />
      </h1>
      <p>
        I embarked on a double-degree program, studying physics and data processing
        at Keio University in Tokyo, while simultaneously specializing in optical
        technologies at Leibniz University Hannover. However, I made a decision to
        transition from academia to professional practice, opting to join a startup
        as a web/mobile software engineer.
      </p>
      <br />
      <p>
        Throughout my tenure at the startup, I actively contributed to the development
        of a networking service connecting artists and musicians. I was a member of a
        five-person engineering team responsible for crafting and maintaining diverse
        web and mobile applications across sectors including retail, healthcare, and security.
      </p>
      <br />
      <p>
        Front-end development emerged as my primary area of expertise, using JavaScript,
        React, React Native, and SwiftUI. Recently, I concluded my engagement with the
        startup and am currently exploring fresh opportunities that leverage my skills
        and experience.
      </p>
    </div>
  )
}

export default About