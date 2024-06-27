document.addEventListener('DOMContentLoaded', () => {

    console.log(window.innerWidth)
    const menuBtn = document.querySelector('.menu-btn');
    const app = document.querySelector('.app');
    const cover = document.querySelector('.cover');

    menuBtn.addEventListener('click', () => {
        const menuItem = createDropdownMenu();
        console.log(menuItem);
        document.body.appendChild(menuItem);
        cover.classList.remove('display');
    })

    // Trying to implement this behavior when the user window expands..
    // if (window.innerWidth > 717) {
    //     cover.classList.add('display');
    //     console.log('remove cover');
    // }


    // create a dropdown menu function

    const linkCollection = ["Home", "New", "Popular", "Trending", "Categories"];

    function createDropdownMenu() {
        const container = document.createElement('div');
        container.classList.add('dropdown');

        // create container elements...
        const closeMenu = document.createElement('img');
        closeMenu.src = 'assets/images/icon-menu-close.svg';
        closeMenu.alt = 'close menu icon';
        closeMenu.classList.add('dropdown-close');

        // Closing the container
        closeMenu.addEventListener('click', () => {
            console.log('close menu clicked');
            container.style.display = 'none';
            cover.classList.add('display');
        })

        container.appendChild(closeMenu);

        const linkGroup = document.createElement('ul');
        linkGroup.classList.add('link-group');
        linkCollection.forEach(item => {
            const linkElement = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = item;
            linkElement.appendChild(link);
            linkGroup.appendChild(linkElement);
        });
        container.appendChild(linkGroup);


        return container;
    }
})
