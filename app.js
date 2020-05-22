document.addEventListener('DOMContentLoaded', function () {
    let colorArray = [
        'yellow',
        'green',
        'blue',
        'red',
        'orange',
        'purple',
        'violet',
        'black',
    ];
    let squareColor = document.getElementsByClassName('square');
    let btn = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    let container = document.createElement('div');
    container.classList.add('container');

    btn.appendChild(btnText);
    document.body.appendChild(btn);
    document.body.appendChild(container);

    let num = 1

    btn.addEventListener("click", () => {
        let div = document.createElement('div');
        div.className = 'square';
        container.appendChild(div);
        div.id = num
        div.innerHTML = num
        num++

        div.addEventListener("click", function () {
            setElementColor(div);

        });
        div.addEventListener("dblclick", function () {
            if (div.id % 2 == 0) {
                if (this.nextSibling !== null) {
                    this.nextSibling.remove()
                } else {
                    alert('There is not a square after this one')
                }
            } else {
                if (this.previousSibling !== null) {
                    this.previousSibling.remove()
                } else {
                    alert('There is not a square before this one')
                }
            }

        })

    });


    function setElementColor(element) {
        let randomNumber = Math.floor((Math.random() * 7));
        element.style.backgroundColor = colorArray[randomNumber];
    }


})
