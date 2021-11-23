const navArr = document.querySelectorAll('.nav-item')
const cardArr = document.querySelectorAll('.card-body')


navArr.forEach(function(e){
    e.addEventListener('click', ()=>{
        let timeframe = e.textContent
        for( nav of navArr){
            nav.classList.remove('active')
        }
        e.classList.add('active')
        getData(timeframe)
    })
})


async function getData(timeframe){
    console.log(timeframe)

    let response = await fetch("script/data.json")
    let data = await response.json()
    for (item of data){
        let hrsData =  item.timeframes[timeframe]

        console.log(item.timeframes)
        
        let cardTitle = item.title

        console.log(cardTitle)
        for (card of cardArr){
            let h3_CurrentData = card.children[2].children[0]
            let p_PreviousData = card.children[3].children[0]
            if (cardTitle === card.children[0].textContent){
                h3_CurrentData.textContent = hrsData.current
                p_PreviousData.textContent = hrsData.previous
            }
        }
    }
}

