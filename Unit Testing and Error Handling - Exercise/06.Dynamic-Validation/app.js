function validate() {
    document.getElementById('email').addEventListener('change', function(e) {
        if(!e.currentTarget.value.match(/[a-z]+\@[a-z]+\.[a-z]+/) && !e.currentTarget.classList.contains('error')) {
            e.currentTarget.classList.add('error');
        } else if(e.currentTarget.value.match(/[a-z]+\@[a-z]+\.[a-z]+/) && e.currentTarget.classList.contains('error')) {
            e.currentTarget.classList.remove('error');
        }
    });
}