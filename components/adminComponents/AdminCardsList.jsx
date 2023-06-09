const React = require('react');

const FormAddCard = require('./FormAddCard');
const AdminCardsPage = require('./AdminCardsPage');

function AdminCardsList({ watches }) {
  return (
    <>
      <FormAddCard />
      <AdminCardsPage watches={watches} />
    </>
  );
}

module.exports = AdminCardsList;
