let x = 0 ;
document.forms[0].onsubmit = function() {
    
    let name = document.getElementById(`first`).value ;
    name += " "+  document.getElementById(`last`).value ;
    let email = document.getElementById(`email`).value ;
    let pass = document.getElementById(`pass`).value ;
    let Cpass = document.getElementById(`Cpass`).value ;
    let gender = document.querySelector(`#male`).checked ;
    if(gender == true){
        gender = "Male" ;
    }else gender = "female" ;

    if(pass != Cpass){
        document.querySelector(`.confirm`).style=`
        display: inline-block;
        ` ;
        return false ;
    }
    document.querySelector(`.confirm`).style=`
        display: none;
        ` ;
    let table = document.querySelector(`.table`) ;
    let n = document.createElement(`div`) ;
    n.textContent = name ;
    let e = document.createElement(`div`) ;
    e.textContent = email ;
    let p = document.createElement(`div`) ;
    p.textContent = pass;
    let g = document.createElement(`div`); 
    g.textContent = gender ;
    
    n.className = "n" ;
    e.className = "e" ;
    p.className = "p" ;
    g.className = "g" ;
    if(x%2 == 1){
        n.classList.add("darker") ;
        e.classList.add("darker") ;
        p.classList.add("darker") ;
        g.classList.add("darker") ;
    }
    table.appendChild(n) ;
    table.appendChild(e) ;
    table.appendChild(p) ;
    table.appendChild(g) ;
    
    x++ ;
    return false ;
}

