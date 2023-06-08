const React = require('react');


function FormAddCard () {
  return (
    <form action="/admin-main" method='POST' className='formAdd'>
      <div className='typeId'>
        <label> typeId
          <input type="number" />
        </label> 
      </div>
      <div className='name'>
        <label> Name
          <input type="text" />
        </label> 
      </div>
      <div className='image'>
        <label> image
          <input type="text" />
        </label> 
      </div>
      <div className='description'>
        <label> description
          <input type="text" />
        </label>
      </div>
      <button type='submit'>Сохранить</button>
    </form>
  );
}

module.exports = FormAddCard;