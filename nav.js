var navItems = document.querySelectorAll('.nav-items')

navItems.forEach((navItem)=>{
    navItem.addEventListener('click',()=>{

        navItems.forEach((item)=>{
            item.classList.remove('active');
        })

        navItem.classList.add('active');
    })
})