export const useUtils = () => {
    const sayHello = () => console.log("Hello from useUtills")
    return {
        sayHello,
    }
}