import { useState, useEffect, useRef } from 'react'

// Hook that call the next function (fetch) after scroll the end of the page.
export function useNearScreen({
  distance = '100px',
  externalRef,
  once = true
} = {}) {
  const fromRef = useRef()
  const [isNearScreen, setShow] = useState(false)

  useEffect(function () {
    let observer

    // Element have the reference to call the next function.
    const element = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        // observer.unobserve(element) --> Allows us see above and below the element.
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    // Import "intersection-observer" if we are in the end of the page
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
