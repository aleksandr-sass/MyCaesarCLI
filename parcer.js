let lp=process.argv.length;
module.exports.action=function()
{
    for(let i=2;i<lp;i++)
    {
        if(process.argv[i]=='-a'||process.argv[i]=='--action')
            return process.argv[i+1];
    }
}

module.exports.shift=function()
{
    for(let i=2;i<lp;i++)
    {
        if(process.argv[i]=='-s'||process.argv[i]=='--shift')
            return process.argv[i+1];
    }
}
module.exports.input=function()
{
    for(let i=2;i<lp;i++)
    {
        if(process.argv[i]=='-i'||process.argv[i]=='--input')
            return process.argv[i+1];
    }
}
module.exports.output=function()
{
    for(let i=2;i<lp;i++)
    {
        if(process.argv[i]=='-o'||process.argv[i]=='--output')
            return process.argv[i+1];
    }
}