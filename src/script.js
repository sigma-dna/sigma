const sigmaHeader = window.document.querySelector('#sigma-header');
sigmaHeader.innerHTML = 
`<header>
    <a href="/sigma/" class="logo"><span class="color-style">Σ</span> sigma</a>
    <nav>
        <ul id="header-menu">
            <li><a href="/sigma/" class="menu-option">Estatística I</a></li>
            <li><a href="/sigma/gacvi/" class="menu-option">GACV I</a></li>
            <li><a href="/sigma/" class="menu-option">Pré-Cálculo</a></li>
            <li><a href="/sigma/" class="menu-option">Contato</a></li>
        </ul>
    </nav>
</header>`;
if(!window.document.querySelector('#sigma-home')){
    sigmaHeader.style.setProperty('box-shadow','0px 1px 2px -1px rgba(54,47,35,.4)');
}
const titles = window.document.querySelectorAll('.content-article>h2');
const nav = window.document.querySelector('#aside-nav');
function createAsideNav(){
    nav.replaceChildren()
    titles.forEach(title=>{
        const li = window.document.createElement('li');
        const a = window.document.createElement('a');
        a.setAttribute('href',`#${title.id}`);
        a.classList.add('menu-option', 'aside-option');
        a.innerText = title.innerText;
        li.appendChild(a);
        nav.appendChild(li);
    })
    const asideOptions = window.document.querySelectorAll('.aside-option');
    asideOptions.forEach(asideOption=>{
        asideOption.addEventListener('click', scroll);
    })
    function scroll(e){
        e.preventDefault();
        const headerHeight = sigmaHeader.getBoundingClientRect().height;
        const to = window.document.querySelector(this.getAttribute('href')).parentElement;
        const position = to.getBoundingClientRect().top;
        window.scrollBy({top: position - headerHeight, behavior: 'smooth'});
    }
}
createAsideNav();