import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './homePage.css';
// import '../assets/js/script.js';

const FoodSearch = () => {
  const [food, setFood] = useState([]);
  const [search, setSearch] = useState();
  const getFood = () => {
    axios
      .get("http://localhost:8000/api/food")
      .then(function (response) {
        setFood(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
  const handleSearch = async (e, search) => {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/foodSearch?search=${search}`
    );
    setFood(res.data.data);
  };
  useEffect(() => {
    getFood();
  }, []);
  return (
    <>
      
      {/* header section starts     */}
      <header className="header fixed-top">
          <div className="container">
            <div className="row align-items-center">
              <a href="#" className="logo mr-auto"> <i className="fas fa-mug-hot" /> DThanh </a>
              <nav className="nav">
                <a href="#home">Trang chủ</a>
                <a href="#gallery">Các loại trái cây</a>
                <section className="newsletter">
                  <div className="container">
                    <form action>
                      <input type="text" 
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Bạn muốn tìm trái cây theo tên?"
                      className="email" 
                      name="search"
                      />
                      <button
                        className="btn btn-success"
                        onClick={(e) => handleSearch(e, search)}
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                    <form action>
                      <input type="number"
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Bạn muốn tìm trái cây theo giá ?" 
                      className="email"
                      name="search"
                      />
                      <button
                        className="btn btn-success"
                        onClick={(e) => handleSearch(e, search)}
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </section>
              </nav>
              <div className="icons">
                <div id="menu-btn" className="fas fa-bars" />
                <div id="login-btn" className="fas fa-user" />
              </div>
            </div>
          </div>
        </header>

        {/* header section ends    */}
        {/* home section starts  */}
        <section className="home" id="home">
          <div className="container">
            <div className="row align-items-center text-center text-md-left min-vh-100">
              <div className="col-md-6">
                <span>Thực phẩm sức tốt++</span>
                <h3>Nhanh nào!!!</h3>
                <a className="link-btn">
                <Link to={"/quantity"}>
                  Thêm sản phẩm mới
                </Link></a>
              </div>
            </div>
          </div>
        </section>
        {/* home section ends */}
        {/* gallery section starts  */}
        <section className="gallery" id="gallery">
          <h1 className="heading"> Trái cây </h1>
          <div className="box-container container">
          {!!food ? (
          food.map((food, index) => (
            <div key={index} className="box">
              <img src={`http://127.0.0.1:8000/images/${food.image}`} alt="" />
              <div className="content">
                <h3>{food.name}</h3>
                <p>{food.description}</p>
                <a href="" className="link-btn">{food.price}.000 VND</a>
              </div>
            </div>
            ))
            ) : (
              <div>No data for displaying</div>
            )}
          </div>
        </section>
        {/* gallery section ends */}
        {/* blogs section starts  */}
        {/* newsletter section starts  */}
        <section className="newsletter">
          <div className="container">
            <h3>newsletter</h3>
            <p>Subscribe for latest upadates</p>
            <form action>
              <input type="email" name placeholder="Bạn có góp ý?" id className="email" />
              <input type="submit" defaultValue="Gửi" className="link-btn" />
            </form>
          </div>
        </section>
        {/* newsletter section ends */}
        {/* footer section starts  */}
        <section className="footer container">
          <a href="#" className="logo"> <i className="fas fa-mug-hot" /> coffee </a>
          <p className="credit"> Được tạo bởi <span>a Đăm Thanh</span> | cảm ơn bạn! </p>
          <div className="share">
            <a href="#" className="fab fa-facebook-f" />
            <a href="#" className="fab fa-linkedin" />
            <a href="#" className="fab fa-twitter" />
            <a href="#" className="fab fa-github" />
          </div>
        </section>
        {/* footer section ends */}
        {/* custom js file link  */}
    </>
  );
};
export default FoodSearch;
