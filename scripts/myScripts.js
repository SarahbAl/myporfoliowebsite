let scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbar-main' })


document.addEventListener("DOMContentLoaded", () => {
  console.log("Page displayed");

});



document.addEventListener('DOMContentLoaded', function() {
 
  const emailItem = document.querySelector('.list-group-item:nth-child(2)');
  const phoneItem = document.querySelector('.list-group-item:nth-child(4)');

  emailItem.addEventListener('click', function() {
      alert('Email clicked: ' + emailItem.textContent.trim());
  });

  phoneItem.addEventListener('click', function() {
      alert('Phone number clicked: ' + phoneItem.textContent.trim());
  });

  
  emailItem.textContent = 'X00187274@myTUDublin.ie';
  phoneItem.textContent = '0830205780';
});





