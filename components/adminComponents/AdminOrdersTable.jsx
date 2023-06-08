const React = require("react");

function AdminOrdersTable() {
  return (
    <table className="table table-bordered border-primary">
      <thead>
        <tr>
          <th scope="col">№ заказа</th>
          <th scope="col">Имя клиента</th>
          <th scope="col">№ телефона</th>
          <th scope="col">Почта</th>
          <th scope="col">Ссылка на часы</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  );
}

module.exports = AdminOrdersTable;
