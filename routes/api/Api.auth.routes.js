const router = require('express').Router();
const bcrypt = require('bcrypt');
const formUpdateWatch = require('../../components/adminComponents/FormUpdateCard');

const WatchItem = require('../../components/WatchItem');
const { Watch, User} = require('../../db/models');

router.post('/log', async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ where: { name } });
    const compare = await bcrypt.compare(password, user.password);
    if (!name || !password) {
      res.json({ message: 'Заполните все поля' });
      return;
    }
    if (!user || !compare) {
      res.json({ message: 'Такого юзера не существует или пароль неверный' });
      return;
    }
    req.session.userId = user.id;
    res.json({ message: 'ok' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }

    res
      .clearCookie('user_sid') // серверное удаление куки по имени
      .redirect('/');
  });
});

router.post('/form-add', async (req, res) => {
  try {
    const {
      name, image, typeId, description, orderId,
    } = req.body;
    // console.log(req.body);
    const newWatch = await Watch.create({
      name,
      image,
      typeId,
      description,
      orderId,
    });
    res.json({
      message: 'success',
      html: res.renderComponent(WatchItem, { watch: newWatch }, { htmlOnly: true }),
    });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/:watchId', async (req, res) => {
  try {
    const { watchId } = req.params;
    console.log(req.params);
    const watch = await Watch.findOne({ where: { id: watchId } });
    res.send(res.renderComponent(formUpdateWatch, { watch, title: 'Form update watch' }));
  } catch ({ message }) {
    res.json(message);
  }
});


router.delete('/:watchId', async (req, res) => {
  try {
    const { watchId } = req.params;
    const result = await Watch.destroy({ where: { id: watchId } });
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});
// user_id: req.session.userId

router.put('/:watchId', async (req, res) => {
  try {
    const { watchId } = req.params;
    const {
      name, image, typeId, description, orderId,
    } = req.body;
    // console.log(req.body, '0000000000000000000');
    const watch = await Watch.update(
      {
        name,
        image,
        typeId,
        description,
        orderId,
      },
      { where: { id: watchId } },
    );
    res.json(watch);
  } catch ({ message }) {
    res.json(message);
  }
});
// user_id: req.session.userId
module.exports = router;

// router.post('/reg', async (req, res) => {
//   try {
//     const {
//       name, email, password, cpassword,
//     } = req.body;
//     let user = await User.findOne({ where: { email } });
//     if (!name || !email || !password || !cpassword) {
//       res.json({ message: 'Заполните все поля' });
//       return;
//     }
//     if (user) {
//       res.json({ message: 'Такой емайл уже занят' });
//       return;
//     }

//     if (password !== cpassword) {
//       res.json({ message: 'Пароли не совпадают' });
//       return;
//     }
//     const hash = await bcrypt.hash(password, 5);
//     user = await User.create({ name, email, password: hash });
//     req.session.userId = user.id;
//     res.json({ message: 'ok' });
//   } catch ({ message }) {
//     res.json({ message });
//   }
// });
