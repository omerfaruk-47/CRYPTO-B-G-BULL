import { useParams } from "react-router-dom";
import DetailView from "../views/DetailView";
import { useEffect, useState } from "react";
import DetailModel from "../models/DetailModel";

const DetailController = () => {
  const [coin, setCoin] = useState(null);

  //1) url den id almak
  const { id } = useParams();

  //2) coin detay verilerini ve fiyat geçmişini apidan al
  useEffect(() => {
    DetailModel.getCoin(id).then((data) => setCoin(data));
  }, []);

  //2)classtan örnek al
  const model = new DetailModel(coin);

  return <DetailView model={model} />;
};

export default DetailController;
