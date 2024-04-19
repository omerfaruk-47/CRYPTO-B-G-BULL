import { useFormik } from "formik";
import LoginView from "../views/LoginView";
import { shema } from "../schema";
import { useNavigate } from "react-router-dom";

const LoginController = () => {
  const navigate = useNavigate();

  //fromikim bütün özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    //formda tutulacak verilerin ilk değeri
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },

    //validasyon şeması
    //inputlardaki verileri tanımladiğimiz koşullara uygun mu
    //diye kontrol eder. Eğer geçerli değilse error stateine hataları ekler
    validationSchema: shema,

    //form gödnerilince çalışacak olan fonksiyon
    //otomatik olarak sayfa yenelemeyi engeller
    //1. parametre olarak formdaki verileri alır
    //2.parametre olarak formda çalışabilecek aksiyonları alır
    onSubmit: (values, actions) => {
      navigate("/home");
    },
  });
  return <LoginView formik={formik} />;
};

export default LoginController;
