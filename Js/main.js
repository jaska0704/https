//A - Application
//P - Pragramming
//I - Interface

// H - Hyper
// T - Text
// T - Transfer
// P - Protokol
// S - Secured 

// C - create - post
// R - read - get
// U - update - 
// D - delete 

let userList = document.querySelector("#users");
let params = new URLSearchParams(window.location.search);
let id = params.get("id");


if (id) {
    fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${id}`).then((res) => res.json()).then((user) => {
        user.reverse()
        user.forEach(element => {
          let div = document.createElement("div");
          div.style.backgroundColor = "turquoise"; 
          div.style.borderRadius ="20px";
          div.style.width ="500px"; 
          div.style.padding ="10px";
          div.style.textAlign = "center"; 
          document.body.style.display = "flex";
          document.body.style.flexWrap = "wrap"
          document.body.style.justifyContent = "center";
          document.body.style.gap = "3rem";
          
          let h1 = document.createElement("h1");
          h1.style.padding = "15px";
          let h2 = document.createElement("h2");
          let img = document.createElement("img");
          img.style.width = "400px";
          h1.innerText = element.title;
          h2.innerText = element.id;
          img.setAttribute("src", element.url);
          div.prepend(h1, h2, img);
          document.body.prepend(div);
        });
        let a = document.createElement("a");
        a.innerText = "Go Back";
        a.setAttribute("href", `/`);
        document.body.prepend(a);
    });
}else {+
    fetch("https://jsonplaceholder.typicode.com/albums/").then((res) => res.json()).then((users) =>{
        users.forEach(user => {
            let li = document.createElement("li");
             let ranColor = Math.random().toString(16).slice(2, 8);
             li.style.backgroundColor = "#" + ranColor;
             li.style.borderRadius = "20px";
             li.style.padding = "15px";
             li.style.width = "400px";
             li.style.marginTop = "10px"
            let h2 = document.createElement("h2");
            let h4 = document.createElement("h4");
            let p = document.createElement("p");
            let a = document.createElement("a");
            h2.innerText = user.title;
            h4.innerText = user.id; 
            a.innerText = "Read more";
            a.setAttribute("href", `/?id=${user.id}`);
            li.append(h2, h4, a);
            userList.append(li);
        });
    });
}
