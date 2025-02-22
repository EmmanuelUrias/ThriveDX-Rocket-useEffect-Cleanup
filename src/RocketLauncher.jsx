import React, { useEffect } from 'react'

const RocketLauncher = (props) => {
  let counter = 1000

  useEffect(() => {
    const countdown = () => console.log(counter -= 1)
    console.log('Rocket launcher mounted')
    let interval = setInterval(countdown, 1000)

    //cleanup function
    return () => {
        console.log('Rocket launcher unmounted')
        clearInterval(interval)
    }
  })

  return (
    <p>Rocket launcher is counting down</p>
  )
}

export default RocketLauncher