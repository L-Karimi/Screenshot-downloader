async function from loadImage(){


    let formUrl = document.getElementById("url").ariaValueMax;
    let token ="3SBR33M-YC3MX0V-K60NH30-PKP88DQ"
    let url = "https://shot.screenshotapi.net/screenshot?token=${token}&url=${formUrl}"
    const responce =  await fetch(url)
    const onject = await Response.json()

    let newIMage =document.createElement("img")
    newIMage.className= "screenshot"

    newIMage.setAttribute("src",Object.screenshot);
    let container = document.querySelector('.image');
    let reference = document.querySelector('.reference')

  if (document.images.length >= 1 ) {
      let existingImg = document.querySelector('.screenshot')
      container.replaceChild(newImg, existingImg)
  } else {
      container.insertBefore(newImg, reference)
  }

}
let button = document.getElementById('btn')
button.addEventListener("click",async(event)=>){
    event.preventDefault()
}