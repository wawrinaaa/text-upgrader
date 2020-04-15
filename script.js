let iflsd=0;
let x="";
let n=0;
let rn1=0;
let rn2=0;
let rn3=0;
let be=0;
let letter="";

function lsd()
{
    document.getElementById("body").style.background='url("lsd.jpg")';
    document.getElementById("type").style.background="black";
    iflsd++;
    switch(iflsd)
    {
        case 1: {document.getElementById("type").style.color="blue"; break;}
        case 2: {document.getElementById("type").style.color="red"; break;}
        case 3: {document.getElementById("type").style.color="purple"; break;}
        case 4: {document.getElementById("type").style.color="green"; break;}
        case 5: {document.getElementById("type").style.color="pink"; break;}
        case 6: {document.getElementById("type").style.color="yellow"; break;}
        case 7: {document.getElementById("type").style.color="grey"; break;}
        case 8: {document.getElementById("type").style.color="magenta"; break;}
        case 9: {document.getElementById("type").style.color="white"; break;}
        case 10: {document.getElementById("type").style.color="orange"; iflsd=0; break;}
    }
    setTimeout("lsd()",150);
}

function main ()
{
    x=document.getElementById("maininp").value;
    n=x.length;

    for(let i=0; i<n; i++)
    {
        rn1=Math.random();
        rn2=Math.random() * rn1;
        rn3=Math.random() * rn2 / rn1;
        be=Math.floor(((Math.random()**rn3) / rn1)*(15**Math.random()));
        console.log(be%2);

        letter=x.slice(i,i+1);

        if((be%2)==1) {document.getElementById("type").innerHTML+=letter.toUpperCase();}
        else {document.getElementById("type").innerHTML+=letter.toLowerCase();}
    } 
    document.getElementById("type").innerHTML+="<br>";
}