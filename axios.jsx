import moment from "moment";
import React, { useEffect, useState } from "react";
import Dashboard from "../../../../layouts/Dashboard";
import Mock_Data from "./Mock_Data.json";
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from "../../../../services/Redux/Action/Seller_action";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { fileType, fileExtension } from "../../../../services/Redux/Store/Constants";
import api from "../../../../services/api";
import useUrlState from "@ahooksjs/use-url-state";
import { Pagination } from "@material-ui/lab";


const Approved_Products = () => {
  const [datae, setDatae] = useState([]);

  const dispatch = useDispatch()
  const filterProductStatus = useSelector(state => state.seller)
  const [statuss, setStatus] = useState();
  const [totalPages, setTotalPages] = useState();
  const [queryParms, setQueryParms] = useUrlState({
    query: "",
    limit: 10,
    page: 1,
  });
  // useEffect(() => {
  //   const declinedata = Mock_Data.products.filter((li) => {
  //     return li.status_name === "Return/Refund Approved";
  //   });
  //   setData(declinedata);
  // }, []);

  // console.log("Approved", data);
  useEffect(() => {
    setStatus(filterProductStatus.getProducts.data)
    setDatae(filterProductStatus.getProducts.data)
  }, [filterProductStatus.getProducts.data])

  

  useEffect(() => {
    dispatch(getProducts(queryParms))
  }, []);
 console.log(filterProductStatus)

  useEffect(() => {
     setTotalPages(
      Math.ceil(
        datae &&
        datae.length / parseInt(queryParms.limit)
      )
    );
  }, [datae]);
  useEffect(() => {
    
    dispatch(getProducts(queryParms));
    setTotalPages(
      Math.ceil(
        datae &&
        datae.length / parseInt(queryParms.limit)
      )
    );
  }, [queryParms]);


  const exportToExcel = () => {
    let xls = datae && datae.map((row) => {
      console.log("Row", row)
      return {
        // "product_SKU_images": Row.product_SKU_images ? Row.product_SKU_images : "",
        // "seller_name": Row.seller_name ? Row.seller_name : "",
        "seller_name": row.seller_name,
        "product_SKU_images": row.product_SKU_images,
        "created_at": moment(row.created_at).format("MMM D yyyy h:mmA"),
        "status": row.status


      }
    })
    const ws = XLSX.utils.json_to_sheet(xls);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, "deline product" + fileExtension);
  }
  return (
    <Dashboard title='Approved Products'>
      <div id="content-page" className="container-fluid">
        <div classNameName="row content-body">
          <div classNameName="col-lg-12">
            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
              <div className="iq-card-header  w-100 mt-0">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="iq-search-bar w-100 mt-2 p-0">
                      <form action="#">
                        <div className="row">
                          <h3>Approved Products</h3>
                          <button className="btn btn-primary" onClick={exportToExcel}>Export</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="iq-card-body">
                <div className="table-responsive">
                  <table className="table mb-0 table-borderless tbl-server-info">
                    <thead>
                      <tr>
                        <th scope="col">SKU</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Price</th>
                        <th scope="col">Shipped at</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>

                    <tbody>
                    {datae?(
                      datae && datae.map((i, index) => {
                        return (
                          <tr>
                            <td><img width={60} src={i.product_SKU_images[0]} /></td>
                            <td>{i.seller_name}</td>
                            <td>{moment(i.created_at).format("MMM D yyyy h:mmA")}</td>
                            <td></td>
                            <td>{i.product_stocks}</td>
                            <td><span style={{ background: "#28CF6F", color: "#FFF", padding: "1px 6px" }}>{i.status}</span></td>
                          </tr>
                        )
                      })
                    ):(
                      <span>No record FDound</span>
                    )

                    }



                      {/*
                      {data.length > 0 ? (
                        data.map((li, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{li.fullname}</td>
                            <td>
                              {moment(li.created_at).format("MMM D yyyy h:mmA")}
                            </td>
                            <td>{
                              li.shipping_id}</td>
                            <td>
                              <div className="text-danger">
                                {li.status_name}
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                          <div className="justify-content-center">
                            <h5>No Approved data</h5>
                          </div>
                      )} */}
                      {/* {datae && datae.map((i, index) => {
                        return (
                          <tr>
                            <td><img width={60} src={i.product_SKU_images[0]} /></td>
                            <td>{i.seller_name}</td>
                            <td>{moment(i.created_at).format("MMM D yyyy h:mmA")}</td>
                            <td></td>
                            <td>{i.product_stocks}</td>
                            <td><span style={{ background: "#28CF6F", color: "#FFF", padding: "1px 6px" }}>{i.status}</span></td>
                          </tr>
                        )
                      })} */}
                    </tbody>
                  </table>
                  <Pagination
                    onChange={(e, value) => {
                      setQueryParms({ ...queryParms, ["page"]: value });
                    }}
                    count={totalPages}
                    color="primary"
                    shape="rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Approved_Products;

