window.addEventListener("load", init);

function ID(elem)
{
    return document.getElementById(elem);
}

function $(elem)
{
    return document.querySelector(elem);
}

function $All(elem)
{
    return document.querySelectorAll(elem);
}

function CLASS(elem)
{
    return document.getElementsByClassName(elem);
}

var kartyaSzam=10;

const kepTomb
=[
    "kepek/kep1.jpg",
    "kepek/kep1.jpg",
    "kepek/kep2.jpg",
    "kepek/kep2.jpg",
    "kepek/kep3.jpg",
    "kepek/kep3.jpg",
    "kepek/kep4.jpg",
    "kepek/kep4.jpg",
    "kepek/kep5.jpg",
    "kepek/kep5.jpg"
];
const hatter="kepek/hatter.jpg";
function init()
{
    $("header").innerHTML="<h1>Memóriajáték</h1>";    
    $("footer").innerHTML="Készítette: Weinberger Péter";    
    $("article").innerHTML='<div id="kartyak"></div>';
    // for (let i = 0; i < kepTomb.length; i++) 
    // {
    //     $("#kartyak").innerHTML+=`<div class="kartya"> <img id="${i}" src="kepek/hatter.jpg" alt="hattér"></div>`;
    // }
    const galeria=document.querySelector("#kartyak");
    let txt="";
    kepTomb.forEach(function (elem, index)
    {
        txt+=`<div class="kartya"> <img id="${index}" src="${hatter}" alt="hattér"></div>`;
    });
    galeria.innerHTML=txt;

    const kepElemTomb=document.querySelectorAll("article div img");
    kepElemTomb.forEach(function(elem)
    {
        elem.addEventListener("click", megfordul);
    });
    
}

const kivalasztottTomb=[];

function megfordul(event)
{
    console.log(event.target.id);
    let aktualisElem=event.target.id;
    event.target.src=kepTomb[aktualisElem];
    kivalasztottTomb.push(aktualisElem);
    console.log(kivalasztottTomb);

    if(kivalasztottTomb.length===2)
    {
        let feltetel=kepTomb[kivalasztottTomb[0]]===kepTomb[kivalasztottTomb[1]];
        console.log(feltetel);
        if (!feltetel) 
        {
            setTimeout(function()
            {
                kivalasztottTomb.forEach(function(elem)
                {
                    document.getElementById(elem).src=hatter;
                });
                kivalasztottTomb.splice[0];
            },1000);
        }
        else
        {
            kivalasztottTomb.forEach(function(elem)
            {
                document.getElementById(elem).style.display="none";
            });
        }
    }
}


