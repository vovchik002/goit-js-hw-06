const form = document.querySelector('.login-form');
const buttonSubmit = document.querySelector('button')

form.addEventListener("submit", testForm);

function testForm(event) {
    event.preventDefault();

const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.email = data.email.trim().toLowerCase();
  for (const [key, value] of Object.entries(data)) {
      if (value !== '') continue;
      alert('Всі поля повинні бути заповнені!');
      return;
    }
    console.log(data); 
    event.currentTarget.reset()
}

