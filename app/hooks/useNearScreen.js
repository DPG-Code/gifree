import { useState, useEffect, useRef } from 'react'

export function useNearScreen({
  distance = '100px',
  externalRef,
  once = true
} = {}) {
  const fromRef = useRef()
  const [isNearScreen, setShow] = useState(false)

  useEffect(function () {
    let observer

    const element = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        // observer.unobserve(element) --> Para dejar de ver arriba y abajo
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      })

      if (element) {
        observer.observe(element)
      }
    })

    return () => observer && observer.disconnect()
  })
  return { isNearScreen, fromRef }
}
