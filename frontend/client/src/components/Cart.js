const Cart = (props) => {
  return (
    <>
      <header className="header bg-white">
        <div className="container px-0 px-lg-3">
          <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
            <a className="navbar-brand" href="index.html">
              <span className="font-weight-bold text-uppercase text-dark">
                Boutique
              </span>
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="shop.html">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="detail.html">
                    Product detail
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="pagesDropdown"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <div
                    className="dropdown-menu mt-3"
                    aria-labelledby="pagesDropdown"
                  >
                    <a
                      className="dropdown-item border-0 transition-link"
                      href="index.html"
                    >
                      Homepage
                    </a>
                    <a
                      className="dropdown-item border-0 transition-link"
                      href="shop.html"
                    >
                      Category
                    </a>
                    <a
                      className="dropdown-item border-0 transition-link"
                      href="detail.html"
                    >
                      Product detail
                    </a>
                    <a
                      className="dropdown-item border-0 transition-link"
                      href="cart.html"
                    >
                      Shopping cart
                    </a>
                    <a
                      className="dropdown-item border-0 transition-link"
                      href="checkout.html"
                    >
                      Checkout
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="cart.html">
                    {" "}
                    <i className="fas fa-dolly-flatbed mr-1 text-gray"></i>Cart
                    <small className="text-gray">(2)</small>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    <i className="far fa-heart mr-1"></i>
                    <small className="text-gray"> (0)</small>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    <i className="fas fa-user-alt mr-1 text-gray"></i>Login
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <div
        className="modal fade"
        id="productView"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body p-0">
              <div className="row align-items-stretch">
                <div className="col-lg-6 p-lg-0">
                  <a
                    className="product-view d-block h-100 bg-cover bg-center"
                    style={{ background: "url(img/product-5.jpg)" }}
                    href="img/product-5.jpg"
                    data-lightbox="productview"
                    title="Red digital smartwatch"
                  ></a>
                  <a
                    className="d-none"
                    href="img/product-5-alt-1.jpg"
                    title="Red digital smartwatch"
                    data-lightbox="productview"
                  ></a>
                  <a
                    className="d-none"
                    href="img/product-5-alt-2.jpg"
                    title="Red digital smartwatch"
                    data-lightbox="productview"
                  ></a>
                </div>
                <div className="col-lg-6">
                  <button
                    className="close p-4"
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <div className="p-5 my-md-4">
                    <ul className="list-inline mb-2">
                      <li className="list-inline-item m-0">
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                      <li className="list-inline-item m-0">
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                      <li className="list-inline-item m-0">
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                      <li className="list-inline-item m-0">
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                      <li className="list-inline-item m-0">
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                    </ul>
                    <h2 className="h4">Red digital smartwatch</h2>
                    <p className="text-muted">$250</p>
                    <p className="text-small mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In ut ullamcorper leo, eget euismod orci. Cum sociis
                      natoque penatibus et magnis dis parturient montes nascetur
                      ridiculus mus. Vestibulum ultricies aliquam convallis.
                    </p>
                    <div className="row align-items-stretch mb-4">
                      <div className="col-sm-7 pr-sm-0">
                        <div className="border d-flex align-items-center justify-content-between py-1 px-3">
                          <span className="small text-uppercase text-gray mr-4 no-select">
                            Quantity
                          </span>
                          <div className="quantity">
                            <button className="dec-btn p-0">
                              <i className="fas fa-caret-left"></i>
                            </button>
                            <input
                              className="form-control border-0 shadow-0 p-0"
                              type="text"
                              value="1"
                            />
                            <button className="inc-btn p-0">
                              <i className="fas fa-caret-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-5 pl-sm-0">
                        <a
                          className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
                          href="cart.html"
                        >
                          Add to cart
                        </a>
                      </div>
                    </div>
                    <a className="btn btn-link text-dark p-0" href="#">
                      <i className="far fa-heart mr-2"></i>Add to wish list
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Cart</h1>
              </div>
              <div className="col-lg-6 text-lg-right">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Cart
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <h2 className="h5 text-uppercase mb-4">Shopping cart</h2>
          <div className="row">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <div className="table-responsive mb-4">
                <table className="table">
                  <thead className="bg-light">
                    <tr>
                      <th className="border-0" scope="col">
                        {" "}
                        <strong className="text-small text-uppercase">
                          Product
                        </strong>
                      </th>
                      <th className="border-0" scope="col">
                        {" "}
                        <strong className="text-small text-uppercase">
                          Price
                        </strong>
                      </th>
                      <th className="border-0" scope="col">
                        {" "}
                        <strong className="text-small text-uppercase">
                          Quantity
                        </strong>
                      </th>
                      <th className="border-0" scope="col">
                        {" "}
                        <strong className="text-small text-uppercase">
                          Total
                        </strong>
                      </th>
                      <th className="border-0" scope="col">
                        {" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="pl-0 border-0" scope="row">
                        <div className="media align-items-center">
                          <a
                            className="reset-anchor d-block animsition-link"
                            href="detail.html"
                          >
                            <img
                              src="img/product-detail-3.jpg"
                              alt="..."
                              width="70"
                            />
                          </a>
                          <div className="media-body ml-3">
                            <strong className="h6">
                              <a
                                className="reset-anchor animsition-link"
                                href="detail.html"
                              >
                                Red digital smartwatch
                              </a>
                            </strong>
                          </div>
                        </div>
                      </th>
                      <td className="align-middle border-0">
                        <p className="mb-0 small">$250</p>
                      </td>
                      <td className="align-middle border-0">
                        <div className="border d-flex align-items-center justify-content-between px-3">
                          <span className="small text-uppercase text-gray headings-font-family">
                            Quantity
                          </span>
                          <div className="quantity">
                            <button className="dec-btn p-0">
                              <i className="fas fa-caret-left"></i>
                            </button>
                            <input
                              className="form-control form-control-sm border-0 shadow-0 p-0"
                              type="text"
                              value="1"
                            />
                            <button className="inc-btn p-0">
                              <i className="fas fa-caret-right"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle border-0">
                        <p className="mb-0 small">$250</p>
                      </td>
                      <td className="align-middle border-0">
                        <a className="reset-anchor" href="#">
                          <i className="fas fa-trash-alt small text-muted"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th className="pl-0 border-light" scope="row">
                        <div className="media align-items-center">
                          <a
                            className="reset-anchor d-block animsition-link"
                            href="detail.html"
                          >
                            <img
                              src="img/product-detail-2.jpg"
                              alt="..."
                              width="70"
                            />
                          </a>
                          <div className="media-body ml-3">
                            <strong className="h6">
                              <a
                                className="reset-anchor animsition-link"
                                href="detail.html"
                              >
                                Apple watch
                              </a>
                            </strong>
                          </div>
                        </div>
                      </th>
                      <td className="align-middle border-light">
                        <p className="mb-0 small">$250</p>
                      </td>
                      <td className="align-middle border-light">
                        <div className="border d-flex align-items-center justify-content-between px-3">
                          <span className="small text-uppercase text-gray headings-font-family">
                            Quantity
                          </span>
                          <div className="quantity">
                            <button className="dec-btn p-0">
                              <i className="fas fa-caret-left"></i>
                            </button>
                            <input
                              className="form-control form-control-sm border-0 shadow-0 p-0"
                              type="text"
                              value="1"
                            />
                            <button className="inc-btn p-0">
                              <i className="fas fa-caret-right"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle border-light">
                        <p className="mb-0 small">$250</p>
                      </td>
                      <td className="align-middle border-light">
                        <a className="reset-anchor" href="#">
                          <i className="fas fa-trash-alt small text-muted"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-light px-4 py-3">
                <div className="row align-items-center text-center">
                  <div className="col-md-6 mb-3 mb-md-0 text-md-left">
                    <a
                      className="btn btn-link p-0 text-dark btn-sm"
                      href="shop.html"
                    >
                      <i className="fas fa-long-arrow-alt-left mr-2"> </i>
                      Continue shopping
                    </a>
                  </div>
                  <div className="col-md-6 text-md-right">
                    <a
                      className="btn btn-outline-dark btn-sm"
                      href="checkout.html"
                    >
                      Procceed to checkout
                      <i className="fas fa-long-arrow-alt-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 rounded-0 p-lg-4 bg-light">
                <div className="card-body">
                  <h5 className="text-uppercase mb-4">Cart total</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center justify-content-between">
                      <strong className="text-uppercase small font-weight-bold">
                        Subtotal
                      </strong>
                      <span className="text-muted small">$250</span>
                    </li>
                    <li className="border-bottom my-2"></li>
                    <li className="d-flex align-items-center justify-content-between mb-4">
                      <strong className="text-uppercase small font-weight-bold">
                        Total
                      </strong>
                      <span>$250</span>
                    </li>
                    <li>
                      <form action="#">
                        <div className="form-group mb-0">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter your coupon"
                          />
                          <button
                            className="btn btn-dark btn-sm btn-block"
                            type="submit"
                          >
                            {" "}
                            <i className="fas fa-gift mr-2"></i>Apply coupon
                          </button>
                        </div>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-dark text-white">
        <div className="container py-4">
          <div className="row py-5">
            <div className="col-md-4 mb-3 mb-md-0">
              <h6 className="text-uppercase mb-3">Customer services</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="footer-link" href="#">
                    Help &amp; Contact Us
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Returns &amp; Refunds
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Online Stores
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <h6 className="text-uppercase mb-3">Company</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="footer-link" href="#">
                    What We Do
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Available Services
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Latest Posts
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6 className="text-uppercase mb-3">Social media</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="footer-link" href="#">
                    Twitter
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Tumblr
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="border-top pt-4"
            style={{ borderColor: "#1d1d1d !important" }}
          >
            <div className="row">
              <div className="col-lg-6">
                <p className="small text-muted mb-0">
                  &copy; 2020 All rights reserved.
                </p>
              </div>
              <div className="col-lg-6 text-lg-right">
                <p className="small text-muted mb-0">
                  Template designed by{" "}
                  <a
                    className="text-white reset-anchor"
                    href="https://bootstraptemple.com/p/bootstrap-ecommerce"
                  >
                    Bootstrap Temple
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Cart;
