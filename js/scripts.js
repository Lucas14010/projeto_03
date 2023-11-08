let lamp = document.getElementById( 'lamp' );
let turnON = document.getElementById( 'turnON' );
let turnOF = document.getElementById( 'turnOFF' );

function islampquebrada () {
    return lamp.src.indexOf ('quebrada') > -1
}

function ligar() {
    if( !islampquebrada () ) {
        lamp.src = './img/lampada_ligada.jpg';
    }
    
}

function desligar() {
    if( !islampquebrada () ) {
        lamp.src = './img/lampada_desligada.jpeg';
    }  
}

function lampquebrada () {
    lamp.src = './img/lampada_quebrada.jpg';
}


turnON.addEventListener( 'click', ligar );
turnOFF.addEventListener( 'click', desligar );
lamp.addEventListener( 'mouseover' , ligar );
lamp.addEventListener( 'mouseleave', desligar );
lamp.addEventListener( 'dblclick', lampquebrada );

