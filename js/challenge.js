document.addEventListener('DOMContentLoaded', () => {
    const counter = document.querySelector('h1#counter');

    function plusHandler() {
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
    }

    function minusHandler() {
        counter.innerHTML = parseInt(counter.innerHTML) - 1;
    }

    clockInit = setInterval(plusHandler, 1000)

    //Pause buttons
    const pauseButton = document.getElementById('pause');
    pauseButton.addEventListener('click', () => {
        if (!pauseButton.classList.contains('paused')) {
            pauseButton.classList.add('paused')
            pauseButton.innerHTML = 'resume';
            clearInterval(clockInit);
            
            const buttons = document.querySelectorAll('button')
            buttons[0].setAttribute('disabled', " ");
            buttons[1].setAttribute('disabled', " ");
            buttons[2].setAttribute('disabled', " ");
        } else {
            pauseButton.innerHTML = 'pause';
            pauseButton.classList.remove('paused');
            clockInit = setInterval(plusHandler, 1000)
            
            const buttons = document.querySelectorAll('button')
            buttons[0].removeAttribute('disabled');
            buttons[1].removeAttribute('disabled');
            buttons[2].removeAttribute('disabled');
        }
    })

    //Plus event
    const plusBtn = document.querySelector('button#plus')
    plusBtn.addEventListener('click', plusHandler)

    //Minus event
    const minusBtn = document.querySelector('button#minus')
    minusBtn.addEventListener('click', minusHandler)

    //Comment event
    const commentForm = document.querySelector('form')
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const p = document.createElement('p');
        p.innerHTML = e.target.comment.value;
        const comments = document.getElementById('list')
        comments.append(p)
    })

    //Like event
    const likeBtn = document.querySelector('button#heart')
    const likes = document.querySelector('ul.likes')
    const likeObj = {}

    likeBtn.addEventListener('click', () => {
        const counter = document.querySelector('h1#counter').innerHTML;
        if (`${counter}` in likeObj) {
            likeObj[`${counter}`] = likeObj[`${counter}`] + 1
        } else {
            likeObj[`${counter}`] = 1;
        }

        likes.innerHTML = ""
        for (let key in likeObj) {
            const li = document.createElement("li")
            li.innerText = `${key} has been liked ${likeObj[key]} times.`
            likes.append(li)
        }
    })
})