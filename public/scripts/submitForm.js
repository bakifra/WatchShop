const mainForm = document.querySelector('#mainForm');
console.log('------------------------');

if (mainForm) {
  mainForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      name, email, phone, orderDescription, img1, img2,
    } = e.target;
    console.log(name);

    try {
      const res = await fetch('/api/form/newOrder', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          phone: phone.value,
          orderDescription: orderDescription.value,
          img1: img1.value,
          img2: img2.value,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.message === 'ok') {
        alert('Ваш заказ принят!');
        window.location.assign('/');
      }
    } catch (error) {
      console.log(error.message);
    }
  });
}
