(function () {
    function menu() {
        const moreItem = document.querySelector('.menu li.more')
        const searchItem = document.querySelector('.menu li.search')
        const moreIcon = moreItem.querySelector('i')
        const searchIcon = searchItem.querySelector('i')
        const subMenu = moreItem.querySelector('.sub-menu')

        moreIcon.addEventListener('click', () => {
            if(!searchItem.classList.contains('active')) {
                subMenu.classList.toggle('open')
            }

            moreItem.classList.toggle('active')
            searchItem.classList.remove('active')

            subMenu
                .querySelectorAll('.menu-section')
                .forEach(section => section.classList.remove('hide'))
        })

        searchIcon.addEventListener('click', () => {
            if(!moreItem.classList.contains('active')) {
                subMenu.classList.toggle('open')
            }
            
            moreItem.classList.remove('active')
            searchItem.classList.toggle('active')

            subMenu
                .querySelectorAll('.menu-section')
                .forEach(section => section.classList.add('hide'))
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