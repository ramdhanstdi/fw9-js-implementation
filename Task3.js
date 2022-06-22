const devideAndShort = (number) => {
    const num = BigInt(number)
    const numAdd = num + 1n
    const string = numAdd.toString()
    const arr = string.split(0);
    let result = ''
    let final = []
    let end = []
    let i=0
    do{
        result = arr[i]
        final[i] = result.split('').sort((a,b)=>a-b).join()
        end = end + final[i]
        i++
    }while(i<arr.length) 
    const numEnd = end.split('').filter(Number).join('')
    const numEnd2 = parseInt(numEnd);
    console.log(numEnd2);
}

devideAndShort(98123037221069457)