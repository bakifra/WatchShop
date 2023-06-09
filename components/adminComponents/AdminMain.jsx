const React = require('react');
const Layout = require('../Layout');
const AdminNavBar = require('./AdminNavBar');
const AdminCardsList = require('./AdminCardsList');
const AdminOrdersTable = require('./AdminOrdersTable');

function AdminMain({ title, watches }) {
  return (
    <Layout title={title}>
      <h1>AdminMain</h1>
      <AdminNavBar />
      <h1>Orders</h1>
      <AdminOrdersTable />
      <h1>AdminCardsList</h1>
      <AdminCardsList watches={watches} />
    </Layout>
  );
}

module.exports = AdminMain;
