// Window.alert.backgroundColor="yellogreen";
function calculate(){
    let nombre1=parseFloat(document.getElementById('Nombre1').value);
    let nombre2=parseFloat(document.getElementById('Nombre2').value);
    let resultat=document.getElementById('resultat');
    let opera=document.getElementById('opesra').value;
    //Maintenant la partie algo 
    if(!isNaN(nombre1)&& !isNaN(nombre2)){
        switch(opera){
            case '+':
                resultat.innerText=`${nombre1+nombre2}`;
                break;
            case '-':
                resultat.innerText=`${nombre1-nombre2}`;
                break;
            case '*':
                resultat.innerText=`${nombre1*nombre2}`;
                break;
            case '/':
                if(nombre2!=0){
                    resultat.innerText=`${nombre1/nombre2}`;
                }
                else{
                    resultat.innerText="ERREUR";
                    document.getElementById('resultat').style.color="red";
                    break;
                }
                break;
            default:
                break;
        }
    }
    else
        resultat.innerText("ERREUR");
    // resultat.innerText=resultat;

}
function factoriielle(){
    let factoriie=1;
    let nombre=parseInt(document.getElementById('fac').value);
    if(!isNaN(nombre) && nombre>=0)
    {
        for(let i=1;i<=nombre;i++){
            factoriie*=i;
        }
        document.getElementById('factorielle').innerHTML=`${nombre}!= ${factoriie} <br /> le factorielle de ${nombre} est de ${factoriie}`;
    }
    else
        document.getElementById('factorielle').textContent=`Votre entrer est invalide  veuillez effectuer une saisie valide`;

}
function nombrePre() {
    let nombre= parseInt(document.getElementById('pre').value);
    let annonce= document.getElementById('nombrePre');
    let verificateur=1;
    if(!isNaN(nombre) && nombre>0){
        for(let i=2;i<=nombre/2;i++){
            if(nombre%i==0){
                verificateur=0;
                break;
            }
        }
        (verificateur==0)?annonce.innerText=`${nombre} n'est pas un nombre premier`:annonce.innerText=`${nombre} est un nombre premier`;
            
    }
    else
        annonce.innerText="Votre entrer n'est pas valide";
}
function jeu() {
    let max=6;
    let min=0;
    let nombre=0;
    let nombreMatch=0;
    let score =0;
    let victoires=0;
    let echec=0;
    for(let i=0;i<10;i++){
        let nombreAleatoir=Math.floor((Math.random()*(max-min+1)+min));
        nombre=parseInt(prompt(`Veuillez entrer un nombre compris entre 1 et 6 vous avez encore ${10-nombreMatch}`));
        if(!isNaN(nombre) && (nombre >=1 && nombre<=6))
        {
          
            if(nombre==nombreAleatoir){
                victoires++;
                nombreMatch++;
            }
            else{
                echec++;
                nombreMatch++;
            }
            score=(victoires*100)/nombreMatch;
        if(score >=40){
            document.getElementById('prev').textContent="Vous avez gagner";
        }
        else{
            document.getElementById('prev').textContent="Vous avez perdu";

        }
        document.getElementById('jeu').textContent=`Votre score est des ${score}% et vous avez effectuer ${nombreMatch} tentatives`;
        }
        else{
            alert("Veuillez verifier votre entrer et reessayer!");
        }
        

    }
        


}