import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

const Contact = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    const fetchOfficersData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5800/contact/officers"
        );
        setContactData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfficersData();
  }, []);
  return (
    <Container className="content-box">
      <h4>CONTACT INFORMATION</h4>
      <div className="tablebox">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rank</th>
              <th>Badge Number</th>
              <th>Phone Nuo.</th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((officer) => (
              <tr key={officer._id}>
                <td>{officer.name}</td>
                <td>{officer.rank}</td>
                <td>{officer.badgenumber}</td>
                <td>{officer.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Contact;
