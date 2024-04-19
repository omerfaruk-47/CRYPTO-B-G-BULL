//yuptaki bütün fonk. import etmeliyiz
import * as yup from "yup";

// 1 büyük harf
// 1 küçük harf
// 1 sayı
// 1 özel karakter
// min 5 karakter
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

//validasyon şeması
//formdaki inputların geçerli olması için gerekli koşulları tanımladığımız alan.

//bir alan için koşulları yazarken ilk olarak o alanın tipini tanımlayan yup fonksiyonunu  çağırırız.
export const shema = yup.object().shape({
  //emailin geçerli olması için koşullar
  email: yup
    .string()
    .email("Email geçerli bir formatta olmalı...")
    .required("Email zorunlu bir alan"),

  //yaşın geçerli olması için koşullar
  age: yup
    .number()
    .min(18, "Yaş 18 'den küçük olamaz")
    .max(100, "Yaş 100'den büyük olamaz")
    .integer("Lütfen tam sayo değeri giriniz")
    .required("Yaş zorunlu bir alan"),

  //Şifrenin geçerli olması için koşullar

  password: yup
    .string()
    .min(5, "Şifreniz en az 5 karakter olmalı")
    //şifre regex kurallarına uygun mu kontrol eder
    .matches(regex, "Şifreniz yeterince güçlü değil")
    .required("Şifre zorunlu bir alan"),

  //Şİfre onay alanının geçerli olması için koşullar

  passwordConfirm: yup
    .string()
    // oneOf() kontrol ettiğimiz inputtaki verinin verdiğimiz değerlere eşit olup olmadığını kontrol eder
    // ref() farklı bir inputtaki veriye erişmemizi sağlar
    .oneOf([yup.ref("password")], "Onay şifreniz eşleşmiyor")
    .required("Lütfen şifrenizi onaylayın"),
});
