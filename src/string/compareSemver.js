// 왼쪽이 작으면 -1
// 같으면 0
// 오른쪽이 크면 1
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

function lessThanSemver(lhs, rhs)
{
    return compareSemver(lhs, rhs) == -1;
}

function greaterThanSemver(lhs, rhs)
{
    return compareSemver(lhs, rhs) == 1;
}

function equalSemver(lhs, rhs)
{
    return compareSemver(lhs, rhs) == 0;
}
