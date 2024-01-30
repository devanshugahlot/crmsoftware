import React, { Fragment, useState } from "react";
import { Breadcrumbs } from "../../../../AbstractElements";
import { Button, Container, Input, Table } from "reactstrap";
import AddNewLead from "./AddNewLead";
import "./Lead.css";
import { FaSort } from "react-icons/fa";
import TransferLead from "./TransferLead";
const PricingMembershipContain = () => {
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [isAnyCheckboxChecked, setIsAnyCheckboxChecked] = useState(false);
  const leadsdata = [
    {
      User: "1",
      Leads: "2",
      Source: "facebook",
      FollowUp: "yes",
      Products: "crm",
      Sellproduct: "crm",
      SellDate: "10/12/2024",
      TakenFromOther: "no",
      Description: "hello",
      Address: "jaipur",
      LeadCreator: "me",
      CreatedAt: "metablock",
    },
    {
      User: "2",
      Leads: "3",
      Source: "linkdin",
      FollowUp: "yes",
      Products: "e-commers",
      Sellproduct: "e-commers",
      SellDate: "10/12/2024",
      TakenFromOther: "no",
      Description: "hello",
      Address: "jaipur",
      LeadCreator: "me",
      CreatedAt: "metablock",
    },
  ];

  const [searchTerm, setSearchTerm] = useState(""); // Step 1

  // ... (unchanged)

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredleadsdata = leadsdata.filter((item) => {
    // Step 3
    return (
      item.User.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Leads.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Source.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.FollowUp.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Products.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Sellproduct.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.SellDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.TakenFromOther.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.LeadCreator.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.CreatedAt.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const [selectedRows, setSelectedRows] = useState(
    new Array(filteredleadsdata.length).fill(false)
  );

  const handleCheckboxChange = (e, index) => {
    const updatedSelectedRows = [...selectedRows];
    updatedSelectedRows[index] = e.target.checked;
    setSelectedRows(updatedSelectedRows);
  };

  const handleSelectAll = (e) => {
    const updatedSelectedRows = selectedRows.map(() => e.target.checked);
    setSelectedRows(updatedSelectedRows);
    const anyCheckboxChecked = updatedSelectedRows.some((checked) => checked);
    setIsAnyCheckboxChecked(anyCheckboxChecked);
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Leads" parent="Leads" title="Leads" />
      <Container fluid={true}>
        {/* Start of your existing code */}
        <div className="w-full px-0 md:px-6 py-2">
          <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="sm:flex items-center justify-between">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Leads
              </h3>
              <div>
                <div className="flex items-start mt-4 sm:mt-0 sm:ml-4">
                  <div className="addleadsbutton">
                    {/* <Button color='primary'>Transfear Leads</Button> */}
                    <select
                      style={{
                        background: "#7366FF",
                        border: "none",
                        borderRadius: "5px",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      <option>All leads</option>
                      <option>Transfear leads</option>
                    </select>
                    <Button
                      style={{ width: "100px" }}
                      className="py-2 px-2 flex items-center justify-center text-xs focus:outline-none"
                      onClick={() => setOpen(true)}
                    >
                      Add
                    </Button>
                    {/* <button className="py-2 px-2 flex items-center justify-center text-xs focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100">+</button>
                    <button className="py-2 px-2 flex items-center justify-center text-xs focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100">-</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-0 md:px-6 pb-2">
            <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
              <div
                style={{
                  rowGap: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className="flex justify-center md:justify-between items-center flex-wrap mb-4"
              >
                <div className="leadinputdate">
                  <Input
                    type="date"
                    // value={fromDate}
                    // onChange={(e) => setFromDate(e.target.value)}
                    placeholder="From Date"
                    className="leadinputstwo mr-2 px-4 py-2 border border-gray-300 rounded-md text-[#bdbdbd] focus:outline-none focus:ring-[#452a72] focus:border-[#452a72]"
                  />
                  <Input
                    type="date"
                    // value={toDate}
                    // onChange={(e) => setToDate(e.target.value)}
                    placeholder="To Date"
                    className="leadinputstwo px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-[#bdbdbd] focus:ring-[#452a72] focus:border-[#452a72]"
                  />
                  {isAnyCheckboxChecked && (
                    <div>
                      <TransferLead />
                    </div>
                  )}
                </div>
                <div style={{ display: "flex", gap: "20px" }} className="">
                  <Input
                    onChange={handleSearchChange}
                    style={{ width: "auto" }}
                    type="text"
                    // value={searchQuery}
                    // onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Leads..."
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#452a72] focus:border-[#452a72]"
                  />

                  <Button color="primary" className="leadssearchbtn">
                    Search
                    {/* Button content */}
                  </Button>
                </div>
              </div>

              <div className="dailytasktable" style={{ overflowX: "auto" }}>
                <Table className="myTable-1" id="myTable">
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox" onChange={handleSelectAll} />
                      </th>
                      <th>
                        User
                        {/* <FaSort style={{color:"#BABABA"}} /> */}
                      </th>
                      <th>
                        Leads
                        {/* <FaSort style={{color:"#BABABA"}} /> */}
                      </th>
                      <th>
                        Source
                        {/* <FaSort style={{color:"#BABABA"}} /> */}
                      </th>
                      <th>
                        FollowUp
                        {/* <FaSort style={{color:"#BABABA"}} /> */}
                      </th>
                      <th>
                        Products
                        {/* <FaSort style={{color:"#BABABA"}} /> */}
                      </th>
                      <th>
                        Sell product
                        {/* <FaSort style={{color:"#BABABA"}} /> */}
                      </th>
                      <th>
                        Sell Date
                        {/* <FaSort style={{color:"#BABABA"}} /> */}
                      </th>
                      <th>
                        Taken From Other
                        {/* <FaSort style={{color:"#BABABA"}} /> */}
                      </th>
                      <th>
                        1st Description
                        {/* <FaSort style={{color:"#BABABA"}} /> */}
                      </th>
                      <th>
                        Address
                        {/* <FaSort style={{color:"#BABABA"}} /> */}
                      </th>
                      <th>
                        Lead Creator
                        {/* <FaSort style={{color:"#BABABA"}} /> */}
                      </th>
                      <th>
                        Created At
                        {/* <FaSort style={{color:"#BABABA"}} /> */}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredleadsdata.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <input type="checkbox" onChange={handleSelectAll} />
                        </td>
                        <td>{item.User}</td>
                        <td>{item.Leads}</td>
                        <td>{item.Source}</td>
                        <td>{item.FollowUp}</td>
                        <td>{item.Products}</td>
                        <td>{item.Sellproduct}</td>
                        <td>{item.SellDate}</td>
                        <td>{item.TakenFromOther}</td>
                        <td>{item.Description}</td>
                        <td>{item.Address}</td>
                        <td>{item.LeadCreator}</td>
                        <td>{item.CreatedAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <div className="flex justify-center mt-5">
                <div style={{ display: "flex", gap: "10px" }} className="">
                  <p className="text-[#452a72]">Total Pages -</p>

                  <Button className="">Previous</Button>

                  {/* <button style={{border:"1px solid #DEE2E6",width:"100px", borderRadius:"5px"}}>   */}
                  {/* Button content */}
                  {/* </button> */}

                  <Button color="primary" className="">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of your existing code */}
      </Container>
      <AddNewLead open={open} setOpen={setOpen} />
    </Fragment>
  );
};

export default PricingMembershipContain;
