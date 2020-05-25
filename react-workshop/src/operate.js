export const sum = (x,y) => x+y
export const divide = (x,y) => {
    if(y === 0) throw TypeError()
    return x/y
}
