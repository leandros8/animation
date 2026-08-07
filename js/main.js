

let border = $('.keyboard .border');
let key = '';

for(let i = 0; i < 90; ++i){
    key += '<span class="key"></span>';
}border.html(key);