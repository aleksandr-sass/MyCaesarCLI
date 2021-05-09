const alphabet=require("./alphabet.js");
const big=require('./big.js');
module.exports.dcd=function(str,c)
{
    let str2="";
    let l=str.length;
    let a=alphabet.a;
    let b=a.slice(-c)+a.slice(0,26-c);
    let aA=big.big(a);
    let bB=big.big(b);

    for(let i=0;i<l;i++)
    {
        let position=aA.indexOf(str[i]);
        if(position!=-1) str2+=bB[position];
        else str2+=str[i];
    }
    return str2;
}