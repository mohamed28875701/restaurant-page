export default setupContact;
function setupContact(){
    const wrapper=document.createElement("div");
    wrapper.setAttribute("id","contact");
    wrapper.setAttribute("data-status","inactive");
    let p = document.createElement("p");
    p.textContent="233445667";
    let e=document.createElement("p");
    e.textContent="find us in mount olympus in planet mars";
    wrapper.appendChild(p);
    wrapper.appendChild(e);
    return wrapper;
}