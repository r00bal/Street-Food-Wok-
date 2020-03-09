export const anyIsTrue = (obj) => {
 return Object.keys(obj).some((key) => obj[key])
}