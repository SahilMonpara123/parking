function setCookie(cname, cvalue) {
  document.cookie = cname + '=' + cvalue + '; 0';
}

function getCookie(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return '';
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const loc = urlParams.get('location');
//console.log(loc);

if (loc) {
  setCookie('overRide', 'true');
}

fetch('https://ipapi.co/json/')
  .then((res) => res.json())
  .then((out) => {
    //console.log('Output: ', out['country']);
    const overRide = getCookie('overRide');
    //console.log(overRide);
    /*if (!overRide && out['country'] === 'US') {
      window.location.href = '../en-us';
    } else */ if (!overRide && out['country'] === 'BR') {
      window.location.href = '../prt';
    }
  })
  .catch((err) => console.error(err));
