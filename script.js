
const pad= document.querySelector(".pad");

let defaultGridSize = 16;

const container = document.querySelector(".container")

function createGrid(size){
    for(let row =0; row< size; row++){
        
        const node = document.createElement('div');
        node.setAttribute("style", "display:flex; width:100%; height:100%;align-items:center;");
        for(let column=0; column<size; column++){
            const child = document.createElement("div");
            child.setAttribute("id", `R_${row}C_${column}`);
            const X_color= Math.floor(Math.random() * (255));
            const Y_color= Math.floor(Math.random() * (255));
            const Z_color= Math.floor(Math.random() * (255));
            child.setAttribute("style",`background-color:rgba(${X_color}, ${Y_color},${Z_color}, 0);flex-grow:1; height:100%;border:1px solid black`);
            node.appendChild(child);
        }
        container.appendChild(node);     
    }
};

container.addEventListener("click",(e)=>{
    const target = e.target;
    const id = target.id;
    const style = window.getComputedStyle(target);
    const bgColor = style.backgroundColor;
    const [r, g, b, a] = bgColor.match(/[\d.]+/g).map(Number);
    const newOpacity = Math.min(a + 0.1, 1);

    target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${newOpacity})`;
})

createGrid(defaultGridSize)

pad.addEventListener("click",()=>{
    let size = parseFloat(prompt("Select grid size"));

    if(!Number.isInteger(size) || size>100 || size <=0){
        alert("Invalid Size. Max allowed 100");
    }else{
        container.innerHTML ="";
        createGrid(size);
    }
}) ;