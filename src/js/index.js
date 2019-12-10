// import { run } from './utils'
import { config } from '../config/index'
import { color } from './demo.ts'
import "../sass/sass.scss"
import "../css/main.css"
import background from '../assets/images/lottery-background.png'

const a = {
  a: 'b',
  b: {
    c: 1
  }
}
const bb = () => new Promise((res, rej) => {
  setTimeout(async () => {
    const { get } = await import(/* webpackChunkName: "lodash", webpackPrefetch: true */ 'lodash')
    const aa = get(a, ['b', 'c'])
    res(aa)
  }, 5000)
})

console.log('color', color)

async function asyncData() {
  const b = await bb()
  console.log('bb', b)
}

// console.log('bb', asyncData())
const getElement = el => document.querySelector(el)
const img = document.createElement('img')
img.src = background
img.onload = function() {
  const body = getElement('body') 
  body.insertAdjacentElement('beforeend', img)
}
