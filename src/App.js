import { useFormik } from "formik";
import * as Yup from "yup";
import { number } from "yup/lib/locale";
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
      // dateOfBirth: "2018-07-22",
      gitHub: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Vous devez entrer un email"),
      firstName: Yup.string().required("Vous devez entrer votre prénom"),
      lastName: Yup.string().required("Vous devez entrer votre nom"),
      userName: Yup.string().min(4, "Pseudo trop court"),
      password: Yup.string()
        .min(8, "Mot de passe trop court")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])/,
          "Votre mot de passe doit "
        ),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords doivent correspondre"),
      dateOfBirth: Yup.number().moreThan(17, "Minimum 18 ans"),
      gitHub: Yup.string(),
    }),
    onSubmit: (values) => {
      // console.log(values);
      // values.email = "",
      // values.firstName = "",
      // values.lastName = "",
      // values.userName = "",
      // values.password= "",
      // values.confirmPassword= "",
      // values.dateOfBirth = ""
    },
  });

  console.log(formik.errors);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="Enter your email"
        error={formik.errors}
      />
      <Input
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        placeholder="Enter your first name"
        error={formik.errors}
      />
      <Input
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        placeholder="Enter your last name"
        error={formik.errors}
      />
      <Input
        name="userName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.userName}
        placeholder="Enter your user name"
        error={formik.errors}
      />
      <Input
        name="password"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.password}
        placeholder="Enter your password"
        error={formik.errors}
      />
      <Input
        name="confirmPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
        placeholder="Confirm your password"
        error={formik.errors}
      />
      <Input
        name="dateOfBirth"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.dateOfBirth}
        placeholder="Enter your date of birth"
        error={formik.errors}
      />
      <Input
        name="github"
        type="url"
        onChange={formik.handleChange}
        value={formik.values.gitHub}
        placeholder="Enter your gitHub"
        error={formik.errors}
      />
      <button type="submit">Valider</button>
    </form>
  );
};

export default App;
