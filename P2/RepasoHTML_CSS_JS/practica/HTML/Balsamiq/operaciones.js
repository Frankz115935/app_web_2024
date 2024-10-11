function operation()
{
    let n1,n2,n3,tipoope,ope,resultado;
    n1=parseInt(document.getElementById("n1").value);
    n2=parseInt(document.getElementById("n2").value);
    tipoope=(document.getElementById("tipo").value);
    ope;
    
    if (isNumber(n1) && isNumber(n2))
    {
        switch (tipoope)
        {
            case "+": ope = n1+n2; break;
            case "-": ope = n1 - n2; break;
            case "*": ope = n1 * n2; break;
            case "/": ope =  n1 / n2; break;
        

        
    
        }
        resultado = document.getElementById("resultado");
        resultado.innerHTML=`<h2> ${n1} ${tipoope} ${n2} = ${ope} </h2>`;
    } 
    else {
        alert("Ingrese solo numeros por favor")
    }
    

}

function isNumber(n)
{
    return !isNaN(parseInt(n) && isFinite(n))
}