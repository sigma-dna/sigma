const sigmaHeader = window.document.querySelector('#sigma-header');
const closeButton = window.document.querySelector('.close-advice')
sigmaHeader.innerHTML = 
`<header>
    <a href="/sigma/" class="logo"><span class="color-style">Σ</span> sigma</a>
    <nav>
        <ul id="header-menu">
            <li class="menu-option dropdown">
                <h2>1° Período</h2>
                <ul class="dropdown-menu">
                    <li class="menu-option"><a href="/sigma/">Estatística I</a></li>
                    <li class="menu-option dropdown-option"><a href="/sigma/gacvi/">GACV I</a></li>
                    <li class="menu-option"><a href="/sigma/">Pré-Cálculo</a></li>
                </ul>
            </li>
            <li class="menu-option"><a href="/sigma/gacvi/">Outros Períodos</a></li>
            <li class="menu-option"><a href="/sigma/">Optativas</a></li>
            <li class="menu-option"><a href="/sigma/">Contato</a></li>
        </ul>
    </nav>
</header>`;
if(!window.document.querySelector('#sigma-home')){
    sigmaHeader.style.setProperty('border-bottom','.0625rem solid rgba(31, 27, 22, 0.08)');
    sigmaHeader.querySelector('header').style.setProperty('padding','.59375rem .625rem');
    const titles = window.document.querySelectorAll('.content-article>h2');
    const nav = window.document.querySelector('#aside-nav');
    function createAsideNav(){
        nav.replaceChildren()
        titles.forEach(title=>{
            const li = window.document.createElement('li');
            li.classList.add('menu-option', 'aside-option');
            const a = window.document.createElement('a');
            a.setAttribute('href',`#${title.id}`);
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
    closeButton.addEventListener('click', closeAdvice)
    function closeAdvice() {
        closeButton.parentElement.parentElement.remove()
    }
}