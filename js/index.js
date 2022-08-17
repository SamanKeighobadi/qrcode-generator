const form = document.querySelector("form")
const qrcode = document.querySelector('#qrcode')



const generateQRCode = (url,size) =>{
    const qrcode = new QRCode("qrcode",{
        text:url,
        width:size,
        height:size
    })
}

const clearQRCode = () =>{
    qrcode.innerHTML = "";
}

const generateSubmit = (e)=>{
    e.preventDefault();

    clearQRCode();

    const url = document.querySelector("input[type='url']").value;
    const size = document.querySelector('select').value;

    if(url ===""){
        return alert("Please enter your URL");
    }else{
        generateQRCode(url,size);
    }

}

form.addEventListener("submit",generateSubmit)