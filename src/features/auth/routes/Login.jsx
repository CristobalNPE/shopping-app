import { Button, Input } from "@nextui-org/react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import Page from "../../../components/Layout/Page";
import { loginUser } from "../api/loginUser";

export async function action({ request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  try {
    const data = await loginUser({ username, password });
    console.log(data);
    return redirect("/");
  } catch (err) {
    return "No user with those credentials found.";
  }
}

const Login = () => {
  const error = useActionData();
  const navigation = useNavigation();

  return (
    <Page>
      <div className="flex flex-col text-center sm:items-center ">
        <h1 className="mb-5 text-3xl font-semibold">Sign in to your account</h1>
        {error && <h2 className="mb-5 text-danger">{error}</h2>}
        <Form
          replace
          method="post"
          className="flex w-full flex-col gap-2 sm:max-w-sm"
        >
          <Input
            size="lg"
            label="Username"
            type="text"
            name="username"
            radius="sm"
          />
          <Input
            size="lg"
            label="Password"
            type="password"
            name="password"
            radius="sm"
          />
          <Button
            radius="sm"
            size="lg"
            type="submit"
            color="primary"
            variant="shadow"
            className="mt-5"
            fullWidth
            disabled={navigation.state === "submitting"}
            isLoading={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Loggin in..." : "Log in"}
          </Button>
        </Form>
      </div>
    </Page>
  );
};

export default Login;
