import React from 'react'

export const Transactions = () => {
    return (
        <div>
            <ul className="list">
                <li className="plus">
                    Income
                    <span>+ Rs1000</span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="minus">
                    Groceries
                    <span>- Rs500</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    )
}
