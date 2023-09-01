const Theinput = document.querySelector('#inputField')
const TheaddButton = document.querySelector('#addButton')
const ThedisplayList = document.querySelector('#displayList')

TheaddButton.addEventListener('click', () => {
        const TheStuffWeEnter = Theinput.value 
        if (TheStuffWeEnter){
        const Liwemade = document.createElement('li')
        const weMakeSpan = document.createElement('span')
        weMakeSpan.textContent = TheStuffWeEnter
       Liwemade.appendChild(weMakeSpan)

        const editWeMade = document.createElement('button')
        editWeMade.textContent = 'Edit Please'
        Liwemade.appendChild(editWeMade)

        const DeleteWeCreated = document.createElement('button')
        DeleteWeCreated.textContent = 'Delete Pease!'
        Liwemade.appendChild(DeleteWeCreated)


        DeleteWeCreated.addEventListener('click', ()=>{
                ThedisplayList.removeChild(Liwemade)
        })
        editWeMade.addEventListener('click', ()=>{
                const TheNewText = prompt('Enter New Text:', weMakeSpan.textContent)
                if(TheNewText){
                        weMakeSpan.textContent = TheNewText
                }
        })


        ThedisplayList.appendChild(Liwemade)

        Theinput.value = ''

        } else [
                alert('Please enter some text')
        ]
})