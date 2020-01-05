export default function minutesLong(text){
  return ~~(String(
    text).split(/[ .,]+/)
    .length / 210) + 1 //3.7 words per second 210 per minute


}
