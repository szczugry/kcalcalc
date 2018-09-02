import React from "react"
import Main from "../routes/Main.js"



class Table extends React.Component {
    render () {
        console.log(this.props);

        return <table>
            <tbody>
            <tr>
                <th scope = 'col'>Item</th>
                <th scope = 'col'>Wage</th>
                <th scope = 'col'>kcal</th>
            </tr>
            {this.props.items.map(item => {
                return <tr>
                    <td>{item.name}</td>
                    <td>{item.wage}</td>
                    <td>{item.kcal}</td>
                </tr>
            })}
            <tr>
                <th scope = 'row'>Sum</th>
                <td>{this.props.items.reduce(
                    (accumulator, item, currentIndex, array) => {
                        return accumulator + parseInt(item.wage);
                    },0)}
                    </td>
                <td>{this.props.items.reduce(
                    (accumulator, item, currentIndex, array) => {
                        return accumulator + parseInt(item.kcal);
                    },0)}
                    </td>
            </tr>
            </tbody>
        </table>
    }
}
export default Table