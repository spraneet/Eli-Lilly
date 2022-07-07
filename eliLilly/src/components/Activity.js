import React from "react";

function Activity(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Activity</th>
        </tr>
      </thead>
      <tbody>
        
          {props.newdata.map((item, i) => (
            <tr key={i}>
              <td>{item.type}</td>
              </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Activity;
