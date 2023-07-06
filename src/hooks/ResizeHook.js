import { useState } from "react";

const useResizeWindow = () => {
  const [cardsPerPage, setCardsPerPage] = useState(0);
  const [cardsPerAdditionalLine, setCardsPerAdditionalLine] = useState(0);

  // изменение количества карточек в зависимости от размеров окна
  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      setCardsPerPage(12);
      setCardsPerAdditionalLine(3);
    } else if (window.innerWidth >= 768) {
      setCardsPerPage(8);
      setCardsPerAdditionalLine(2);
    } else {
      setCardsPerPage(5);
      setCardsPerAdditionalLine(2);
    }
  };

  return {
    cardsPerPage,
    cardsPerAdditionalLine,
    handleResize,
    setCardsPerPage,
    setCardsPerAdditionalLine,
  };
};

export default useResizeWindow;
