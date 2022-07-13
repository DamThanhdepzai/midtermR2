// import { tab } from "@testing-library/user-event/dist/tab";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  FormGroup,
  Input,
  Label,
  ModalFooter,
  Form,
} from "reactstrap";

const AddCar = ({ onAdded }) => {
  const [modal, setModal] = useState(false);
  const [car, setCar] = useState({});

  // const handleShow = () => {
  //     setModal(!modal)
  // }
  const handleCloseShow = () => {
    setModal(!modal);
  };

  const handlerInput = (e) => {
    const { name, value } = e.target;
    console.log(car);
    setCar({
      ...car,
      [name]: value,
    });
  };
  const handleImageFile = (e) => {
    setCar({
      ...car,
      file:
        e.target.files && e.target.files.length
          ? URL.createObjectURL(e.target.files[0])
          : car.file,
      image:
        e.target.files && e.target.files.length
          ? e.target.files[0].name
          : car.image,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const fileInput = document.querySelector("#fileUpload");
    const formData = new FormData();
    formData.append("model", car.model);
    formData.append("description", car.description);
    formData.append("produced_on", car.produced_on);
    formData.append("image", fileInput.files[0]);

    axios
      .post("http://localhost:8000/api/cars", formData)
      .then((response) => {
        console.log(response.data);
        onRedirect();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onRedirect = () => {
    setCar({});
    handleCloseShow();
    onAdded(false);
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={handleCloseShow}>
        <ModalHeader toggle={handleCloseShow}>Modal title</ModalHeader>

        <ModalBody>
          <Form onSubmit={handleSubmitForm}>
            <FormGroup>
              <Label for="model">Model</Label>
              <Input
                id="model"
                name="model"
                // value={car.màu}
                onChange={handlerInput}
                placeholder="with a placeholder"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                id="description"
                name="description"
                // value={car.hãng}
                onChange={handlerInput}
                placeholder="with a placeholder"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="image">image</Label>
              <Input
                id="fileUpload"
                name="fileUpload"
                // value={car.image}
                onChange={handleImageFile}
                placeholder="with a placeholder"
                type="file"
              />
              <img
                alt="ts"
                src={car.file}
                style={{ with: "10em", height: "100px" }}
              ></img>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">produced_on</Label>
              <Input
                id="produced_on"
                name="produced_on"
                onChange={handlerInput}
                placeholder="with a placeholder"
                type="date"
              />
            </FormGroup>
            <FormGroup>
              <Button
                color="primary"
                type="submit"
                // onClick ={handleSubmitForm}
              >
                Save
              </Button>
              <Button onClick={handleCloseShow}>Cancel</Button>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default AddCar;
