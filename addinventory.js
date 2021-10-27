import Dashboard from "../../../layouts/Dashboard";
import { Formik, Field } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Add_New_Inventory } from "../../../services/Redux/Action/Admin_actions";
import { useHistory } from "react-router-dom";
import * as Yup from 'yup';

const AddInventory = () => {

  //const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    product: "",
    skucode: "",
    sellername: "",
    stock: "",
    control: "",
  };

  const [state, setState] = useState(false);

  const onClickGoTo = (link) => {
    history.push(link);
  };
  let numregexp=/^\d+/
  const validationSchema = Yup.object({

    product:Yup.string()
   
    .required('Required'),

    skucode:Yup.string()
    
    .required('Required  Number '),

    sellername:Yup.string()
    .required('Required'),

    stock:Yup.string()
    .required('Required  Number'),

    control:Yup.string()
    .required('Required  Number'),

   

    
  })


  const handleClick = (values, { resetForm }) => {
    console.log("values", values);
    // dispatch(Add_NEW_INVENTORY(values));
    const local = JSON.parse(localStorage.getItem("inventory"));
    if (local) {
      local.push(values);
      localStorage.setItem("inventory", JSON.stringify(local));
    } else {
      const arr = [];
      arr.push(values);
      localStorage.setItem("inventory", JSON.stringify(arr));
    }
    resetForm();
  };

  return (
    <Dashboard title="Add NEW Inventory">
      <div className="iq-card">
        <div className="iq-card-body">
          <div className="pt-3">
            <button
              className="btn btn-info"
              style={{ float: "right", position: "relative", top: "-25px" }}
              onClick={() => {
                onClickGoTo("/admin/inventory");
              }}
            >
              Inventory
            </button>
          </div>
          <hr />
          <div className="iq-card w-75  m-auto">
            <div className="iq-card-body">
              <Formik initialValues={initialValues}
               validationSchema={validationSchema}
                onSubmit={handleClick}>
                {({
                  handleSubmit,
                  values,
                  errors,
                  touched,
                  handleChange,
                  setFieldValue,
                  handleBlur,
                  isValid,
                }) => (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                  >
                    {console.log(values)}
                    <div className="form group">
                      <label>Product</label>
                      <Field
                        //   as="select"
                        name="product"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Product Name"
                        className="form-control w-50 float-right"
                      />
                      
                      <div className="text-end" style={{
                          float:'right'
                      }}>
                      {touched.product && errors.product ? 
                     (<div style={{ color: 'red' }}>{errors.product}</div>) : null}

                      </div>
                      
                       
                      <br />
                      <br />
                      <label>SKU-Code</label>
                      <Field
                        type="number"
                        name="skucode"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Sku-code"
                        className="form-control w-50 float-right"
                      />
                        <div className="text-end" style={{
                          float:'right'
                      }}>
                      {touched.skucode && errors.skucode ? 
                     (<div style={{ color: 'red' }}>{errors.skucode}</div>) : null}

                      </div>

                      <br />
                      <br />
                      <label>Seller Name</label>
                      <Field
                        placeholder="Seller Name"
                        name="sellername"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control w-50 float-right"
                      />
                      <div className="text-end" style={{
                          float:'right'
                      }}>
                      {touched.sellername && errors.sellername ? 
                     (<div style={{ color: 'red' }}>{errors.sellername}</div>) : null}

                      </div>
                      
                      <br />
                      <br />
                      <label>Stock</label>
                      <Field
                        placeholder="Stock"
                        name="stock"
                        type="number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control w-50 float-right"
                      />
                      <div className="text-end" style={{
                          float:'right'
                      }}>
                      {touched.stock && errors.stock ? 
                     (<div style={{ color: 'red' }}>{errors.stock}</div>) : null}

                      </div>
                      <br />
                      <br />
                      <label>Control</label>
                      <Field
                        placeholder="Control"
                        type="number"
                        className="form-control w-50 float-right"
                        name="control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                        <div className="text-end" style={{
                          float:'right'
                      }}>
                      {touched.control && errors.control ? 
                     (<div style={{ color: 'red' }}>{errors.control}</div>) : null}

                      </div>
                      <br />
                      <br />
                      <button type="submit" className="btn-primary btn "  disabled={!isValid} >
                        Save Details
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default AddInventory;
