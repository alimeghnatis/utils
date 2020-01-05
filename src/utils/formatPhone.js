function formatPhone (s) {
  const t = s.replace(/^0+(?=\d)/, '')
  return (t.slice(0,3)	 + ' ' + t.slice(3,6) + ' ' + t.slice(6)).trim()
}

export default formatPhone

