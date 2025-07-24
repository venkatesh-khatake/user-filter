const users = [
  {
    name: "Amisha Rathore",
    pic: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    bio: "Silent chaos in a loud world | not for everyone",
  },
  
  {
    name: "Isha Sharma",
    pic: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    bio: "Sunshine mixed with a little storm 🌻⛈️",
  },
 
  {
    name: "Mehak Chawla",
    pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    bio: "Books, beaches & being real 📚🌊",
  },
  {
    name: "Yuvraj Singh",
    pic: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    bio: "Just a vibe you can’t find twice ✨",
  },
  {
    name: "Saanvi Jain",
    pic: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    bio: "Too glam to give a damn 💅",
  },
  
  {
    name: "Prisha Verma",
    pic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    bio: "Messy bun & getting stuff done 💻",
  },
  {
    name: "Kabir Sethi",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    bio: "Introvert with loud thoughts 🧠",
  },
  {
    name: "Ananya Deshmukh",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Living between quotes and coffee stains ☕📖",
  }
];



function showUsers(arr){
    arr.forEach(function(user){
        // Create the card container
const card = document.createElement("div");
card.classList.add("card");

// Create and configure the background image
const img = document.createElement("img");
img.src = user.pic;
img.classList.add("bg-img");
img.alt = "";

// Create the blurred layer
const blurredLayer = document.createElement("div");
blurredLayer.style.backgroundImage = `url(${user.pic})`;
blurredLayer.classList.add("blurred-layer");

// Create the content container
const content = document.createElement("div");
content.classList.add("content");

// Create the heading
const heading = document.createElement("h3");
heading.textContent = user.name;

// Create the paragraph
const para = document.createElement("p");
para.textContent =user.bio;

// Append elements in the correct order
content.appendChild(heading);
content.appendChild(para);

card.appendChild(img);
card.appendChild(blurredLayer);
card.appendChild(content);

// Finally, append the card to the body or any container
document.querySelector(".cards").appendChild(card);

    })
}

showUsers(users);


let inp = document.querySelector('.inp');
inp.addEventListener('input', function(){
    let newUsers = users.filter((user) =>{
        return user.name.startsWith(inp.value);
    })
    document.querySelector('.cards').innerHTML = "";
    showUsers(newUsers)
})

