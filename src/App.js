import { useFormik } from "formik";
import Input from "./components/Input";

const App = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "2018-07-22",
      gitHub: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="Enter your email"
      />
      <Input
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        placeholder="Enter your first name"
      />
      <Input
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        placeholder="Enter your last name"
      />
      <Input
        name="userName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.userName}
        placeholder="Enter your user name"
      />
      <Input
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        placeholder="Enter your password"
      />
      <Input
        name="confirmPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
        placeholder="Confirm your password"
      />
      <Input
        name="dateOfBirth"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.dateOfBirth}
        placeholder="Enter your email"
      />
      <Input
        name="github"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.gitHub}
        placeholder="Enter your email"
      />
      <button type="submit">Valider</button>
    </form>
  );
};

export default App;
