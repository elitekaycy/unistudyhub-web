export const useInitials = (name) => {
    if(!name) return 'An'
    if(name.length === 1) return name
    return `${name[0].toUpperCase()}${name[1].toLowerCase()}`
}