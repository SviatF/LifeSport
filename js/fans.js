let Add = document.getElementById('main-btn');


Add.addEventListener('click',MainFunction);



function MainFunction(){
    
let txt = document.querySelector('#place-txt');
let divApeal = document.querySelector('.apeal-fans');
let divNewApeal = document.createElement('div');
let pDivNewApeal = document.createElement('p');
let dDivNewApeal = document.createElement('div');
let spn1 = document.createElement('span');
let spn2 = document.createElement('span');
let hr = document.createElement('hr');

let fulldate = new Date();


if(txt.value==''){
    alert('Enter Some Text in Textarea');
}
    else{
        divNewApeal.className="bd2 cnt";
dDivNewApeal.className="bd1-spn";
hr.className="ft-hr";
pDivNewApeal.textContent=txt.value;
divApeal.append(divNewApeal);
divNewApeal.prepend(pDivNewApeal);
divNewApeal.append(dDivNewApeal);
dDivNewApeal.innerHTML = "<span>"+ fulldate.getDate()+'.'+fulldate.getMonth()+'.'+ fulldate.getFullYear() +' '+ fulldate.getHours()+':'+fulldate.getMinutes()+"</span>"+"<span>VolleyballFan2022</span>"
divNewApeal.after(hr);
    
    txt.value='';
    }

}