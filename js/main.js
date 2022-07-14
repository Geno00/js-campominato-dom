const playDom = document.getElementById('play');

playDom.addEventListener('click', 

    function() {

        const gridDom = document.getElementById('grid');
        gridDom.innerHTML = '';

        for (let i = 0; i < 100; i++) {
    
            const currentElement = document.createElement('div');
            currentElement.classList.add('square');

        
            currentElement.addEventListener('click',
                function () {
                    if (this.classList.contains('clicked')) {
                        this.classList.remove('clicked');
                    }else{
                        this.classList.add('clicked');
                    }
                }
            );
            
            gridDom.append(currentElement);
        }
    }
);

const Boom = document.getElementsByName('bomba');

