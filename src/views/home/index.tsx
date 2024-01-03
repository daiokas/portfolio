import { useEffect, useState } from 'react'

import { faJs, faReact, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import AnimatedLetters from '@/components/animated-letters'


const Home = () => {
  const [ hover, setHover ] = useState(false)
  const nameArray = 'dai'.split('')
  const jobArray = 'frontend developer'.split('')

  useEffect(() => {
    setTimeout(() => {
      return setHover(true)
    }, 4000)
  }, [])

  return (
    <div className='content-container px-8 md:mx-20 md:mt-20'>
      <h1>
        <AnimatedLetters
          hover={hover}
          strArray={nameArray}
          idx={15}
        />
        <br />
        <div className='hidden md:block'>
          <AnimatedLetters
            hover={hover}
            strArray={jobArray}
            idx={18}
          />
        </div>
        <div className='md:hidden'>
          <AnimatedLetters
            hover={hover}
            strArray={'frontend'.split('')}
            idx={18}
          />
          <br />
          <AnimatedLetters
            hover={hover}
            strArray={'developer'.split('')}
            idx={18}
          />
        </div>

      </h1>
      <Link href='/contact' className='flatButton'>CONTACT ME</Link>
      <div className='absolute -bottom-2 flex gap-2'>
        <FontAwesomeIcon icon={faJs} />
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faCss3Alt} />
        <FontAwesomeIcon icon={faReact} />
      </div>
    </div>
  )
}

export default Home