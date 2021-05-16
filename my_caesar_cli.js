const parcer=require('./parcer.js');
const fs=require('fs');
const normalizerC=require('./normalizeC.js');
const encode=require('./encode.js');
const decode=require('./decode.js');

let lpm=process.argv.length;
if(lpm!=10)
{
    let str3='node my_caesar_cli.js -a encode -s 7 -i "./input.txt" -o "./output.txt"';
    console.log("!!!ERROR:Not enough data. Please, try to type:\n \n"+str3+"\n");
    return 1;
}

let str=fs.readFileSync(parcer.input(),"utf-8");
let c=normalizerC.nmc(parcer.shift());
let action=parcer.action();
let path=parcer.output();
let result="";

if (action=='encode') result=encode.ncd(str,c);
if (action=='decode') result=decode.dcd(str,c);

console.log(result);
fs.appendFileSync(path, result);