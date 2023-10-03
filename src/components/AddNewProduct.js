import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, CardHeader, Row, Col } from "react-bootstrap";
import { containerStyle, flexColumn } from "../ui";

const AddNewProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "male",
    price: null,
    discount: null,
    description: "",
    image: null,
    colors: "",
    availability: false,
    returnPolicy: "",
    instruction: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const newValue =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;
    setProduct({ ...product, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", product);
  };
  return (
    <Container style={containerStyle}>
      <h3>Add Product</h3>
      <Form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "10px", flexDirection: "column" }}
      >
        <Container style={flexColumn}>
          <Row>
            <Col>
              <Form.Group controlId="name">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="category">
                <Form.Label>Product Category</Form.Label>
                <Form.Control
                  as="select"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="discount">
                <Form.Label>Discount</Form.Label>
                <Form.Control
                  type="number"
                  name="discount"
                  value={product.discount ? product.discount : null}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="colors">
                <Form.Label>Colors (Hex-code)</Form.Label>
                <Form.Control
                  type="text"
                  name="colors"
                  value={product.colors}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="Image">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  name="Image"
                  value={product.image}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="Availability">
                <Form.Label>Availability</Form.Label>
                <Form.Control
                  as="select"
                  name="Availability"
                  value={product.availability}
                  onChange={handleChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="returnPolicy">
                <Form.Label>Return Policy</Form.Label>
                <Form.Control
                  type="text"
                  name="ReturnPolicy"
                  value={product.returnPolicy}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="instruction">
            <Form.Label>Instruction</Form.Label>
            <Form.Control
              as="textarea"
              name="instruction"
              value={product.instruction}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Add other form fields similar to the above examples for Image, Availability, Return Policy, and Instruction. */}

          <Button variant="primary" type="submit" className="mt-3">
            Add Product
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default AddNewProduct;
