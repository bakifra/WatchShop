/* eslint-disable react/prop-types */
const React = require("react");

function FeedbackForm() {
  return (
    <div className="order" id="Order">
      <h1 className="orderTitle">Заявка на заказ часов ручной работы</h1>
      <div className="orgerForma">
        <form id="mainForm" method="POST" action="/api/form/newOrder">
          <input
            className="nameClient form-control"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="phoneClient form-control"
            type="text"
            name="phone"
            placeholder="Phone"
          />
          <input
            className="emailClient form-control"
            type="text"
            name="email"
            placeholder="Email"
          />

          <textarea
            className="messageClient form-control"
            name="orderDescription"
            placeholder="order Description"
          />

          <input
            className="urlClientOne form-url form-control"
            type="text"
            name="img1"
            placeholder="LinkOne"
          />

          <input
            className="urlClientTwo form-url form-control"
            type="text"
            name="img2"
            placeholder="LinkTwo"
          />

          {/* <input
            className="urlClientTwo form-url form-control"
            type="text"
            name="customerId"
            placeholder="customerId"
          /> */}

          <button type="submit" className="btn" role="button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

module.exports = FeedbackForm;
