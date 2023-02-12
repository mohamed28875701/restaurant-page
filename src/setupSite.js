export default setup;
import "./styles/site.css";
import setupHome from "./home";
import setupMenu from "./menu";
import setupContact from "./contact";
function Navbtns(){
    let wrapper=document.createElement("div");
    let home=document.createElement("button");
    let menu=document.createElement("button");
    let contact=document.createElement("button");
    home.setAttribute("id","homebtn");
    menu.setAttribute("id","menubtn");
    contact.setAttribute("id","contactbtn");
    home.textContent="home";
    menu.textContent="menu";
    contact.textContent="contacts";
    menu.addEventListener("click",(e)=>{
        if(e.target.getAttribute("data-status")==="active")
        return ;
        const current=document.querySelector('[data-status="active"]');
        current.setAttribute("data-status","inactive");
        current.remove();
        let now;
        if(e.target.textContent==="home"){
            now=setupHome();
        }
        else if(e.target.textContent==="menu"){
            now=setupMenu();
        }
        else{
            now =setupContact();
        }
        now.setAttribute("data-status","active");
        const content=document.getElementById("content");
        content.appendChild(now);
    })
    home.addEventListener("click",(e)=>{
        if(e.target.getAttribute("data-status")==="active")
        return ;
        const current=document.querySelector('[data-status="active"]');
        current.setAttribute("data-status","inactive");
        current.remove();
        let now;
        if(e.target.textContent==="home"){
            now=setupHome();
        }
        else if(e.target.textContent==="menu"){
            now=setupMenu();
        }
        else{
            now =setupContact();
        }
        now.setAttribute("data-status","active");
        const content=document.getElementById("content");
        content.appendChild(now);
    })
    contact.addEventListener("click",(e)=>{
        if(e.target.getAttribute("data-status")==="active")
        return ;
        const current=document.querySelector('[data-status="active"]');
        current.setAttribute("data-status","inactive");
        current.remove();
        let now;
        if(e.target.textContent==="home"){
            now=setupHome();
        }
        else if(e.target.textContent==="menu"){
            now=setupMenu();
        }
        else{
            now =setupContact();
        }
        now.setAttribute("data-status","active");
        const content=document.getElementById("content");
        content.appendChild(now);
    })
    home.classList.add("btns");
    menu.classList.add("btns");
    contact.classList.add("btns");
    wrapper.classList.add("wrapper");
    wrapper.appendChild(home);
    wrapper.appendChild(menu);
    wrapper.appendChild(contact);
    
    return wrapper;
}

function setupHeader(){
    let header=document.createElement("div");
    let title=document.createElement("h2");
    let wrapper=Navbtns();
    title.classList.add("title");
    header.classList.add("header");
    title.textContent="Breadington";
    header.appendChild(title);
    header.appendChild(wrapper);
    return header;
}
function setupFooter(){
    const footer=document.createElement("div");
    footer.textContent="Made by mohamed28875701 on github";
    footer.classList.add("footer");
    return footer;
}
function setup(){
    const content=document.getElementById("content");
    const body=document.getElementById("body");
    body.classList.add("body");
    content.classList.add("content");
    let header=setupHeader();
    let footer=setupFooter();
    content.appendChild(header);
    content.appendChild(setupHome());
    content.appendChild(footer);
    
}