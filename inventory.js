import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../../../layouts/Dashboard";
import { inventor } from "./inventory.json";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Pagination from "../../seller/Pagination";

const Inventory = () => {
  const [data, setData] = useState(inventor);

  console.log("Logs", inventor);
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setpagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPageChange = (start, end) => {
    setpagination({ start: start, end: end });
  };

  localStorage.setItem("logs", JSON.stringify(inventor));

  const [sort, setSort] = useState(false);
  const [sort1, setSort1] = useState(false);
  const [sort2, setSort2] = useState(false);
  const [sort3, setSort3] = useState(false);
  const [sort4, setSort4] = useState(false);


  const searchyproduct = (e) => {
    let { value } = e.target;
    const filterdaa = inventor.filter((i) =>
      i.product.toLowerCase().includes(value.toLowerCase())
    );

    if (value == "") {
      setData(inventor);
    } else if (filterdaa) {
      setData(filterdaa);
    }
  };

  const searchysellername = (e) => {
    let { value } = e.target;
    const filterdaa = inventor.filter((i) =>
      i.seller.toLowerCase().includes(value.toLowerCase())
    );

    if (value == "") {
      setData(inventor);
    } else if (filterdaa) {
      setData(filterdaa);
    }
  };


  const sortbyProduct = () => {
    const sortData = inventor
      .sort((a, b) => (a.product > b.product ? 1 : -1))
      .map((item, i) => item);
    setData(sortData);
  };

  const sortbyProduct1 = () => {
    const sortData = inventor
      .sort((a, b) => (a.product < b.product ? 1 : -1))
      .map((item, i) => item);
    setData(sortData);
  };

  const sortbySkucode1 = () => {
    const sortData = inventor
      .sort((a, b) => (a.skucode > b.skucode ? 1 : -1))
      .map((item, i) => item);
    setData(sortData);
  };

  const sortbySkucode = () => {
    const sortData = inventor
      .sort((a, b) => (a.skucode < b.skucode ? 1 : -1))
      .map((item, i) => item);
    setData(sortData);
  };

  const sortbySellerName = () => {
    const sortData = inventor
      .sort((a, b) => (a.seller < b.seller ? 1 : -1))
      .map((item, i) => item);
    setData(sortData);
  };
  const sortbySellerName1 = () => {
    const sortData = inventor
      .sort((a, b) => (a.seller > b.seller ? 1 : -1))
      .map((item, i) => item);
    setData(sortData);
  };

  const sortbyStock = () => {
    const sortData = inventor
      .sort((a, b) => (a.stock < b.stock ? 1 : -1))
      .map((item, i) => item);
    setData(sortData);
  };
  const sortbyStock1 = () => {
    const sortData = inventor
      .sort((a, b) => (a.stock > b.stock ? 1 : -1))
      .map((item, i) => item);
    setData(sortData);
  };

  const sortbyControls = () => {
    const sortData = inventor
      .sort((a, b) => (a.controls < b.controls ? 1 : -1))
      .map((item, i) => item);
    setData(sortData);
  };
  const sortbyControls1 = () => {
    const sortData = inventor
      .sort((a, b) => (a.controls > b.controls ? 1 : -1))
      .map((item, i) => item);
    setData(sortData);
  };

  return (
    <Dashboard  title="Inventory">
      <div className="iq-card">
        <div className="iq-card-body">
          <div className="row d-flex justify-content-between">
            <div className="col-7 fs-4 fw-bold">
              {" "}
              <h4>Inventory</h4>{" "}
            </div>
            <div className="col-2 fs-4 fw-bold text-end">
              <Link to="#" className="btn btn-primary ml-2">
                <i className="las la-plus"></i> Export
              </Link>
            </div>
            <div className="col-3 fs-4 fw-bold text-end">
              <Link to="/admin/add_inventory" className="btn btn-primary ml-2">
                <i className="las la-plus"></i> Edit Inventory
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* /////////////////////////////////// */}
      <div className="iq-card">
        <div className="iq-card-body">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="iq-search-bar w-100 mt-2 p-0">
                <form action="#">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-8 col-lg-12 col-xl-12 br-1 d-flex">
                      {/* //////////////// */}
                      <div className="searchbox w-100 ">
                        <input
                          type="text"
                          className="text search-input"
                          placeholder="Search for Product"
                          onChange={searchyproduct}
                        />
                        <a className="search-link" href="#">
                          <i className="ri-search-line"></i>
                        </a>
                      </div>
                      {/* //////////////////// */}
                     
                      {/* /////////////////////// */}

                      <div className="searchbox w-100 ml-3">
                        <input
                          type="text"
                          className="text search-input"
                          placeholder="Search for Seller Name"
                          onChange={searchysellername}
                        />
                        <a className="search-link" href="#">
                          <i className="ri-search-line"></i>
                        </a>
                      </div>
                      {/* /////////////////////// */}
                      <button
                        className="btn btn-info float-right ml-3"
                        onClick={() => {
                          window.location.reload();
                        }}
                      >
                        Refresh
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ///////////////////////////////////// */}

      <div>
        <div id="content-page" className="container-fluid">
          <div classNameName="row content-body">
            <div classNameName="col-lg-12">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-body">
                  <div className="mb-3">
                    Show &nbsp;
                    <select>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                      <option value="25">25</option>
                    </select>
                    &nbsp;entries
                  </div>
                  <div className="table-responsive">
                    <table className="table mb-0 table-borderless tbl-server-info">
                      <thead>
                        <tr>
                          <th
                            onClick={() => {
                              setSort((pre) => !pre);
                              {
                                sort ? sortbyProduct() : sortbyProduct1();
                              }
                            }}
                          >
                            Product
                            {sort ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                          </th>
                          <th
                            onClick={() => {
                              setSort1((pre) => !pre);
                              {
                                sort1 ? sortbySkucode() : sortbySkucode1();
                              }
                            }}
                          >
                            SKU-Code
                            {sort1 ? (
                              <ArrowUpwardIcon />
                            ) : (
                              <ArrowDownwardIcon />
                            )}
                          </th>
                          <th
                            onClick={() => {
                              setSort2((pre) => !pre);
                              {
                                sort2
                                  ? sortbySellerName()
                                  : sortbySellerName1();
                              }
                            }}
                          >
                            Seller-Name
                            {sort2 ? (
                              <ArrowUpwardIcon />
                            ) : (
                              <ArrowDownwardIcon />
                            )}
                          </th>
                          <th
                            onClick={() => {
                              setSort3((pre) => !pre);
                              {
                                sort3 ? sortbyStock() : sortbyStock1();
                              }
                            }}
                          >
                            Stocks
                            {sort3 ? (
                              <ArrowUpwardIcon />
                            ) : (
                              <ArrowDownwardIcon />
                            )}
                          </th>
                          <th
                            scope="col"
                            onClick={() => {
                              setSort4((pre) => !pre);
                              {
                                sort4 ? sortbyControls() : sortbyControls1();
                              }
                            }}
                          >
                            Controls
                            {sort4 ? (
                              <ArrowUpwardIcon />
                            ) : (
                              <ArrowDownwardIcon />
                            )}
                          </th>
                          <th> </th>
                        </tr>
                      </thead>

                      <tbody>
                        {data
                          .slice(pagination.start, pagination.end)
                          .map((li, id) => (
                            <tr key={id}>
                              <td>{li.product}</td>
                              <td>{li.skucode}</td>
                              <td>{li.seller}</td>
                              <td>{li.stock}</td>
                              <td>{li.controls}</td>
                              <td>
                                <Link to='#'>Edit</Link>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    {data && data.length == 0 && (
                      <div
                        style={{
                          width: "50%",
                          margin: "auto",
                          textAlign: "center",
                        }}
                      >
                        No Users Available
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <Pagination
                  showPerPage={showPerPage}
                  onPageChange={onPageChange}
                  total={data.length}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Inventory;
