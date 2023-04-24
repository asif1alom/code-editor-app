let html = document.querySelector(".html");
let css = document.querySelector(".css");
let js = document.querySelector(".js");
let ifrm = document.querySelector(".iframe");

let textArea = document.querySelector("textArea");

let run = () => {



    
    ifrm.contentDocument.body.innerHTML = `<style>${css.value}</style> ` + html.value ;
    ifrm.contentWindow.eval(js.value);
}


document.querySelectorAll('textarea').forEach(item => {
  item.addEventListener('keyup', event => {
    run();
  })
})





