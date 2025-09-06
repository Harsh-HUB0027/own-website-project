
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value || 'Your Name';
  const cls = document.getElementById('class').value || 'Class';
  const roll = document.getElementById('roll').value || 'Roll No.';
  const footerText = `Project by: ${name} — ${cls} — ${roll}`;
  document.getElementById('footerText').textContent = footerText;
  localStorage.setItem('projectFooter', footerText);
  alert('Footer updated and saved locally. You can now take a screenshot or upload the site.');
});

window.addEventListener('DOMContentLoaded', function(){
  const saved = localStorage.getItem('projectFooter');
  if(saved){ document.getElementById('footerText').textContent = saved; }
});
