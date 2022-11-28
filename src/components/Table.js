import React from "react";

function Table({data}) {
    return <div>
    <table style={{margin: "auto", border: "3px solid"}}>
        <thead>
          <tr>
            <th>id</th>
            <th>lastname</th>
            <th>firstname</th>
            <th>age</th>
            <th>city</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row =>
          <tr>
            {Object.values(row).map(value => <td style={{border: "1px solid"}}>{value}</td>)}
          </tr>)}
        </tbody>
    </table>
</div>
}

export default Table;