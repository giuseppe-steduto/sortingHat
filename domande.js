var bio = 0; //Scelte per biotecnologie
              //Associato 0
var inf = 0; //Scelte per informatica
              //Associato 1
var ele = 0; //Scelte per elettrotecnica
              //Associato 2
var ite = 0; //Scelte per la ragioneria
              //Associato 3
var nDomanda = 1;
var txt;
var compilato;

var rispostaPrecendente = []; //Contiene i valori delle risposte DATE ad ogni domanda ( + 1 )

  function calcola(nome)
  {
    compilato = true;
    var sceltaArray = document.getElementsByName(nome);
    for(var i = 0; i < 4; i++)
    {
      if (sceltaArray[i].checked)
        var scelta = sceltaArray[i].value;
    }
    if(scelta == undefined)
    {
      window.alert("Beh, però se tu magari inserissi una risposta sarebbe meglio eh.");
      compilato = false;
    }

    switch(scelta)
    {
      case "bio":
        bio++;
        rispostaPrecendente[nDomanda] = 0;
        break;
      case "inf":
        inf++;
        rispostaPrecendente[nDomanda] = 1;
        break;
      case "ele":
        ele++;
        rispostaPrecendente[nDomanda] = 2;
        break;
      case "ite":
        ite++;
        rispostaPrecendente[nDomanda] = 3;
        break;
    }
  }

  function avanti()
  {
    if(!compilato)
      return 0;
    txt = "dom" + nDomanda;
    document.getElementById(txt).className = "domanda visibile nascosto1";
    nDomanda++;
    txt = "dom" + nDomanda;
    document.getElementById(txt).className = "domanda visibile";
  }

  function indietro()
  {
    txt2 = "dom" + nDomanda;
    document.getElementById(txt2).className = "domanda nascosto";
    nDomanda--;
    txt2 = "dom" + nDomanda;
    document.getElementById(txt2).className = "domanda visibile";
    switch(rispostaPrecendente[nDomanda])
    {
        case 0:
          bio--;
          break;
        case 1:
          inf--;
          break;
        case 2:
          ele--;
          break;
        case 3:
          ite--;
          break;
    }
  }

  function reindirizza()
  {
    if( bio > inf && bio > ele && bio > ite )
      window.location = "./casate/biondoro.html";
    else if ( inf > bio && inf > ele && inf > ite )
      window.location = "./casate/infonero.html";
    else if( ele > bio && ele > inf && ele > ite )
      window.location = "./casate/elettroverde.html";
    else if( ite > bio && ite > inf && ite > ele )
      window.location = "./casate/ragionerosso.html";
    else
    {
      txt = "dom" + nDomanda;
      document.getElementById(txt).className = "domanda nascosto";
      nDomanda++;
      txt = "dom" + nDomanda;
      document.getElementById(txt).className = "domanda visibile";
    }
  }

  function reindirizzaBonus()
  {
    var sceltaArray = document.getElementsByName("bonus");
    for(var i = 0; i < 4; i++)
    {
      if (sceltaArray[i].checked)
        var scelta = sceltaArray[i].value;
    }

    switch(scelta)
    {
      case "bio":
        window.location = "./casate/biondoro.html";
        break;
      case "inf":
        window.location = "./casate/infonero.html";
        break;
      case "ele":
        window.location = "./casate/elettroverde.html";
        break;
      case "ite":
        window.location = "./casate/ragionerosso.html";
        break;
    }
  }

  function drawBorder(colore)
  {
    this.style.borderBottom = "2 px solid " + colore;
  }
