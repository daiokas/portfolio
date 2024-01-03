
type Props = {
  hover: boolean
  strArray: string[]
  idx: number
}

const AnimatedLetters = ({ hover, strArray, idx }: Props) => {

  return (
    <span>
      {
        strArray.map((char, i) => (
          <span key={char + i} className={`${hover ? 'textAnimateHover' : 'textAnimate'} _${i + idx}`}>
            {char}
          </span>
        ))
      }
    </span>
  )
}

export default AnimatedLetters