import React, { useState } from "react";

function App() {

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };


  const generateTableRows = () => {
    const rows = [];

    // Create 10 rows
    for (let i = 1; i <= 10; i++) {
      rows.push(

        <tr key={i}>
                                <td>1</td>
                                <td>Shwetank</td>
                                <td>1</td>
                                <td>24</td>
                                <td>13</td>
                                <td>35</td>
                                <td>46</td>
                                <td>7</td>
        </tr>
      );
    }

    return rows;
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Generate Table</button>
      {buttonClicked && (
        <table>
                            <tr >
                                <th>S.No.</th>
                                <th>Product Name</th>
                                <th>Unit Pack</th>
                                <th>Quantity</th>
                                <th>Free</th>
                                <th>Trade Rate</th>
                                <th>Disc%</th>
                                <th>Amt</th>
        
                            </tr>
          <tbody>{generateTableRows()}</tbody>
        </table>
      )}
    </div>
  );
}

export default App;