

document.getElementById('form-el').addEventListener("submit", getColor)


function getColor(e){ 

    e.preventDefault()
    const colorInput = document.getElementById("color").value
    const scheme = document.getElementById('color-scheme').value
    const colorContainer = document.getElementById("color-container")
    
    let hex = colorInput.slice(1)

    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${scheme}&count=5`)
        .then(res => res.json())
        .then(data =>  {
            const returnedData = data.colors
            returnedData.map((color)=>{
                const value = color.hex.value
                colorContainer.innerHTML += `
                    <div class ="container">
                        <div class="displayed-colour" style="background: ${value}"></div>
                        <p class="hex">${value}</p>
                    </div>
                   
                `
            })
           
        })
}
