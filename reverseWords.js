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
    const result = string.split(' ').reverse().join(' ')
    console.log(result);
}

revWordsBuiltIn("hello world")