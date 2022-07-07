import React from "react";

function Repos(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Respository</th>
          </tr>
        </thead>
        <tbody>
            {props.data.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Repos;
