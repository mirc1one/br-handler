window.addEventListener('DOMContentLoaded', function() {
    const brArrays = []
    const elements = document.querySelectorAll('[data-br-handler]')

    function checkLines() {
        const windowSize = window.innerWidth

        for (let i = 0; i < elements.length; i++) { 
            const item = brArrays[i]

            for (let breakpoint in item.responsive) {
                if (windowSize <= parseInt(breakpoint)) {
                    item.element.innerHTML = breakpoints[ breakpoint ]

                    break
                } else {
                    item.element.innerHTML = item.original
                }
            }
        }
    }

    for (let i = 0; i < elements.length; i++) {
        const item = elements[i]
        const data = JSON.parse(item.getAttribute('data-br-handler'))
    
        brArrays.push({
            element: item,
            original: item.innerHTML,
            responsive: data
        })
    }

    checkLines()

    window.addEventListener('resize', checkLines)
})