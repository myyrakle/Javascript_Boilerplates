//쿠키 획득
function getCookie(cookie_name) 
{
    let name = cookie_name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++)
    {
        let c = ca[i];
        while (c.charAt(0) == ' ') 
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) 
        {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cookieName, cookieValue) 
{
    window.document.cookie = `${cookieName}=${cookieValue}`;
}
