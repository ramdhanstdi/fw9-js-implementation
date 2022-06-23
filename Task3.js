const devideAndShort = (number) => {
    const num = BigInt(number)
    const numAdd = num + 1n
    const string = numAdd.toString().split(0)
    let final = ''
    for(let i=0;i<string.length; i++){
        const result = string[i].split('').sort((a,b)=>a-b).join('')
        final=final + result
    }const finalNum = parseInt(final)
    console.log(finalNum);
}

const devideAndShortManual = (number) => {
    const num = BigInt(number)
    const numAdd = num + 1n
    const string = numAdd+''
    const len = string.length-1
    let zero = []
    let arr = []
    let newArr = []
    let i = 0
    do{
        if(string[i]==0||i==len+1){
            arr = arr + [zero]
            for (let n = 0; n < arr.length; n++) {
                let i = 0;
                while (arr[i] < arr[n]) ++i;
        
                let newStr = "";
                for (let x = 0; x < i; x++) newStr += arr[x];
                newStr += arr[n];
                for (let y = i; y < n; y++) newStr += arr[y];
                for (let z = n + 1; z < arr.length; z++) newStr += arr[z];
                arr = newStr;
            }
            newArr = newArr + arr
            arr = []
            zero = []
            i++
        }else{
            zero = zero + [string[i]]
            i++
        }
    }while(i<=len+1)
    const finalNum = newArr*1
    console.log(finalNum);
}

devideAndShort(98123037221069457)

devideAndShortManual(98123037221069457)