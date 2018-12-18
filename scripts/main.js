const btnCall = document.getElementsByClassName('button-call');
const popup = document.querySelector('#popup')

for (let i = 0; i < btnCall.length; i++) {
    btnCall[i].addEventListener('click', function(){
        popup.style.display = 'flex';
    });
};

popup.addEventListener('click', function(e) {
    if (this === e.target) {
        this.style.display = 'none';
    };
});