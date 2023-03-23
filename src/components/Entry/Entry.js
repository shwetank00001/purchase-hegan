import React, { useState, useEffect } from "react";
import Select from 'react-select';
import "./Entry.css";
const Entry = () => {
   
   //getting all firm details from the data base 
   const [firmData, setFirmData] = useState([]);
     // console.log(firmData, "data is here ")
        

  const [firm, setFirm] = React.useState("");
   console.log(firm,"setting from select")

  const [region, setRegion] = React.useState("");
  const [type, setType] = React.useState("");
  const [date, setDate] = React.useState("");
  const [invoice, setInvoice] = React.useState("");

  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [gst, setGst] = React.useState("");
  const [DL1, setDL1] = React.useState("");
  const [DL2, setDL2] = React.useState("");
  const [fssai, setFssai] = React.useState("");

  //purchase product entry
  const [unitPack,setUnitPack] = useState("");
  const [Quantity,setQuantity] = useState("");
  const [free ,setFree] =useState("");
  const [tradeRate,setTradeRate] =useState("");
  const [discount,setDiscount] =useState("");
  const [amount,setAmount] =useState(""); 

  const [batch, setBatch] = React.useState("");
  const [Expiry, setExpiry] = React.useState("");
  const [mrp, setMrp] = React.useState("");
  const [HSN, setHSN] = React.useState("");
  const [netRate, setNetRate] = React.useState("");
  const [CGST, setCGST] = React.useState("");


    //alll product data for displaying product in the input field
  const [productData,setProductData] =useState([]);
    
  const [product,setProductName]=useState("");
  const [category,setCategory]  =useState("");
  const [brand , setBrand] =useState("");
  const [description,setDescription]=useState("");
  const [unitpacking,setUnitPacking] =useState("");
  const [hsn_sac_code,setHsn_sac_Code] =useState(""); 
          
     
  
  useEffect(() => {
    getFirmData();
    getProductData();
},[]);
       // getting all firm details from data base
   const getFirmData = async () => {
     let result = await fetch("http://localhost:5000/api/user/getAllFirmDetails", {
      
       headers: {
        'Content-Type': 'application/json'
       },
     });
     result = await result.json();
     setFirmData(result.data);
   };

      // getting all the product details from the data base 
      const getProductData = async () => {
        let result = await fetch("http://localhost:5000/api/user/getAll", {
          headers: {
           'Content-Type': 'application/json'
          },
        });
        result = await result.json();
        setProductData(result.data);
        console.log(result)
      };

   function handleChange(e) {
    const enteredName = e.target.value;
    console.log(firmData)
    setFirm(enteredName);

        for(let i=0; i<firmData.length; i++){
            if(firmData[i].firmName === e.target.value){
            setAddress(firmData[i].fullAdd);
            setEmail(firmData[i].email);
            setMobile(firmData[i].mobileNo);
            setGst(firmData[i].email);
            setDL1(firmData[i].dl1);
            setDL2(firmData[i].dl2);
            setFssai(firmData[i].fssai);
            console.log("all")
            }
        }
  }




  // ------------------------------- this is printing 10 data```````````````````````````

  const [button, setButton] = React.useState(false);

  const generateTableRows = () => {
    const rows = [];
    for (let i = 1; i <= 20; i++) {
      rows.push(
        <tr key={i}>
          <td>Date</td>
          <td>Shwetank</td>
          <td>1</td>
        </tr>
      );
    }
    return rows;
  };




  function handleSubmit(e) {
    e.preventDefault();
    console.log(firm, region, type, date, invoice);
    if (firm === "SHWETANK") {
      setRegion("INDIA");
    
      setInvoice("AUTO INVOICE GENERATED");
      setBatch("Updated");
      setExpiry("Over");
      setMrp(100);
      setHSN(193414);
      setNetRate(`${HSN * mrp}`);
      setCGST(9213);

      setButton(function (item) {
        return !item;
      });

      console.log("updated");
    }
  }



  // --------------------------------------------------- showing data in comments ---------------------

  const [generatedData, setGeneratedData] = React.useState("");

  // setting for output of product list 
  function generateData(event) {
   // console.log("genereted data funciton is running",event.target.value)
    const newData = event.target.value;
    setGeneratedData(newData);
     for(let i = 0; i<productData.length; i++){
          //console.log("changing", typeof productData, productData[0].productName, event.target.value)
            if(productData[i].productName === event.target.value){
              setProductName(productData[i].productName);
              setCategory(productData[i].category);
              setBrand(productData[i].brand);
              setDescription(productData[i].description);
              setUnitPacking(productData[i].unitPacking);
              setHsn_sac_Code(productData[i].hsn_sac_code);
              

            }
      }  
          
  }


 // Firm table component
  // function FirmTable() {
  //   function showData() {
  //     // props.generateData();
  //   }

  //   return (
  //     <div onClick={showData} className="product">
  //       <div className="quantity-box-top">
  //         <table id="customers">
  //           <tr>
  //             <th>S.No.</th>
  //             <th>Product Name</th>
  //             <th>Unit Pack</th>
  //             <th>Quantity</th>
  //             <th>Free</th>
  //             <th>Trade Rate</th>
  //             <th>Disc%</th>
  //             <th>Amt</th>
  //           </tr>

  //           <tr onClick={showData}>
  //             <td>
  //               <input type="text" value={"1"} />
  //             </td>
  //             <td>
  //               <select htmlFor="firmName" onChange={generateData}>
  //                 Product Name
  //                 <br />
  //                 {productData.map((item, index) => (
  //                   <option
  //                     placeholder="First Name"
  //                     onChange={(e) => setGeneratedData(e.target.value)}
  //                   >
  //                     {item.productName}
  //                   </option>
  //                 ))}
  //               </select>
                
  //             </td>
  //             <td>
  //               <input
  //                 type="text"
  //                 value={unitPack}
  //                 onChange={(e) => setUnitPack(e.target.value)}
  //               />
  //             </td>
  //             <td>
  //               <input
  //                 type="text"
  //                 value={Quantity}
  //                 onChange={(e) => setQuantity(e.target.value)}
  //               />
  //             </td>
  //             <td>
  //               <input
  //                 type="text"
  //                 value={free}
  //                 onChange={(e) => setFree(e.target.value)}
  //               />
  //             </td>
  //             <td>
  //               <input
  //                 type="text"
  //                 value={tradeRate}
  //                 onChange={(e) => setTradeRate(e.target.value)}
  //               />
  //             </td>
  //             <td>
  //               <input
  //                 type="text"
  //                 value={discount}
  //                 onChange={(e) => setDiscount(e.target.value)}
  //               />
  //             </td>
  //             <td>
  //               <input
  //                 type="text"
  //                 value={amount}
  //                 onChange={(e) => setAmount(e.target.value)}
  //               />
  //             </td>
  //           </tr>
  //         </table>
  //       </div>
  //     </div>
  //   );
  // }
  // COMMENTS TABLE
  function CommentsTable(props) {
    return (
      <div className="total-empty">

        <p>{props.generatedData.product}</p>
        <p> {props.generatedData.brand}</p>
        <p>{props.generatedData.cat}</p>
        <p>{props.generatedData.unit}</p>
        <p>{props.generatedData.hac}</p>

          <div className="total-empty-buttons">
          <button>Save</button>
          <button>Print</button>
          <button>View</button>
        </div> 
      </div>
    );
  }

  return (
    <div className="main-div">
      <div className="div-header">
        <h3>PURCHASE ENTRY</h3>
      </div>

      <div className="first-half">
        <div className="top-two">
          <form onSubmit={handleSubmit} className="input-box">
            <div className="input-box-name">
        
              <select htmlFor="firmName"    onChange={handleChange}>Firm Name
                  
              <br />
              {
                firmData.map((item,index) => (
               <option
                type= "button"
                placeholder="First Name"
                //  onChange={handleChange}
                  onChange={ (e) => setFirm(e.target.value)}
                 >
              {item.firmName}
            
              </option>
                ))
              }
              </select>

    
         
    
             
            </div>

            <div className="input-box-region">
              <label htmlFor="region">Region</label>
              <br />
              <input
                id="region"
                placeholder="Region.."
                type="name"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              />
            </div>

            <div className="input-box-type">
              <label htmlFor="type">Type</label>
              <br />
              <input
                id="type"
                type="name"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>

            <div className="input-box-date">
              <label htmlFor="date">Date</label>
              <br />
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="input-box-invoice">
              <label htmlFor="invoiceNo">Invoice No.</label>
              <br />
              <input
                id="invoiceNo"
                type="name"
                name="invoice"
                value={invoice}
                onChange={(e) => setInvoice(e.target.value)}
              />
            </div>
            <button></button>
          </form>

          <div className="quantity-box">
          <div className="product">
        <div className="quantity-box-top">
          <table id="customers">
            <tr>
              <th>S.No.</th>
              <th>Product Name</th>
              <th>Unit Pack</th>
              <th>Quantity</th>
              <th>Free</th>
              <th>Trade Rate</th>
              <th>Disc%</th>
              <th>Amt</th>
            </tr>

            <tr>
              <td>
                <input type="text" value={"1"} />
              </td>
              <td>
                <select htmlFor="firmName" onChange={generateData}>
                  Product Name
                  <br />
                  {productData.map((item, index) => (
                    <option
                      placeholder="First Name"
                      onChange={(e) => setGeneratedData(e.target.value)}
                    >
                      {item.productName}
                    </option>
                  ))}
                </select>
                
              </td>
              <td>
                <input
                  type="text"
                  value={unitPack}
                  onChange={(e) => setUnitPack(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={Quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={free}
                  onChange={(e) => setFree(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={tradeRate}
                  onChange={(e) => setTradeRate(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
            <div className="quantity-box-bottom">
              <div className="qty-comments">
                <div className="box">
                  <div>
                    <label htmlFor="batch">Batch No.</label>
                    <br />
                   
                    <input
                      id="batch"
                      value={batch}
                      type="text"
                      onChange={(e) => setBatch(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="Expiry">Expiry</label>
                    <br />
                    <input
                      id="Expiry"
                      value={Expiry}
                      type="text"
                      onChange={(e) => setExpiry(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="mrp">MRP</label>
                    <br />
                    
                    <input
                      id="mrp"
                      value={mrp}
                      type="text"
                      onChange={(e) => setMrp(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="hsn">HSN/SAC</label>
                    <br />
                    <input
                      id="hsn"
                    
                      value={HSN}
                      type="text"
                      onChange={(e) => setHSN(e.target.value)}
                    />
                   
                  </div>
                  <div>
                    <label htmlFor="Net Rate">Net Rate</label>
                    <br />
                    <input
                      id="Net Rate"
                      value={netRate}
                      type="text"
                      onChange={(e) => setNetRate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="CGST">CGST</label>
                    <br />
                    <input
                      id="CGST"
                      value={CGST}
                      type="text"
                      onChange={(e) => setCGST(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="qty-details">
                {button && (
                  <table id="customers">
                    <tr>
                      <th>Date </th>
                      <th>Invoice No.</th>
                      <th>Unit Pack</th>
                    </tr>
                    <tbody>{generateTableRows()}</tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="contact-box">
          <div className="contact-box-input">
            <label htmlFor="add">Address</label>
            <br />
            <input
              id="add"
              type="text"
              value={address}
            //   onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <br />

            <label htmlFor="email">Email</label>
            <br />
            <input
              id="email"
              value={email}
            //   onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />

            <label htmlFor="mobile">Mobile No.</label>
            <br />
            <input
              id="mobile"
              value={mobile}
            //   onChange={(e) => setMobile(e.target.value)}
            />
            <br />
            <br />

            <label htmlFor="gst">GSTIN</label>
            <br />
            <input
              id="gst"
              value={gst}
            //   onChange={(e) => setGst(e.target.value)}
            />
            <br />
            <br />

            <label htmlFor="DL1">D.L.1</label>
            <br />
            <input
              id="DL2"
              value={DL1}
            //   onChange={(e) => setDL1(e.target.value)}
            />
            <br />
            <br />

            <label htmlFor="DL2">D.L.2</label>
            <br />
            <input
              id="DL2"
              value={DL2}
            //   onChange={(e) => setDL2(e.target.value)}
            />
            <br />
            <br />

            <label htmlFor="fssai">FSSAI No.</label>
            <br />
            <input
              id="fssai"
              value={fssai}
            //   onChange={(e) => setFssai(e.target.value)}
            />
            <br />
            <br />
          </div>
        </div>
      </div>

      <div className="bottom-half">
        <div className="total-box">
          <CommentsTable generatedData={{ product : generatedData , cat : category, brand : brand, unit : unitpacking, hac :hsn_sac_code }}/>
          <div className="total-values">           
            <div className="total-values-button">
              <button>Sub. Total</button>
              <button>Disc. Amount</button>
              <button>Total Tax</button>
              <button>Goods Return(R)</button>
              <button>CN. Voucher </button>
              <button>Grand Total</button>
            </div>
          </div>
        </div>
        <div className="blank-box"></div>
      </div>
    </div>
  );
};

export default Entry;
