(function () {
    function menu() {
        const moreBtn = document.querySelector('.menu li.more')
        const searchBtn = document.querySelector('.menu li.search')
        const subMenu = moreBtn.querySelector('.sub-menu')

        moreBtn.addEventListener('click', () => {
            if(!searchBtn.classList.contains('active')) {
                subMenu.classList.toggle('open')
            }

            moreBtn.classList.toggle('active')
            searchBtn.classList.remove('active')

            subMenu
                .querySelectorAll('.menu-section')
                .forEach(section => section.classList.add('open'))
        })

        searchBtn.addEventListener('click', () => {
            if(!moreBtn.classList.contains('active')) {
                subMenu.classList.toggle('open')
            }
            
            moreBtn.classList.remove('active')
            searchBtn.classList.toggle('active')

            subMenu
                .querySelectorAll('.menu-section')
                .forEach(section => section.classList.remove('open'))
        })
    }

    if (document.readyState === 'complete') {
        menu()
        return
    }

    document.addEventListener('DOMContentLoaded', function handleDOMContentLoaded() {
        menu()
        document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded)
    })
})()