const React = require('react');
const Layout = require('../Layout');
const FormAddCard = require('./FormAddCard');
const AdminCardsPage = require('./AdminCardsPage');

function AdminCardsList({title, watches}) {
  return (
    <Layout title={title}>
      <FormAddCard />
      <AdminCardsPage watches={watches} />
    </Layout>
  )
}

module.exports = AdminCardsList;