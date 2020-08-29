
const _ = e => document.querySelector(e);
const render = _('.result');
/*  creating video*/
const createVideo=data=>{
let v=document.createElement('video');
v.id="instavideo";
v.src=data.content;
v.controls=true;
v.autoplay=true;

//info part
let info=document.createElement('h4');
info.textContent="right click on video or download button to save the video";
render.innerHTML="";
render.appendChild(v);
render.appendChild(info);
};
//
const createImg= data =>{
    let br=document.createElement('br');
    
    let i=document.createElement('img');
    i.id="instaImg";
    i.src=data.content;
    //info part
    let info=document.createElement('h4');
    info.textContent="right click on image or download button to save the image";
    render.innerHTML="";
    render.appendChild(i);
    render.appendChild(br);
    render.appendChild(info);
    }

    //extraction
    const getCont= () =>{
        render.innerHTML = "<div class='contnt-placeholder'></div>";
       // fetch url
       let url =_('input').value;
       if(url){
           fetch(url).
           then(r => r.text()).
           then(r => {
             render.innerHTML=r;
               //extracting meta
               let wt=setTimeout(()=>{
                let v = _('meta[property="og:video"]');
                if(v){
                   createVideo(v);
                 }
                 else{
                     let img=_('meta[property="og:image"]');
                     if(img){
                         createImg(img);
                     }
                     else{
                        document.body.innerHTML= body ;
                         alert('alert in extracting media.');
                     };
                  }
                  clearTimeout(wt);
               },200);
           });
        }
           else{
            _('input').setAttribute('placeholder', 'Invalid address, use a proper Insagram link');
        
       }
    };
