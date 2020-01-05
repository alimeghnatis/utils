import {
  /* Link as ScrollLink,
     animateScroll as scroll */
  scroller
}
  from 'react-scroll'

const DEFAULT_DELAY = 600

export default function(map){
  map.forEach((e, d) =>{
    if (e) {
	    const el = document.getElementById(e)
      setTimeout(() => el.click(), DEFAULT_DELAY *d)
      if (!d) scroller.scrollTo(map[0], {
        duration: DEFAULT_DELAY,
        //delay: DEFAULT_DELAY,
		      smooth: 'easeInOutQuart'
      })
    }

  })


}
