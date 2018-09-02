import React from 'react'
import logo from '../logo.svg';
import firebase from 'firebase';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import Table from '../components/Table'


class Main extends React.Component {
    state = {
        calckcal: [],
        products: [],
        modal: false,
        form: {
            name: '',
            wage: 0,
            kcal: 0
        }
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    componentDidMount() {
        const rootRef = firebase.database().ref();
        const productsRef = rootRef.child("products");

        productsRef.on("value", snapshot => {
            const val = snapshot.val();
            const keys = Object.keys(val);
            const values = Object.values(val);

            const products = values.map((val, index) => {
                return {
                    ...val,
                    id: keys[index]
                }
            });

            this.setState({
                products
            })
        })
    }

    writeProductsData = () => {
        const {name, kcal, wage} = this.state.form;
        firebase.database().ref('products').push().set({
            name: name,
            wage: wage,
            kcal: kcal
        });
    };

    deleteProduct = productId => {
        firebase.database().ref('products/' + productId).set(null)
    };

    render() {
        return (
            <div
                className="App"
            >
                <header
                    className="App-header"
                >
                    <h1
                        className="App-title"
                    >
                        Welcome to FoodControl
                    </h1>
                    <img
                        src="smieciowe-jedzenie-1.jpg"
                        className = "foodphoto1"
                    />
                </header>
                <p
                    className="App-intro"
                >
                    Let's get it started in here!
                </p>
                <div className="base">
                    <ul>
                        {this.state.products.map(
                            product =>
                                <li key={product.id}>
                                    {product.name.toUpperCase()}
                                    <Button
                                        onClick={() =>
                                            this.deleteProduct(product.id)}
                                        color="danger"
                                        style={{
                                            borderRadius: "50%"
                                        }}
                                    >
                                        -
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            this.setState({
                                                calckcal: [...this.state.calckcal, product]
                                            })
                                        }
                                        }
                                        color="success"
                                    >
                                        =>
                                    </Button>
                                </li>
                        )}
                        <li>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.toggle}>{this.props.buttonLabel}
                                >
                                Add new product!
                            </button>
                        </li>
                    </ul>
                    <Table items={this.state.calckcal}/>
                </div>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <ModalHeader
                        toggle={this.toggle}
                    >
                        New Product
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label
                                    for="product"
                                >
                                    Product name
                                </Label>
                                <Input
                                    type="text"
                                    name="product"
                                    id="product"
                                    placeholder="type in a new product name"
                                    value={this.state.form.name}
                                    onChange={(event) =>
                                        this.setState({form: {...this.state.form, name: event.target.value}})}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label
                                    for="productwage"
                                >
                                    Product wage
                                </Label>
                                <Input
                                    type="number"
                                    name="productwage"
                                    id="productwage"
                                    placeholder="type in a new product wage in grams"
                                    value={this.state.form.wage}
                                    onChange={(event) =>
                                        this.setState({form: {...this.state.form, wage: event.target.value}})}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label
                                    for="kcal"
                                >
                                    kcal
                                </Label>
                                <Input
                                    type="number"
                                    name="kcal"
                                    id="kcal"
                                    placeholder="type in amount of callories in  a new product"
                                    value={this.state.form.kcal}
                                    onChange={(event) =>
                                        this.setState({form: {...this.state.form, kcal: event.target.value}})}
                                />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={this.writeProductsData}
                        >
                            Add new product
                        </Button>
                        {' '}
                        <Button
                            color="secondary"
                            onClick={this.toggle}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default Main