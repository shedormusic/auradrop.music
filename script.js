document.querySelectorAll('.next-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const currentStep = btn.closest('.form-step');
    const nextStep = currentStep.nextElementSibling;
    currentStep.classList.remove('active');
    nextStep.classList.add('active');
  });
});

document.querySelectorAll('.prev-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const currentStep = btn.closest('.form-step');
    const prevStep = currentStep.previousElementSibling;
    currentStep.classList.remove('active');
    prevStep.classList.add('active');
  });
});

document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});
