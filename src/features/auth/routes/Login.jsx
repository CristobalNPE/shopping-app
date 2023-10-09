import { Button, Input } from "@nextui-org/react";
import Page from "../../../components/Layout/Page";
import { useState } from "react";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    alert(`${loginFormData.email}  ${loginFormData.password}`);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <Page>
      <div className="flex flex-col text-center sm:items-center ">
        <h1 className="mb-10 text-3xl font-semibold">
          Sign in to your account
        </h1>
        <form
          className="flex w-full flex-col gap-2 sm:max-w-sm"
          onSubmit={handleSubmit}
        >
          <Input
            size="lg"
            label="Email Address"
            type="email"
            name="email"
            value={loginFormData.email}
            onChange={handleChange}
            radius="sm"
          />
          <Input
            size="lg"
            label="Password"
            type="password"
            name="password"
            value={loginFormData.password}
            onChange={handleChange}
            radius="sm"
          />
          <Button radius="sm" size="lg" type="submit" color="secondary" className="mt-5">
            Log in
          </Button>
        </form>
      </div>
    </Page>
  );
};

export default Login;
