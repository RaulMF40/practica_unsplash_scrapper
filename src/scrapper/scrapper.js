const { default: puppeteer } = require('puppeteer')

//! scrapper
const scrapper = async (url) => {
  const arrayImgs = []
  const browser = await puppeteer.launch({ headless: false })

  const page = await browser.newPage()

  await page.goto(url)

  const divsWxXog = await page.$$('div.WxXog') // esto para saber con ese div de ese nombre en este caso WxXog que tienen esta clase

  let inicio = Math.floor(Math.random() * divsWxXog.length)

  if (inicio >= divsWxXog.length - 20) {
    inicio -= 20
  }

  let final = inicio + 20

  for (let i = inicio; i < final; i += 2) {
    const div = divsWxXog[i]
    const img = await div.$eval('img', (e) => e.src)
    arrayImgs.push(img)
  }
  browser.close()
  return arrayImgs
}

module.exports = { scrapper }
