export function darkMode(){
    const $body = document.querySelector('#body')
    const $switch = document.querySelector('#switch');
        $switch.addEventListener('change', function(){
            if (this.checked) {
                $body.classList.add('dark');
            } else {
                $body.classList.remove('dark');
            };
        });
};