const accordionHeaders = document.querySelectorAll('.accordion-header')

// console.log(accordionHeaders)
accordionHeaders.forEach(accordionHeader => {
    const accordionBody = accordionHeader.nextElementSibling;


    accordionHeader.addEventListener('click', () => {

        const currentlyActiveAccordionHeader = document.querySelector('.active-item')
        // console.log(currentlyActiveAccordionHeader)
        if (currentlyActiveAccordionHeader && currentlyActiveAccordionHeader != accordionHeader) {
            let activeBody = currentlyActiveAccordionHeader.nextElementSibling;
            currentlyActiveAccordionHeader.classList.toggle('active-item');
            currentlyActiveAccordionHeader.lastElementChild.classList.toggle('active');
            currentlyActiveAccordionHeader.firstElementChild.classList.toggle('secondary-header');
            activeBody.style.maxHeight = 0;

        }


        // console.log(accordionHeader.parentElement)
        accordionHeader.classList.toggle('active-item')
        console.log(accordionHeader.classList)
        accordionHeader.lastElementChild.classList.toggle('active')
        accordionHeader.firstElementChild.classList.toggle('secondary-header')
        if (accordionHeader.lastElementChild.classList.contains('active')) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
        }
        else {
            accordionBody.style.maxHeight = 0;
        }

    })
})