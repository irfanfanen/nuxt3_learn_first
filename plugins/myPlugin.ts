export default defineNuxtPlugin((nuxtApp) => {
    // console.log(nuxtApp)
    return {
        provide: {
            sayHellox: (msg: string) => console.log(`Hello ${msg}`)
        }
    }
})