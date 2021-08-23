
var ima1,ima2,ima3,ima4,ima5,ima6,ima7,ima8,ima9,ima10,ima11,ima12,ima13;
var historia,hist,estado,playI;
estado= 1;
hist=1;
var estadoPadre;
estadoPadre = 1;
var state = 1;

var chica, chicaI, chicaM;
var zombie, zombieI, zombieG; 
var arbol, arbolI, rama, ramaI;
var flecha, flechaI; 
var fondo, fondoI, perdiste, perdisteI;
var state ;
var play = 1;
var end = 0; 
var sueloI;
var ramaG, flechaG, arbolG; 
var cuadrosF, cuadrosA, cuadrosR;
state = play;
  
function preload()
{
    ima1 = loadAnimation ("niña1.JPG");
    ima2 = loadAnimation ("asteroide1.PNG");
    ima3 = loadAnimation ("asteroide2.PNG");
    ima4 = loadAnimation ("asteroide3.PNG");
    ima5 = loadAnimation ("humanos1.PNG");
    ima6 = loadAnimation ("genetica.jpeg");
    ima7 = loadAnimation ("humano2.jpeg");
    ima8 = loadAnimation ("humanos3.JPG");
    ima9 = loadAnimation ("niña2.JPG");
    ima10 = loadAnimation ("cura1.PNG");
    ima11 = loadAnimation ("niña3.JPG");
    ima12 = loadAnimation ("Zombie1.PNG");
    ima13 = loadAnimation ("instrucciones1.PNG");

    playI = loadImage ("play.jpg");


    chicaI = loadAnimation ("chica corriendo .gif");
    chicaM = loadImage ("chicaMuestaBuena.jpg");
    zombieI = loadAnimation ("zombie bueno corriendo.gif");
    arbolI = loadImage ("arbol.png");
    ramaI = loadImage ("rama.png");
    flechaI =loadImage ("flecha verde .png");
    fondoI = loadImage ("fondo funciona.png");
    zombieG = loadImage ("zombieGane.jpg");
    perdisteI = loadAnimation ("perdiste.gif");
}

function setup()
{
        createCanvas(windowWidth, windowHeight);
        historia=createSprite(width/2,height/2);
        historia.addAnimation("imag1",ima1);
        historia.addAnimation("imag2",ima2);
        historia.addAnimation("imag3",ima3);
        historia.addAnimation("imag4",ima4);
        historia.addAnimation("imag5",ima5);
        historia.addAnimation("imag6",ima6);
        historia.addAnimation("imag7",ima7);
        historia.addAnimation("imag8",ima8);
        historia.addAnimation("imag9",ima9);
        historia.addAnimation("imag10",ima10);
        historia.addAnimation("imag11",ima11);
        historia.addAnimation("imag12",ima12);
        historia.addAnimation("imag12",ima12);
        historia.addAnimation("imag13",ima13);

        historia.scale=0.7;    
        
        
        fondo = createSprite (0,0);
        fondo.addImage (fondoI);
        fondo.scale = 2.7;

        perdiste = createSprite ( width/2, height/2);

        chica = createSprite (450, height-160);
        chica.addAnimation ("corriendo", chicaI);
        chica.addAnimation ("muerta", chicaM);
        chica.scale = 0.5;

        zombie = createSprite (70, height-120);
        zombie.addAnimation ("corriendo", zombieI);
        zombie.addAnimation ("gane", zombieG)
        zombie.scale = 0.4;
        zombie.setCollider ("rectangle", 0,90, 300,400);

        ramaG = createGroup ();
        flechaG = createGroup ();
        arbolG = createGroup ();

        sueloI = createSprite (width/2, height-0, width, 5);
        sueloI.visible = false; 
}

function draw()
{
    background(0);

    if (estadoPadre === 1){
fondo.visible = false;
perdiste.visible = false;
chica.visible = false;
zombie.visible = false;
    
    if (estado === 1)
    {
        var play1 = createSprite (10,height-20);
        play1.addImage(playI);
        play1.scale=0.05;   
            if ( mousePressedOver(play1))
            {            
                historia.changeAnimation("imag2",ima2);
                historia.scale =0.5;
                estado = 2;
            }
        play1.lifetime=5;
    } 
    if (estado === 2)
    {
        var play2 = createSprite (40,height-20);
        play2.addImage(playI);
        play2.scale=0.05;       
        if ( mousePressedOver(play2))
        { 
                historia.changeAnimation("imag3",ima3);
                historia.scale =0.5;

                estado=3;
        }
        play2.lifetime=5;
    }
   if (estado === 3)
    {
      var play3 = createSprite (70,height-20);
      play3.addImage(playI);
      play3.scale=0.05;   
        if ( mousePressedOver(play3))
        { 
              historia.changeAnimation("imag4",ima4);
              historia.scale =0.5;

              estado=4;
        }
        play3.lifetime=5;
    }
    if (estado === 4)
    {
      var play4 = createSprite (100,height-20);
      play4.addImage(playI);
      play4.scale=0.05;
    
        if ( mousePressedOver(play4))
        { 
              historia.changeAnimation("imag5",ima5);
              historia.scale =0.5;

              estado=5;
        }
      play4.lifetime=5;
    }
    if (estado === 5)
    {
      var play5 = createSprite (130,height-20);
      play5.addImage(playI);
      play5.scale=0.05;
    
        if ( mousePressedOver(play5))
        { 
              historia.changeAnimation("imag6",ima6);
              historia.scale =0.2;

              estado=6;
        }
      play5.lifetime=5;
    }
    if (estado === 6)
    {
      var play6 = createSprite (160,height-20);
      play6.addImage(playI);
      play6.scale=0.05;
    
        if ( mousePressedOver(play6))
        { 
              historia.changeAnimation("imag7",ima7);
              historia.scale =0.2;

              estado=7;
        }
        play6.lifetime=5;
    }
    if (estado === 7)
    {
      var play7 = createSprite (190,height-20);
      play7.addImage(playI);
      play7.scale=0.05;
    
        if ( mousePressedOver(play7))
        { 
              historia.changeAnimation("imag8",ima8);
              historia.scale =1.3;

              estado=8;
        }
        play7.lifetime=5;
    }
    if (estado === 8)
    {
      var play8 = createSprite (220,height-20);
      play8.addImage(playI);
      play8.scale=0.05;
    
        if ( mousePressedOver(play8))
        { 
              historia.changeAnimation("imag9",ima9);
              historia.scale =0.7;

              estado=9;
        }
        play8.lifetime=5;
    }
    if (estado === 9)
    {
      var play9 = createSprite (250,height-20);
      play9.addImage(playI);
      play9.scale=0.05;
    
        if ( mousePressedOver(play9))
        { 
              historia.changeAnimation("imag10",ima10);
              historia.scale =0.6;

              estado=10;
        }
        play9.lifetime=5;
    }
    if (estado === 10)
    {
      var play10 = createSprite (280,height-20);
      play10.addImage(playI);
      play10.scale=0.05;
    
        if ( mousePressedOver(play10))
        { 
              historia.changeAnimation("imag11",ima11);
              historia.scale =0.6;

              estado=11;
        }
        play10.lifetime=5;
    }
    if (estado === 11)
    {
      var play11 = createSprite (310,height-20);
      play11.addImage(playI);
      play11.scale=0.05;
    
        if ( mousePressedOver(play11))
        { 
              historia.changeAnimation("imag12",ima12);
              historia.scale =0.3;

              estado=12;
        }
        play11.lifetime=5;
    }
    if (estado === 12)
    {
      var play12 = createSprite (340,height-20);
      play12.addImage(playI);
      play12.scale=0.05;
    
        if (mousePressedOver(play12))
        { 
              historia.changeAnimation("imag13",ima13);
              historia.scale =0.5;
              estado=13;
              estadoPadre = 2;              
        }
        play12.lifetime=5;
    }
  }
if (estado === 13){
  var play13 = createSprite (370,height-20);
  play13.addImage(playI);
  play13.scale=0.05;
        if (state === 1 &&  mousePressedOver(play13) )
        {

          fondo.visible = true ;
          perdiste.visible = true;
          chica.visible = true;
          zombie.visible = true;
           play13.visible = false;
          historia.visible = false;

          ramas ();
          arboles ();
          flechas ();

        fondo.velocityX = -7
        if (fondo.x < 0){
        fondo.x = fondo.width/2;
        }
          
        if (keyDown("space") && chica.y >= 360)
          {
       chica.velocityY = -10;
          
           }
        chica.velocityY = chica.velocityY + 0.8;
        // chica.collide (sueloI);
          


          if (ramaG.collide (chica))
          {
          chica.changeAnimation ("muerta", chicaM);
          chica.x = chica.x - 2;
          }
          else
          {
          chica.changeAnimation ("corriendo", chicaI);
          }
          if (chica.isTouching (flechaG)){
            chica.x = chica.x + 3; 
          }
    
          if (arbolG.isTouching(chica))
          {
            state = 0;
          }
          if (zombie.isTouching (chica)){
            state = 0;
    
          }
        
    
        if (state === 0){
          
      perdiste.addAnimation ("perdi", perdisteI);
      perdiste.scale = 1.3;
          perdiste.visible = true;
           fondo.visible = false;
         perdiste.depth = chica.depth;
           chica.depth = chica.depth+1;
           perdiste.depth = zombie.depth;
           zombie.depth = zombie.depth + 1;
           chica.changeAnimation ("muerta", chicaM);
           zombie.changeAnimation ("gane", zombieG);
           ramaG.destroyEach();
           arbolG.destroyEach();
           flechaG.destroyEach ();
        }
      if (mousePressedOver (perdiste)){
    reset();
      }
    }
  }
           chica.collide (sueloI);
      
    
  

    
    drawSprites();

  }
    

    






function reset (){
  state = play;
    perdiste.visible = false;
    fondo.visible = true;
    chica.changeAnimation ("corriendo", chicaI);
    zombie.changeAnimation ("corriendo", zombieI);
    puntaje = 0;
  }
  
  function ramas(){
    cuadrosR = Math.round(random(0, 1000));
    if (frameCount % cuadrosR === 0){
      rama = createSprite (width, height-30);
      rama.addImage(ramaI)
      rama.scale = 0.2; 
      rama.velocityX = -7; 
      rama.lifetime = 1000;
      
      chica.depth = rama.depth;
     rama.depth = rama.depth + 1;
      
      ramaG.add (rama);
    rama.setCollider ("rectangle",-13,0, 400, 150);
    
    }
   
  }
  
  function arboles (){
    cuadrosA = Math.round(random(0, 1000));
   if (frameCount % cuadrosA === 0 ){
      arbol = createSprite (width, height-60);
      arbol.addImage (arbolI);
      arbol.scale = 0.2;
    
      arbol.velocityX = -7; 
      arbol.lifetime = 1000;
   
      
  
     
      arbolG.add (arbol);
   arbol.setCollider ("circle", 0,0,200);
    }
  }
  
  function flechas (){
   
      if (frameCount % 500  === 0){
      flecha = createSprite (width, height-30);
      flecha.addImage (flechaI);
      flecha.scale = 0.08;
    
      flecha.velocityX = -7;
      
  
      flecha.lifetime = 1000;
      
    chica.depth = flecha.depth;
      flecha.depth = flecha.depth + 1;
      flechaG.add (flecha);
     flecha.setCollider ("circle",0,0,400);
        
    }
  }
