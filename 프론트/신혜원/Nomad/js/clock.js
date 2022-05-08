const clock = document.querySelector('#clock')


const date = new Date()

const getClock = () => {
  const date = new Date()
  const hrs = String(date.getHours()).padStart(2, '0')
  const mins = String(date.getMinutes()).padStart(2, '0')
  const secs = String(date.getSeconds()).padStart(2, '0')
  clock.innerText = `${hrs}:${mins}:${secs}`
}
// 
/* interval 은 반복하여 실행되고, timeout은 1회만 실행됨.
*/
getClock()
setInterval(getClock, 1000)
// setTimeout(sayHello, 1000)