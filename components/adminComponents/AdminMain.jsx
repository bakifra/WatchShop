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
      <a href="/api/customers" download>
        <img src="https://cdn-icons-png.flaticon.com/512/843/843281.png" alt="DB stole" width="100" />
      </a>
    </Layout>
  );
}

module.exports = AdminMain;
