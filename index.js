
const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
  Swal.fire({
    title: '🍬🍬🍬🍬🍬🍬🍬',
    text: 'LE DEBO UNAS GOMITAS 🍬🤩',
    icon: '🍬',
    timer: 3000, // Cerrar automáticamente después de 5 segundos
    showConfirmButton: false
  }).then(function() {
    window.location.href = `https://api.whatsapp.com/send?phone=50248791596&text=Si, QUIERO MIS GOMITAS JAJAJA😀 `;
  });
});


const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});

const cerrarVentana = () => {
    setTimeout( ()=> {
      window.close();
    }, 5000);
  }
