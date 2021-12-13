export const fetcher = async(...args) => {
    try {
    const res = await fetch(...args)
    const json = await res.json()
    return json;
}
catch (e) {
    console.log('we have an error')
    }
}