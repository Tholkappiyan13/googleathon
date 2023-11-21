const happyLink = document.getElementById('happy');
const sadLink = document.getElementById('sad');
const darkLink = document.getElementById('dark');
const loveLink = document.getElementById('love');
const breakupLink = document.getElementById('breakup');

const happyBox = document.createElement('div');
happyBox.id = 'happy-more-box';
happyBox.textContent = 'More about Happy';
happyBox.style.display = 'none';

const sadBox = document.createElement('div');
sadBox.id = 'sad-more-box';
sadBox.textContent = 'More about Sad';
sadBox.style.display = 'none';

const darkBox = document.createElement('div');
darkBox.id = 'dark-more-box';
darkBox.textContent = 'More about Dark';
darkBox.style.display = 'none';

const loveBox = document.createElement('div');
loveBox.id = 'love-more-box';
loveBox.textContent = 'More about Love';
loveBox.style.display = 'none';

const breakupBox = document.createElement('div');
breakupBox.id = 'breakup-more-box';
breakupBox.textContent = 'More about Breakup';
breakupBox.style.display = 'none';

document.body.appendChild(happyBox);
document.body.appendChild(sadBox);
document.body.appendChild(darkBox);
document.body.appendChild(loveBox);
document.body.appendChild(breakupBox);

happyLink.addEventListener('click', () => {
    if (happyBox.style.display === 'none') {
        happyBox.style.display = 'block';
    } else {
        happyBox.style.display = 'none';
    }
});

sadLink.addEventListener('click', () => {
    if (sadBox.style.display === 'none') {
        sadBox.style.display = 'block';
    } else {
        sadBox.style.display = 'none';
    }
});

darkLink.addEventListener('click', () => {
    if (darkBox.style.display === 'none') {
        darkBox.style.display = 'block';
    } else {
        darkBox.style.display = 'none';
    }
});

loveLink.addEventListener('click', () => {
    if (loveBox.style.display === 'none') {
        loveBox.style.display = 'block';
    } else {
        loveBox.style.display = 'none';
    }
});

breakupLink.addEventListener('click', () => {
    if (breakupBox.style.display === 'none') {
        breakupBox.style.display = 'block';
    } else {
        breakupBox.style.display = 'none';
    }
});