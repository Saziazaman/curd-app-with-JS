let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");


form.addEventListener("submit",(e) => {
    e.preventDefault();
    formValidation();

});

let formValidation = (e) => {

    if(input.value === "" ){
        msg.innerHTML = "Post fild cannot be blank";
        msg.style.color = "red";
    }
    else{
        msg.innerHTML = "Data added on post";
        acceptData();
        msg.style.color = "green";
    }

    msg.style.display="block";

    setTimeout( () => {
        msg.style.display="none";
    }, 2000 );
    
}


let data ={};

let acceptData = () => {
    data["text"] = input.value; 
    createPost();
};

let createPost = () => {
    posts.innerHTML += `
    <div>
        <p> ${data.text} </p>
        <span>
            <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
            <i onClick="deletePost(this)"class="fa-solid fa-trash-can"></i>
        </span>
    </div>
    `;
    input.value = "";
   
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
  };
  
  