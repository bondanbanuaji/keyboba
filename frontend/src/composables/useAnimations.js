import gsap from 'gsap'

export function useAnimations() {
  const fadeIn = (element, duration = 0.5) => {
    return gsap.from(element, {
      opacity: 0,
      duration,
      ease: 'power2.out'
    })
  }

  const slideIn = (element, direction = 'left', duration = 0.5) => {
    const distance = 50
    const from = {
      opacity: 0,
      duration,
      ease: 'power2.out'
    }

    switch (direction) {
      case 'left':
        from.x = -distance
        break
      case 'right':
        from.x = distance
        break
      case 'top':
        from.y = -distance
        break
      case 'bottom':
        from.y = distance
        break
    }

    return gsap.from(element, from)
  }

  const keyPressAnimation = (element) => {
    return gsap.to(element, {
      scale: 0.95,
      duration: 0.075,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut'
    })
  }

  const counterAnimation = (element, endValue, duration = 1000) => {
    const obj = { value: 0 }
    return gsap.to(obj, {
      value: endValue,
      duration: duration / 1000,
      ease: 'power1.out',
      onUpdate: () => {
        if (element) {
          element.textContent = Math.round(obj.value)
        }
      }
    })
  }

  const pulseAnimation = (element) => {
    return gsap.to(element, {
      scale: 1.05,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    })
  }

  return {
    fadeIn,
    slideIn,
    keyPressAnimation,
    counterAnimation,
    pulseAnimation
  }
}
