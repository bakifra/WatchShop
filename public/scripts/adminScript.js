const formAddWatch = document.querySelector('.form-add');
const list = document.querySelector('.cards-list');
const formUpdateWatch = document.querySelector('#update-watch');
const btnUpdate = document.querySelector('.btn-update');

if (formAddWatch) {
  formAddWatch.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      action, method, name, image, typeId, description, orderId,
    } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        image: image.value,
        typeId: typeId.value,
        description: description.value,
        orderId: orderId.value,
      }),
    });
    const data = await res.json();
    // console.log(data, '--------------');
    if (data.message === 'success') {
      document.querySelector(`.type${typeId.value}`).insertAdjacentHTML('beforeend', data.html);
      e.target.reset();
      // это мы очищаем форму, после того, как добавили корточку животного
    }
    // window.location.assign('/admin-main');
  });
}

if (list) {
  list.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn-delete')) {
      const card = e.target.closest('.card');
      const { id } = card.dataset;
      const res = await fetch(`/api/admin/${id}`, {
        method: 'DELETE',

      });
      const data = await res.json();
      if (data) {
        card.remove();
      }
    }
  });
}
if (btnUpdate) {
  btnUpdate.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn-update')) {
      const card = e.target.closest('.card');
      const { id } = card.dataset;
      const res = await fetch(`/api/admin/${id}`, {
        method: 'DELETE',

      });
      const data = await res.json();
      if (data) {
        card.remove();
      }
    }
  });
}

if (formUpdateWatch) {
  console.log(formUpdateWatch, '--------------------');
  formUpdateWatch.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      name, action, description, image, typeId,
    } = e.target;
    const res = await fetch(action, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        image: image.value,
        description: description.value,
        typeId: typeId.value,
        // orderId: orderId.value,
      }),
    });
    const data = await res.json();
    window.location.assign('/admin-main');
    console.log(data, '999999999999999');
  });
}