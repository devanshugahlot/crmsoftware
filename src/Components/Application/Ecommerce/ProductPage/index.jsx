import BrandShipping from "./BrandShipping";
import ImageSlider from "./ImageSilder";
import ProductDetails from "./ProductDetails";
import { Button, Card, CardBody, Col, Container, Input, Row, Table } from "reactstrap";
import { Fragment, useRef, useState } from "react";
import React from "react";
import Tablet from "./Tabsets";
import { Breadcrumbs } from "../../../../AbstractElements";
import './webinar.css'
const webinardetails = [
  {
    image:"https://png.pngtree.com/png-clipart/20220130/original/pngtree-marketing-webinar-social-media-post-template-png-image_7230003.png",
  }
]


const webinarData = [
  {
    serialNumber: 1,
    createdByUserName: "User123",
    createdByAdmin: "AdminXYZ",
    webinarDate: "2024-02-01",
    webinarTopic: "JavaScript",
    startTime: "10:00 AM",
    duration: "1 hour",
    description: "programming language",
    link: "https://example.com",
    remark: "Great session",
  },
  // You can add more entries as needed
];




const ProductPageContain = () =>
{
  

  const tableRef = useRef(null);

const copyTable = () => {
  const table = document.getElementById("myTable");

  if (!table) {
    console.error("Table not found");
    return;
  }

  const range = document.createRange();
  range.selectNode(table);

  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  try {
    document.execCommand("copy");
    alert("Table copied to clipboard!"); // Show a simple notification
  } catch (err) {
    console.error("Unable to copy table to clipboard", err);
  } finally {
    window.getSelection().removeAllRanges();
  }
};



const handlePrint = () => {
  window.print();
};

const downloadTableAsCSV = () => {
  const table = document.getElementById("myTable");

  if (!table) {
    console.error("Table not found");
    return;
  }

  const rows = table.querySelectorAll("tr");
  const csvData = [];

  rows.forEach((row) => {
    const rowData = [];
    const cells = row.querySelectorAll("td, th");

    cells.forEach((cell) => {
      rowData.push(cell.innerText);
    });

    csvData.push(rowData.join(","));
  });

  const csvContent = csvData.join("\n");
  const blob = new Blob([csvContent], { type: "text/csv" });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "table_data.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
  const [ searchTerm, setSearchTerm ] = useState( "" ); 
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredwebinarData = webinarData.filter((list) => {
    // Step 3
    return (
      // list.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      list.createdByUserName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      list.createdByAdmin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      list.webinarDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      list.webinarTopic.toLowerCase().includes(searchTerm.toLowerCase())||
      list.startTime.toLowerCase().includes(searchTerm.toLowerCase())||
      list.duration.toLowerCase().includes(searchTerm.toLowerCase())||
      list.description.toLowerCase().includes(searchTerm.toLowerCase())||
      list.link.toLowerCase().includes(searchTerm.toLowerCase())||
      list.remark.toLowerCase().includes(searchTerm.toLowerCase())
      // item.EditDelete.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } );
  
  return (
    <Fragment>
      <Breadcrumbs
        parent="Webinar"
        title="Webinar"
        mainTitle="Webinar"
      />
      <Container fluid={ true }>
     
      <div  className="webinardetails">
   
        <h5 style={{textAlign:"center"}}>Webinar Details</h5>
          { webinardetails.map( (item, index) =>
          {
            return (
              <div className="webinarimage" >
                <img src={ item.image } alt="" />
                </div>
         )
          } ) }
        <h2 style={{marginTop:"20px"}}>webinar Details</h2>
          
        <div style={{display:"flex"}} className="tableworkbutton">
            <div
            //   style={ {
            //     display: "flex",
            //     position: "relative",
            //     left: "66%",
            //     top: "0",
            //     gap: "5px"
            // } }
            >

            <Input className="searchdaily"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
                  style={ {
                  height:"35px",
            width:"380px"
            // marginTop:"15px"
            // position: "absolute"
            
          }}
        />
            </div>
              <div className="tableworkbuttondaily">
                

              <Button
                 color="primary"
                // style={{
                //   border: "1px solid #DEE2E6",
                //   width: "70px",
                //   height: "30px",
                // }}
                onClick={copyTable}
              >
                Copy
              </Button>
              <Button
                 color="primary"
                // style={{
                //   border: "1px solid #DEE2E6",
                //   width: "70px",
                //   height: "30px",
                // }}
                onClick={downloadTableAsCSV}
              >
                CSV
              </Button>
              <Button
                 color="primary"
                // style={{
                //   border: "1px solid #DEE2E6",
                //   width: "70px",
                //   height: "30px",
                // }}
                onClick={downloadTableAsCSV}
              >
                Excel
              </Button>
              <Button
              color="primary"
                onClick={handlePrint}
              >
                Print
              </Button>
             
              </div>
            </div>
          <div style={{ overflowX: "auto" }}>
        <Table className="webinartable"   id="myTable">
          <thead>
            <tr style={{ borderBottom: "1px solid #272727" }}>
              <th>S. No.</th>
              {/* <th> created by user name</th> */}
              <th>created by admin</th>
              <th> Webinar date</th>
              <th>Webinar topic</th>
              <th>Start  Time</th>
              <th> Duration</th>
              <th>Discription</th>
              <th>link</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            {filteredwebinarData.map((list, index) => (
              <tr  style={{ borderBottom: "1px solid #272727" }}>
                <td>{list.serialNumber}</td>
                {/* <td>{list.createdByUserName}</td> */}
                <td>{list.createdByAdmin}</td>
                <td>{list.webinarDate}</td>
                <td>{list.webinarTopic}</td>
                <td>{list.startTime}</td>
                <td>{list.duration}</td>
                <td>{list.description}</td>
                <td>{list.link}</td>
                <td>{list.remark}</td>
              </tr>
            ))}
          </tbody>
        </Table>
            </div>




      </div>
   
      </Container>
    </Fragment>
  );
};
export default ProductPageContain;