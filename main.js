const msg = document.getElementById('msg');
const copyBtn = document.getElementById('copyBtn');

const myWidget = cloudinary.createUploadWidget({
  cloudName: 'arikxl', 
  uploadPreset: 'vjg3r7pr'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
        msg.innerText = result.info.secure_url; 
        copyBtn.style.display = "inline-block"
    }
  }
)

document.getElementById("upBtn").addEventListener("click", function(){
    myWidget.open();
}, false);
  

async function copyLink() {
  try {
    await navigator.clipboard.writeText(msg.innerText);
        copyBtn.style.display = "none";
        msg.style.display = "none";
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
