import { useEffect, useState } from "react";
import MainModel from "../models/MainModel";
import MainView from "./../views/MainView";

const MainController = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    //Her yeni cevap geldiğinde önceki cevabın üzerine ekle
    MainModel.getCoins(page).then((data) => setCoins(coins.concat(data)));
  }, [page]);

  return <MainView coins={coins} setPage={setPage} />;
};

export default MainController;
