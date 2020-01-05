/*
const getFromSlug = (v, options) =>
  options.reduce((a,e) => {
    const c = e.slug == v
    console.log(e.name, e.slug)
    console.log('match', e.slug, v, c)
    return e.slug == v ? e.id : a
	}, null)*/

const getFromSlug = (v, options, callback=undefined) => {
  var i = 0
  var l = options.length
  var match = {}
  if (l) {
    while (i < l){
      if (options[i].slug == v) {
        match=options[i]
        break
      }
      i++
    }
  }
  if (callback && match.id) callback(match)
  return match.id || null

}

export default getFromSlug
