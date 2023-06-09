const React = require('react');

function FormAddCard() {
  return (
    <form action="/api/admin/form-add" method="POST" className="form-add">
      <div className="typeId">
        <label>
          {' '}
          typeId
          <input name="typeId" type="number" />
        </label>
      </div>
      <div className="name">
        <label>
          {' '}
          Name
          <input name="name" type="text" />
        </label>
      </div>
      <div className="image">
        <label>
          {' '}
          image
          <input name="image" type="text" />
        </label>
      </div>
      <div className="description">
        <label>
          {' '}
          description
          <input type="text" name="description" />
        </label>
      </div>
      <div className="orderId">
        <label>
          {' '}
          orderId
          <input name='orderId' type="number" />
        </label>
      </div>
      <button type="submit">Сохранить</button>
    </form>
  );
}

module.exports = FormAddCard;
