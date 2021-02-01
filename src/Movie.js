import React from 'react'

export default function Movie({name, price, is}) {
    return (
        <div>
            <table border = '1'>
                <tr>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>{is}</td>
                </tr>
            </table>
        </div>
    )
}
