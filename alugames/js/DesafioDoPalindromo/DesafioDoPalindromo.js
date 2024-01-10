function palindromo(str){
    let re = /[\W_]/g;
    let formatarLowCase = str.toLowerCase().replace(re, '');
    let fraseReversa = formatarLowCase.split('').reverse().join('');
    return formatarLowCase === fraseReversa;
}