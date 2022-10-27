import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./form-registration.css";

function FormRegistration() {
  return (
    <Form className="form-registration">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nickname</Form.Label>
        <Form.Control type="text" placeholder="Enter nickname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Repeat Password </Form.Label>
        <Form.Control type="password" placeholder="Repeat password" />
      </Form.Group>
      <Button variant="dark" type="submit">
        Registration
      </Button>
    </Form>
  );
}

export default FormRegistration;
