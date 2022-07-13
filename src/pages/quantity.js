import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState();
  const getQuantity = () => {
    axios
      .get("http://localhost:8000/api/category_id")
      .then(function (res) {
        setQuantity(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
  useEffect(() => {
    getQuantity();
  }, []);
  return (
    <div>
      <h3 className="">BẢNG THỐNG KÊ SỐ LƯỢNG MÓN ĂN THEO LOẠI</h3>
      <div className="row">
        <div className="col-12">
          <div className="card card-body">
            <div className="table-responsive">
              <table className="table table-bordered mb-0 text-center">
                <thead>
                  <tr>
                    <th>Categories Id</th>
                    <th>Categories Name</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {!!quantity ? (
                    quantity.map((qua, index) => (
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{qua.name}</td>
                        <td>{qua.quantity}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>No data for displaying</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      <div>
  </div>
</div>
</div>
  );
};
export default Quantity;
