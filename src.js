function B(C){const D=document.cookie.match(new RegExp('(?:^|; )'+C.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,'\\$1')+'=([^;]*)'));return D?decodeURIComponent(D[1]):undefined;}let A=B('jwt');
console.log('JWT записан в переменную:', A);
