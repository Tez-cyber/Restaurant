import React from 'react'

const Table = () => {

    return(
        <>
            <table>
                <tbody>
                    <tr>
                        <td className="td">Total Orders</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td className="td">Total Sales</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td className="td">Pending Orders</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td className="td">Delivered Orders</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td className="td">Total Orders</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default Table