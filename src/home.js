export default setupHome;
function setupHome(){
    const home=document.createElement("div");
    home.setAttribute("id","home");
    const welcome=document.createElement("h2");
    welcome.setAttribute("id","headline");
    welcome.textContent="Welcome To Breadington";
    const imgPlaceholder=document.createElement("div");
    home.setAttribute("data-status","active");
    imgPlaceholder.setAttribute("id","img");
    imgPlaceholder.classList.add("img");
    const desc=document.createElement("p");
    desc.textContent="This is breadington,the best sandwich restaurant in town where we will serve you the most outstanding and mouth watering sandwiches";
    desc.setAttribute("id","desc");
    home.appendChild(welcome);
    home.appendChild(imgPlaceholder);
    home.appendChild(desc);
    home.classList.add("main");
    return home;
}