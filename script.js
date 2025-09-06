
// Simple JS: save form data into footer text for quick personalization
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value || 'Your Name';
  const cls = document.getElementById('class').value || 'Class';
  const roll = document.getElementById('roll').value || 'Roll No.';
  document.getElementById('footerText').textContent = `Project by: ${name} — ${cls} — ${roll}`;
  alert('Footer updated. Now you can take a screenshot or save index.html for submission.');
});
