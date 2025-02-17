function Final1 {
    
    [System.Console]::ForegroundColor = 'Gray'
    Write-Host "`n======================================"
    Write-Host          FINAL: DESTINO SELLADO
    Write-Host ======================================
    Write-Host Fuiste derrotado antes de conocer la verdad.  
    Write-Host El Cristal del Alba permanece perdido, y Eldoria se sume en la oscuridad.
    pause
    exit
}

function Final2 {
    
    [System.Console]::ForegroundColor = 'Red'
    Write-Host "`n======================================"
    Write-Host      FINAL: EL FIN DEL REINO
    Write-Host ======================================
    Write-Host El hechizo destruyo la torre y contigo dentro.  
    Write-Host Sin el Cristal del Alba, Eldoria colapsa en el caos.
    pause
    exit
}

function Regresar {
    
    [System.Console]::ForegroundColor = 'Yellow'
    Write-Host "`n======================================"
    Write-Host       FINAL: EL HEROE DE ELDORIA
    Write-Host ======================================
    Write-Host Regresas con el Cristal del Alba y restauras el equilibrio.  
    Write-Host El reino celebra tu valentia y tu nombre sera recordado para siempre.
    pause
    exit
}

function UsarCristal {
    
    [System.Console]::ForegroundColor = 'Magenta'
    Write-Host "`n======================================"
    Write-Host     FINAL: EL NUEVO SENOR OSCURO
    Write-Host ======================================
    Write-Host Decides usar el Cristal para aumentar tu poder.  
    Write-Host Te conviertes en un ser temido, gobernando con puno de hierro.
    pause
    exit
}


function FuerzaBruta {
    
    [System.Console]::ForegroundColor = 'Red'
    Write-Host "`nIntentas romper la trampa con tu espada, pero activa un hechizo de autodestruccion. "
    Write-Host Todo se vuelve blanco.
    Write-Host "Introduce Enter para continuar:"
    
    $tecla = [System.Console]::ReadKey($true).Key
        
    if($tecla -eq 'Enter') {
        Final2
    }
}

function Mecanismo {
    
    [System.Console]::ForegroundColor = 'White'
    Write-Host "`nEncuentras un patron en el suelo y lo activas con cuidado. "
    Write-Host La trampa se desactiva y puedes tomar el Cristal.
    'echon'
    Write-Host Que haras ahora
    Write-Host 1. Regresar a Eldoria
    Write-Host 2. Usar el poder del Cristal para ti mismo
    $choice = Read-Host "Elige Regresar(1) o UsarCristal(2)"  

    if($choice -match '^\d+$') {
        $choice = [int]$choice
        if ($choice -eq '1') { 
            Regresar
        } elseif ($choice -eq '2') { 
            UsarCristal
        }
    }
}

function BuscarPista {
    
    [System.Console]::ForegroundColor = 'Green'
    Write-Host "`nIgnoras la Torre y sigues el consejo de la criatura. " 
    Write-Host Descubres que el verdadero Cristal estaba oculto en el Templo del Alba.
    Write-Host "Introduce Enter para continuar:"
    
    $tecla = [System.Console]::ReadKey($true).Key
        
    if($tecla -eq 'Enter') {
        Regresar
    }
}

function Torre {
    [System.Console]::ForegroundColor = 'White'
    Write-Host "`nLa Torre del Eco es un lugar oscuro y en ruinas. "  
    Write-Host Encuentras el Cristal del Alba, pero hay una trampa magica.
    'echon'
    Write-Host Como intentas desactivarla
    Write-Host 1. Con fuerza bruta
    Write-Host 2. Buscando un mecanismo oculto
    $choice = Read-Host "Elige FuerzaBruta(1) o Mecanismo(2)"

    if($choice -match '^\d+$') {
        $choice = [int]$choice
        if ($choice -eq '1') { 
            FuerzaBruta
        } elseif ($choice -eq '2') { 
            Mecanismo
        }
    }
}

function HablarCriatura {
    [System.Console]::ForegroundColor = 'Cyan'
    Write-Host "`nLa criatura se presenta como un guardian del Cristal."  
    Write-Host Te advierte que la Torre del Eco es una trampa mortal.
    'echon'
    Write-Host Le crees
    Write-Host 1. Si, decides buscar otra pista
    Write-Host 2. No, continuas a la torre
    $choice = Read-Host "Elige BuscarPista(1) o Torre(2)"

    if($choice -match '^\d+$') {
        $choice = [int]$choice
        if ($choice -eq '1') { 
            BuscarPista
        } elseif ($choice -eq '2') { 
            Torre
        }
    }
}

function Esconderse {
    
    [System.Console]::ForegroundColor = 'Gray'
    Write-Host "`nObservas en silencio y ves a la criatura abrir un portal." 
    Write-Host Sin dudar, te cuelas en el y apareces dentro de la Torre del Eco.
    Write-Host "Introduce Enter para continuar:"
    
    $tecla = [System.Console]::ReadKey($true).Key
        
    if($tecla -eq 'Enter') {
        Torre
    }
}


function EnfrentarEncapuchado {
    
    [System.Console]::ForegroundColor = 'Red'
    Write-Host "`nDesenvainas tu espada y atacas, pero el encapuchado es rapido y te esquiva. "
    Write-Host Lanza un hechizo, inmovilizandote. Antes de perder el conocimiento, escuchas:  
    Write-Host Has cometido un error...
    Write-Host "Introduce Enter para continuar:"
    
    $tecla = [System.Console]::ReadKey($true).Key
        
    if($tecla -eq 'Enter') {
        Final1
    }

}

function HuirBiblioteca {
    
    [System.Console]::ForegroundColor = 'Green'
    Write-Host "`nEscapas de la biblioteca y encuentras un mapa con la ubicacion exacta de la Torre del Eco. "
    Write-Host Decides partir de inmediato.
    Write-Host "Introduce Enter para continuar:"
    
    $tecla = [System.Console]::ReadKey($true).Key
        
    if($tecla -eq 'Enter') {
        Torre
    }

}

function Biblioteca {
    
    [System.Console]::ForegroundColor = 'DarkYellow'
    Write-Host "`nEn la biblioteca, encuentras un pergamino sobre el Cristal del Alba y la Torre del Eco."  
    Write-Host "Una figura encapuchada te observa y susurra: No deberias estar aqui...`n"
    Write-Host Que haras
    Write-Host 1. Enfrentarlo con tu espada
    Write-Host 2. Huir y buscar mas pistas
    $choice = Read-Host "Elige EnfrentarEncapuchado(1) o HuirBiblioteca(2)"

    if($choice -match '^\d+$') {
        $choice = [int]$choice
        if ($choice -eq '1') { 
            EnfrentarEncapuchado
        } elseif ($choice -eq '2') { 
            HuirBiblioteca
        }
    }
}

function Bosque {
    
    [System.Console]::ForegroundColor = 'DarkGreen'
    Write-Host "`nEl bosque esta envuelto en niebla. Encuentras un circulo de piedras brillantes." 
    Write-Host "Una criatura sombria emerge de entre los arboles.`n"
    Write-Host Que haras
    Write-Host 1. Hablar con la criatura
    Write-Host 2. Esconderte y observar
    $choice = Read-Host "Elige HablarCriatura(1) o Esconderse(2)" 

    if($choice -match '^\d+$') {
        $choice = [int]$choice
        if ($choice -eq 1) { 
            HablarCriatura
        } elseif ($choice -eq 2) { 
            Esconderse
        }
    }

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
$choice = Read-Host "Elige Biblioteca(1) o Bosque(2)" 

if($choice -match '^\d+$') {
    $choice = [int]$choice
    if ($choice -eq 1) { 
        Biblioteca
    } elseif ($choice -eq 2) { 
        Bosque
    }
}











