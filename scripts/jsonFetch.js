
$.getJSON("./cah-cards-full.json", selectBuilder);

var json = $.getJSON("./cah-cards-full.json");
function selectBuilder(data){
    var container = document.getElementById("containerKurw");
   
    if(container){
        for(var i = 0; i<Object.keys(data).length; i++){
            let nameHolder = document.createElement("div");
            let nameNode = document.createTextNode(data[i].name);

            nameHolder.appendChild(nameNode);
            nameHolder.setAttribute("class", "decksName");
            nameHolder.setAttribute("value", i);
            container.appendChild(nameHolder);

        }
    }
        //Wyświetla karty w decku na decks.html
        $(document).on('click', 'div.decksName', function(json){
                localStorage.setItem('value', this.getAttribute('value'));
                value = localStorage.value;
                //location.href = "../decks.html"; 
                var cardsHolder = window.open('decks.html');
                cardsHolder.onload = function(){
                for(var j = 0; j<data[value].white.length; j++){
            
                    var whiteCard = document.createElement('div');
                    var whiteCardNode = document.createTextNode(data[value].white[j].text);
                    whiteCard.setAttribute('class', 'whiteCard');
                    whiteCard.appendChild(whiteCardNode);
                    cardsHolder.document.body.appendChild(whiteCard);
                }
                for(var k = 0; k<data[value].black.length; k++){
                    var blackCard = document.createElement('div');
                    var blackCardNode = document.createTextNode(data[value].black[k].text);
                    blackCard.setAttribute('class', 'blackCard');
                    blackCard.appendChild(blackCardNode);
                    cardsHolder.document.body.appendChild(blackCard);
                }
            }
                
        })
}


