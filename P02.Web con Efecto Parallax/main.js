/* cargamos nuestra librería, utilizamos la consola para que nos
ayude a saber en que posición estamos al hacer un scroll vertical (ScrollY)
Retornamos ese valor y gracias a la librería lax
podemos modicar propiedades CSS como escala y opacidad, así conseguimos este 
efecto de hacerse más grande y desaparecer. Al hacerlo con un vector, le decimos
donde empieza y donde acaba */

window.onload = function() {
    window.addEventListener("scroll", (e) => {
        console.info(window.scrollY);
    });

    lax.init();
    lax.addDriver('scrollY', function(){
        return window.scrollY;
    });

    lax.addElements('.logo', {
        scrollY: {
            scale:[
                [0, 600], /* posición de nuestro scroll */
                [1, 3],
            ],
            opacity:[
                [0, 380],
                [1, 0],
            ],
            translateY:[
                [0, 80],
                [0, 200],
            ],
        },
    });


    lax.addElements('.ultron', {
        scrollY: {
            opacity:[
                [0, 200],
                [0, 1],
            ],
            translateY:[
                [0, 400],
                [0, 80],
            ],
        },
    });

     lax.addElements('.loki', {
        scrollY: {
            opacity:[
                [240, 320],
                [0, 1],
            ],
            translateY:[
                [0, 400],
                [0, -80],
            ],
        },
    });
 
     lax.addElements('.thanos', {
        scrollY: {
            opacity:[
                [280, 360],
                [0, 1],
            ],
            translateY:[
                [0, 400],
                [0, 80],
            ],
        },
    });
 
     lax.addElements('.scroll-tip', {
        scrollY: {
            opacity:[
                [0, 80],
                [1, 0],
            ],
            translateY:[
                [0, 800],
                [-200, 0],
            ],
            'letter-spacing':[
                [0, 600],
                [0, 100], {
                    cssUnit: "px",
                },
            ],
            
        },
    }); 

     lax.addElements('.ironman-title', {
        scrollY: {
            filter:[
                [1000, 1100, 1200, 1300, 1400, 1500, 1600],
                [0, 50, 0, 50, 0, 75, 0],
                {
                    cssFn: function(value){
                        return `drop-shadow(0 0 ${value}px yellow) `
                    }
                }
            ],      
                       
            translateY:
            [[1400, 2800],
            [200, "elCenterY-150"]] /* el CenterY es una propiedad de lax  */
        },
    });
 
     lax.addElements('.ironman-01', {
        scrollY: {                     
            translateY:
            [
            [600, 2000],
            [800, -1500]
            ] 
        },
    }); 

      lax.addElements('.ironman-02', {
        scrollY: {   
            scale: [
                [2000, 2500],
                [0, 1.5]
            ],                  
            translateX: [
                [2000, 2200, 3000],
                [0, 1000, 0]
            ],
            translateY: [
                [2000, 2200, 3000],
                [-500, 0, -400]
            ] 
        },
    });  
      lax.addElements('.shield', {
        scrollY: {                               
            translateX: [
                [3200, 3400, 3600, 3800],
                [-800, 'screenWidth - 200', 0, 'screenWidth + 200']
            ],
            translateY: [
                [3200, 3400, 3600, 3800],
                [800, 1200, 1600, 1600]
            ],
            
        },
    });  
};

