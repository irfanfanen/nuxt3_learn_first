import data from './products.json';

export default defineEventHandler(async () => {
    return new Promise<void>((resolve) => {
      setTimeout(()=> {
        resolve(data)
      }, 2000)
    })
})