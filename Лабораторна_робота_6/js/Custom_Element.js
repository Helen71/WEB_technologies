class PhotoGallery extends HTMLElement  {

    constructor() {
        super() 

    let pElem = this.attachShadow({ mode: "open" }); 
    const mod = this.createDiv("gallery", "imgs");
    const style = this.getStyle();

    pElem.appendChild(mod);
    pElem.appendChild(style); 

    }  
    
    addImages(imgs, add_element){
        for(let img of imgs){
            let var_element = document.createElement("mod");
            add_element.appendChild(var_element);

            var new_picture = document.createElement("img"); 
            var_element.appendChild(new_picture);

            var_element.setAttribute("onclick", "Fullscreen(this)") ;
            new_picture.setAttribute("src", img) ;
            new_picture.setAttribute('onload'," Proportions(this)"); 
            new_picture.setAttribute("onerror", "this.src = 'https://pngimage.net/wp-content/uploads/2018/05/error-png-8.png'")
            
        }
        return add_element;
    }  

    createDiv(val,galery_atr) { 
        let div_to_fill = document.createElement("mod");
        div_to_fill.setAttribute("class", val);

    if (this.hasAttribute(galery_atr)) {
      let images = this.getAttribute(galery_atr).split(",");
      div_to_fill = this.addImages(images, div_to_fill);
    }

    return div_to_fill; 
    }

    set_style() {
        return `
        .gallery {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          border: 25px solid #fff;
        }
        .gallery mod {
          display: flex;
          overflow: hidden;
          border: 15px solid white;
          align-items: center;
          justify-content: center;
          margin: 5px;
          width: 320px;
          height: 320px;
        }
        
        .gallery mod :hover{
          display: flex;
          overflow: hidden;
          border: 7px solid blue;
          align-items: center;
          justify-content: center;
          margin: 1px;
          width: 320px;
          height: 320px;
        }
        mod .fullscreen {
          position: fixed;
          width: 100%;
          height: 100%;
          
          transition: all 1s ease-in-out
        }`;
      } 

    getStyle() {
        const style = document.createElement("style");
        style.innerHTML = this.set_style();
        return style;
      }

    } 
function Proportions(img) {
      (img.clientWidth < img.clientHeight)? 
      def(img, "auto", "85%"):def(img, "85%", "auto")
        
  }
function Fullscreen(img) { 
      (img.getAttribute('class') !== 'fullscreen')?
      img.setAttribute('class', 'fullscreen'):img.setAttribute('class', '')
      
  } 
function def(img, height, width) {
      img.style.height = height;
      img.style.width = width;
  } 



customElements.define("n-gallery", PhotoGallery);



