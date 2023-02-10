export default setup;
import "./styles/site.css"
function Navbtns(){
    let wrapper=document.createElement("div");
    let home=document.createElement("button");
    let menu=document.createElement("button");
    let contact=document.createElement("button");
    home.setAttribute("id","homebtn");
    menu.setAttribute("id","menubtn");
    contact.setAttribute("id","contactbtn");
    home.classList.add("btns");
    menu.classList.add("btns");
    contact.classList.add("btns");
    wrapper.classList.add("wrapper");
    wrapper.appendChild(home);
    wrapper.appendChild(menu);
    wrapper.appendChild(contact);
    home.textContent="home";
    menu.textContent="menu";
    contact.textContent="contacts";
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
function setup(){
    const content=document.getElementById("content");
    const body=document.getElementById("body");
    body.classList.add("body");
    content.classList.add("content");
    
    let div=setupHeader();
    content.appendChild(div);
}