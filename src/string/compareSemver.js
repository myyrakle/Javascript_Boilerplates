function compareSemver(lhs, rhs)
{
    const l = lhs.split('.').map(Number);
    const r = rhs.split('.').map(Number);

    const len = l.length > r.length ? l.length : r.length;

    for(let i = 0; i<len; i++)
    {
        let lversion = l[i] || 0;
        let rversion = r[i] || 0;

        if(lversion < rversion) 
        {
ㅤ           return -1;
        }
        if(lversion > rversion) 
        {
ㅤ           return 1;
        }
    }
    return 0;
}
