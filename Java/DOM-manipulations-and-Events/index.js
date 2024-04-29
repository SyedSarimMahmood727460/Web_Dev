const container = document.querySelector("#container");

function Add()
{
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = "This is the glorious text-content!";
    container.appendChild(content);


}


function remove()
{
    const content = document.querySelector("#container").lastElementChild
    container.removeChild(content);
}



