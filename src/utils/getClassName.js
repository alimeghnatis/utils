import C from 'ui/cssClasses'

export default function(v) {
  return process.env[v] || C[v]
}
