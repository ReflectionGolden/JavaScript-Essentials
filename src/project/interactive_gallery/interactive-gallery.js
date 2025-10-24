// element declaration
const imageInput       = document.querySelector("#imageInput");
const imageButton      = document.querySelector("#imageButton");
const galleryContainer = document.querySelector("#galleryContainer");

//variable declaration
let imageDivClass = ["m-auto","my-5","py-[0.5rem]","px-[3rem]","bg-containback","shadow-[5px_5px_15px_rgba(0,0,0,0.5)]","w-4/5","lg:w-5/7","rounded-[1rem]","text-center"];
let buttonClass = ["px-4","text-xl","border","rounded-md","bg-cyan-600","hover:bg-cyan-500","active:bg-cyan-700"];

//function declaration
function addImage() {
    let imageSource = imageInput.value;
    if (imageSource) {
        //container for the image and removal button
        let imgDiv = document.createElement("div");
        imageDivClass.forEach(element => {
            imgDiv.classList.add(element);
        });

        //new image
        let newImg = document.createElement("img");
        newImg.src = imageSource;

        //removal button
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove Image";
        buttonClass.forEach(element => {
            removeButton.classList.add(element);
        });
        removeButton.onclick = () => galleryContainer.removeChild(imgDiv);

        //compilation
        imgDiv.appendChild(newImg);
        imgDiv.appendChild(removeButton);
        galleryContainer.insertAdjacentElement("beforeend", imgDiv);
        imageInput.value = "";
    }
    else {
        alert("Please enter an image URL.");
    }
}

//event handling
imageButton.addEventListener("click", addImage);