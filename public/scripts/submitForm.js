const mainForm = document.querySelector('#mainForm');

if (mainForm) {
  mainForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      name, email, phone, message, img1, img2, action, customerId,
    } = e.target;
    console.log(name);

    try {
      // const res = await fetch('/api/form/newOrder', {
      const res = await fetch(action, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          phone: phone.value,
          message: message.value,
          img1: img1.value,
          img2: img2.value,
          customerId: customerId.value,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.message === 'ok') {
        alert('всё ок');
      }
      // else {
      //   const response = await res.json();
      //   alert(response.message);
      // }
    } catch (error) {
      console.log(error.message);
    }
  });
}
