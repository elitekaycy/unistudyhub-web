import { TOKEN } from "./constant"

export const useInitials = (name) => {
    if (!name) 
        return 'An'
    
    if (name.length === 1) 
        return name
    
    return `${
        name[0].toUpperCase()
    }${
        name[1].toLowerCase()
    }`
}

export const setToken = (token) => {
    localStorage.setItem(TOKEN, token)
}

export const getToken =  () => {
    return localStorage.getItem(TOKEN) || null
}

export const BaseFetch = async(url, options = {
    method: 'GET'
}) => {
    try {
        const response = await fetch(url, options)
        if(!response.ok) throw Error(response?.statusText)

        return await response.json()

    } catch (err) {
        throw Error(err)
    }

}
