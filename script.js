var pos = 0;
    const pacArray = [
        ['PacMan1.png', 'PacMan2.png'],
        ['PacMan3.png', 'PacMan4.png']
    ];
    var direction = 0;
    var focus = 0;

    function Run() {
        let img = document.getElementById("PacMan");
        let imgWidth = img.width
        focus = (focus + 1) % 2;
        direction = checkPageBounds(direction, imgWidth);
        img.src = pacArray[direction][focus];
        if (direction) {
            pos -= 40;
            img.style.left = pos + "px";
        } else {
            pos += 40;
            img.style.left = pos + 'px';
        }
        // Use setTimeout to call Run every 200 millesecs
        
    }

    setInterval(Run, 200);

    function checkPageBounds(direction, imgWidth) { 
       if (direction) {
            if ( pos < 10) {
                direction = 0;
            }

       } else {
           if( pos > window.innerWidth -imgWidth) {
                direction = 1;    
           }
       }
       
        // Complete this to reverse direction on hitting page bounds
        // 
        return direction;
    }