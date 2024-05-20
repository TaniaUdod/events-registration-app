import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createParticipant } from "../../services/fetchParticipant";
import toast from "react-hot-toast";
import {
  Button,
  Container,
  Error,
  Input,
  InputWrap,
  LabelWrap,
  RadioItem,
  RadioList,
  TextForm,
  Title,
} from "./Registration.styled";

const Registration = () => {
  const { id } = useParams();
  const [selectedSource, setSelectedSource] = useState("socialMedia");

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(6, "Name is too short, should be at least 6 characters long")
      .required("Name is required"),
    email: yup
      .string()
      .email("Please, enter a valid email")
      .required("Email is required"),
    dateOfBirth: yup
      .date()
      .max(new Date(), "Date of birth cannot be in the future")
      .required("Date of birth is required"),
  });

  const source = [
    { label: "Social media", value: "socialMedia" },
    { label: "Friends", value: "friends" },
    { label: "Found myself", value: "foundMyself" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { name, email, dateOfBirth, source } = data;
    try {
      await createParticipant({ name, email, dateOfBirth, source }, id);
      toast.success("You have successfully registered");
      reset();
    } catch (error) {
      toast.error("Something get wrong!");
    }
  };

  return (
    <Container>
      <Title>Event registration</Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrap>
          <LabelWrap>
            <label>Full name</label>
            <Input type="text" {...register("name")} />
            {errors.name && <Error>{errors.name.message}</Error>}
          </LabelWrap>
          <LabelWrap>
            <label>Email</label>
            <Input type="email" {...register("email")} />
            {errors.email && <Error>{errors.email.message}</Error>}
          </LabelWrap>
          <LabelWrap>
            <label>Date of birth</label>
            <Input type="date" {...register("dateOfBirth")} />
            {errors.dateOfBirth && <Error>{errors.dateOfBirth.message}</Error>}
          </LabelWrap>
        </InputWrap>

        <TextForm>Where did you hear about this event?</TextForm>
        <RadioList>
          {source.map(({ label, value }) => (
            <RadioItem key={value}>
              <label>
                <input
                  type="radio"
                  name="source"
                  value={value}
                  {...register("source")}
                  checked={selectedSource === value}
                  onChange={() => setSelectedSource(value)}
                />
                {label}
              </label>
            </RadioItem>
          ))}
        </RadioList>

        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default Registration;
