

let liked = false; 

const template = () => `
    <span class="${liked ? 'liked' : 'notliked'}">
        <button>
            <i className="material-icons ">favorite</i>
        </button>
    </span>
`;

function setLiked(newValue) {
    liked = newValue;
    Like();
}

export function Like() {
    const root = document.getElementById('root');
    root.innerHTML = template();
    root.querySelector('button').onclick = () => setLiked(!liked);
}

