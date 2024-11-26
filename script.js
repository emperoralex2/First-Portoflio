document.body.style.backgroundColor = 'white';


window.onload = function() {
    const box = document.querySelector('.box');
    
    box.classList.add('hidden');
  
    setTimeout(() => {
      box.style.display = 'block';
      box.classList.remove('hidden');
      box.classList.add('fade-in');
    }, 4000);
  };
  
