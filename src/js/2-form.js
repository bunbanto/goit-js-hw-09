let formData = {
  email: '',
  message: '',
};
//Функція збереження даних
function saveFormData() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
//Відслідковування змін
document.querySelector('.feedback-form').addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  saveFormData();
});
//Функція завантаження даних
function loadFormData() {
  const saveData = localStorage.getItem('feedback-form-state');
  if (saveData) {
    formData = JSON.parse(saveData);
    document.querySelector('.feedback-form [name="email"]').value =
      formData.email;
    document.querySelector('.feedback-form [name="message"]').value =
      formData.message;
  }
}

//Завантаження даних після перезавантаження сторінки
document.addEventListener('DOMContentLoaded', loadFormData);

//Відправка форми з перевіркою на заповненість і очищенням полів
document.querySelector('.feedback-form').addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log('Form Data:', formData);
    localStorage.removeItem('feedback-form-state');
    formData = { email: '', message: '' };
    document.querySelector('.feedback-form').reset();
  }
});
