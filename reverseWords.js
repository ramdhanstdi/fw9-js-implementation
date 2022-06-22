const reverseWords = (string) =>{
    const len = string.length-1
    let hasil = ''
    let j = 0
    for (let i=len; i>=0; i--){
        hasil = hasil + string[i]
    }
    let hasil2 = ""
    let reversed = ""
    let i = 0
    do {
        hasil2=hasil2+hasil[i]
        j++
        if (hasil[i]===' '){
            let a = i
            do{
                reversed=reversed+hasil2[a]
                j--
                a--
            }while(j!=0)
        }i++
        }while(i<=len)

    reversed= reversed+" "
    let a = i - 1
        do{
            reversed=reversed+hasil2[a]
            j--
            a--
        }while(j!=0)
    console.log(reversed);
}

reverseWords("hello world")

const revWordsBuiltIn = (string) => {
    const len = string.length-1
    const arr = string.split('').reverse()
    let result = ''
    let final = ''
    let i=0
    let j=0
    do{
        result= result + arr[i]
        if(arr[i]===' '){
            final = result.split('').reverse().join('')
            j=0
        }
        i++
        j++
    }while(i<=len)
    i=0
    const world = result.split('').reverse()
    final = final + ' '
    do{
        final = final + world[i]
        i++
    }while(i<j)
    console.log(final);
}

revWordsBuiltIn("hello world")