export default setupMenu;
function setupMenu(){
    const wrapper=document.createElement("div");
    wrapper.setAttribute("id","menu");
    wrapper.setAttribute("data-status","inactive");
    wrapper.appendChild(setupCard("../src/images/Chicken-Sandwich.jpg","chicken sandwich"));
    wrapper.appendChild(setupCard("../src/images/Egg-Sandwich.jpg","egg sandwich"));
    wrapper.appendChild(setupCard("../src/images/Ham-Sandwich.jpg","ham sandwich"));
    wrapper.appendChild(setupCard("../src/images/Nutella-Sandwich.jpg","nutella sandwich"));
    wrapper.appendChild(setupCard("../src/images/Roast-Beef-Sandwich.jpg","roast beef sandwich"));
    wrapper.appendChild(setupCard("../src/images/Seafood-Sandwich.jpg","seafood sandwich"));
    return wrapper;
}
function setupCard(imgUrl,title){
    let item=document.createElement("div");
    item.setAttribute("id","item");
    let img=document.createElement("img");
    img.src=`${imgUrl}`;
    img.alt=`${title}`;
    item.appendChild(img);
    let t=document.createElement("div");
    t.style.textAlign="center";
    t.textContent=`${title}`;
    item.appendChild(t);
    return item;
}