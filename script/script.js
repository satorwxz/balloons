const row=document.querySelector('.row');
const maincheckbox=document.querySelector('#maincheckbox');

let balloonsArr=[
    {
        id: 1,
        src:'../assets/balloons.png',
    },
    {
        id: 2,
        src:'../assets/balloons.png',
    },
    {
        id: 3,
        src:'../assets/balloons.png',
    },
    {
        id: 4,
        src:'../assets/balloons.png',
    },
    {
        id: 5,
        src:'../assets/balloons.png',
    },
    {
        id: 6,
        src:'../assets/balloons.png',
    },
    {
        id: 7,
        src:'../assets/balloons.png',
    },
    {
        id: 8,
        src:'../assets/balloons.png',
    },
    {
        id: 9,
        src:'../assets/balloons.png',
    },

]

const handleCheck = (box) => {
    box.classList.toggle('bg-red');
    box.children[1].checked = !box.children[1].checked


}

const handleShowAll  =() => {
    const boxes = document.querySelectorAll('.box');
    const all=maincheckbox.checked
    boxes.forEach( box => {
        const checkbox=box.children[1]
        checkbox.checked=all

        box.classList.toggle('bg-red');

    })

}
maincheckbox.addEventListener('change', handleShowAll);


//
const handleShow = () => {
    row.innerHTML=balloonsArr.map(balloon=>{
    return`
    <div class="col-4">
    <div class="box" id="${balloon.id}">
    <img src="${balloon.src}" alt="balloon" class="img">
    <input type="checkbox" class="checkbox">
    
</div>
</div>
`
    }).join('')
    const checkbox=document.querySelectorAll('.box');
    checkbox.forEach((check,index) => {
        check.addEventListener('click',(e) =>{
            const box = e.target.closest('.box');
            handleCheck(box);
        } )

        })


}
handleShow()