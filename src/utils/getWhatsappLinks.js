
import CONFIG from 'config'

export default function getWhatsappLinks(message)
{
  const t = encodeURIComponent(message)
  return [
    `https://wa.me/${CONFIG.PHONE}/?text=${t}`,
    `https://web.whatsapp.com/send?phone=${CONFIG.PHONE}&text=${t}`
  ]
}
