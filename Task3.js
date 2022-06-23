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

const devideAndShortManual = (number) => {
    const num = BigInt(number)
    const numAdd = num + 1n
    const string = numAdd+''
    const len = string.length-1
    let arr = []
    let zero = []

    //make string to array
    for(let i=0; i<=len; i++){
        zero[i] = [string[i]]
        arr[i+1]=arr[i];
        arr[i]= zero[i];
        zero = []
    }
    //make split array
    let newArr = []
    let palet,palet3 = []
    let temp,swapped
    let a = 0
    for(let i=0; i<=len; i++, a++){
        if(arr[i]==0){
            for(i=0;i<=a-1;i++){
                swapped = false
                for(let j=0;j<a-i;j++){
                    if (newArr[j] > newArr[j+1]){
                        temp = newArr[j];
                        newArr[j] = newArr[j+1];
                        newArr[j+1] =temp;
                        swapped = true;
                    }
                    if (swapped == false){
                        zero = []
                        break;
                    }
                }
            }
        }else{
            zero[i] = [arr[i]]
            newArr[i+1]=newArr[i];
            newArr[i]= zero[i];
            palet = newArr
            zero = []
        }
    }console.log(palet);
}

devideAndShort(98123037221069457)

devideAndShortManual(98123037221069457)