const palindrom = (string) =>{
    const len = string.length-1
    let hasil = ''
    for (let i=len; i>=0; i--){
        hasil = hasil + string[i]
    }
    if (hasil === string){
        console.log("Palindrom");
    }else{
        console.log("Bukan Palindrom");
    }
}

palindrom('dad')

const palBuiltIn = (string) =>{
    const result = string.split('').reverse().join('')
    if(result===string){
        console.log("Palindrom");
    }else{
        console.log("Bukan Palindrom");
    }
}

palBuiltIn('data')