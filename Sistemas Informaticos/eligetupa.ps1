function Final1 {
    cls
    [System.Console]::ForegroundColor = 'Gray'
    Write-Host ======================================
    Write-Host          FINAL: DESTINO SELLADO
    Write-Host ======================================
    Write-Host Fuiste derrotado antes de conocer la verdad.  
    Write-Host El Cristal del Alba permanece perdido, y Eldoria se sume en la oscuridad.
    pause
    exit
}

function Final2 {
    cls
    [System.Console]::ForegroundColor = 'Red'
    Write-Host ======================================
    Write-Host      FINAL: EL FIN DEL REINO
    Write-Host ======================================
    Write-Host El hechizo destruyo la torre y contigo dentro.  
    Write-Host Sin el Cristal del Alba, Eldoria colapsa en el caos.
    pause
    exit
}

function Regresar {
    cls
    [System.Console]::ForegroundColor = 'Yellow'
    Write-Host ======================================
    Write-Host       FINAL: EL HEROE DE ELDORIA
    Write-Host ======================================
    Write-Host Regresas con el Cristal del Alba y restauras el equilibrio.  
    Write-Host El reino celebra tu valentia y tu nombre sera recordado para siempre.
    pause
    exit
}

function UsarCristal {
    cls
    [System.Console]::ForegroundColor = 'Magenta'
    Write-Host ======================================
    Write-Host     FINAL: EL NUEVO SENOR OSCURO
    Write-Host ======================================
    Write-Host Decides usar el Cristal para aumentar tu poder.  
    Write-Host Te conviertes en un ser temido, gobernando con puno de hierro.
    pause
    exit
}


function FuerzaBruta {
    cls
    [System.Console]::ForegroundColor = 'Red'
    Write-Host Intentas romper la trampa con tu espada, pero activa un hechizo de autodestruccion.
    Write-Host Todo se vuelve blanco.
    Write-Host "Introduce Enter para continuar:`n"
    
    $tecla = [System.Console]::ReadKey().Key
    
    if($tecla -eq 'Enter') {
        Final2
    }
}

function Mecanismo {
    cls
    [System.Console]::ForegroundColor = 'White'
    Write-Host Encuentras un patron en el suelo y lo activas con cuidado.  
    Write-Host La trampa se desactiva y puedes tomar el Cristal.
    'echon'
    Write-Host Que haras ahora
    Write-Host 1. Regresar a Eldoria
    Write-Host 2. Usar el poder del Cristal para ti mismo
    Write-Host "Elige Regresar o UsarCristal:`n" 

}

function BuscarPista {
    cls
    [System.Console]::ForegroundColor = 'Green'
    Write-Host Ignoras la Torre y sigues el consejo de la criatura.  
    Write-Host Descubres que el verdadero Cristal estaba oculto en el Templo del Alba.
    Write-Host "Introduce Enter para continuar:`n"
    
    $tecla = [System.Console]::ReadKey().Key
    
    if($tecla -eq 'Enter') {
        Regresar
    }
}

function Torre {
    cls
    [System.Console]::ForegroundColor = 'White'
    Write-Host La Torre del Eco es un lugar oscuro y en ruinas.  
    Write-Host "Encuentras el Cristal del Alba, pero hay una trampa magica.`n"
    Write-Host Como intentas desactivarla
    Write-Host 1. Con fuerza bruta
    Write-Host 2. Buscando un mecanismo oculto
    Write-Host "Elige FuerzaBruta o Mecanismo:`n"

}

function HablarCriatura {
    cls
    [System.Console]::ForegroundColor = 'Cyan'
    Write-Host La criatura se presenta como un guardian del Cristal.  
    Write-Host Te advierte que la Torre del Eco es una trampa mortal.
    'echon'
    Write-Host Le crees
    Write-Host 1. Si, decides buscar otra pista
    Write-Host 2. No, continuas a la torre
    Write-Host "Elige BuscarPista o Torre:`n"

}

function Esconderse {
    cls
    [System.Console]::ForegroundColor = 'Gray'
    Write-Host Observas en silencio y ves a la criatura abrir un portal.  
    Write-Host Sin dudar, te cuelas en el y apareces dentro de la Torre del Eco.
    Write-Host "Introduce Enter para continuar:`n"
    
    $tecla = [System.Console]::ReadKey().Key
    
    if($tecla -eq 'Enter') {
        Torre
    }
}


function EnfrentarEncapuchado {
    cls
    [System.Console]::ForegroundColor = 'Red'
    Write-Host Desenvainas tu espada y atacas, pero el encapuchado es rapido y te esquiva.  
    Write-Host Lanza un hechizo, inmovilizandote. Antes de perder el conocimiento, escuchas:  
    Write-Host Has cometido un error...
    Write-Host "Introduce Enter para continuar:`n"
    
    $tecla = [System.Console]::ReadKey().Key
    
    if($tecla -eq 'Enter') {
        Final1
    }

}

function HuirBiblioteca {
    cls
    [System.Console]::ForegroundColor = 'Green'
    Write-Host Escapas de la biblioteca y encuentras un mapa con la ubicacion exacta de la Torre del Eco.  
    Write-Host Decides partir de inmediato.
    Write-Host "Introduce Enter para continuar:`n"
    
    $tecla = [System.Console]::ReadKey().Key
    
    if($tecla -eq 'Enter') {
        Torre
    }

}

function Biblioteca {
    
    cls
    [System.Console]::ForegroundColor = 'DarkYellow'
    Write-Host En la biblioteca, encuentras un pergamino sobre el Cristal del Alba y la Torre del Eco.  
    Write-Host "Una figura encapuchada te observa y susurra: No deberias estar aqui...`n"
    Write-Host Que haras
    Write-Host 1. Enfrentarlo con tu espada
    Write-Host 2. Huir y buscar mas pistas
    Write-Host "Elige EnfrentarEncapuchado o HuirBiblioteca:`n"

}

function Bosque {
    
    cls
    [System.Console]::ForegroundColor = 'DarkGreen'
    Write-Host El bosque esta envuelto en niebla. Encuentras un circulo de piedras brillantes.  
    Write-Host "Una criatura sombria emerge de entre los arboles.`n"
    Write-Host Que haras
    Write-Host 1. Hablar con la criatura
    Write-Host 2. Esconderte y observar
    Write-Host "Elige HablarCriatura o Esconderse:`n" 

}

$echo

title El Destino de Eldoria
cls
[System.Console]::ForegroundColor = 'Yellow'
Write-Host ================================
Write-Host      EL DESTINO DE ELDORIA
Write-Host "================================`n"
Write-Host El reino de Eldoria ha vivido en paz durante siglos, protegido por el Cristal del Alba.  
Write-Host Sin embargo, una noche, el cristal desaparece, sumiendo al reino en el caos.  
Write-Host "Solo una persona puede recuperarlo: tu.`n"  
Write-Host Donde comienzas tu busqueda
Write-Host 1. La Biblioteca de los Sabios
Write-Host 2. El Bosque de las Sombras
Write-Host "Elige Biblioteca o Bosque:`n" 