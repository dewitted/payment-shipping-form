import React, { useState, useEffect } from "react";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import Summary from "../../components/Summary/Summary";
import "./Checkout.scss";


// Hook
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const Checkout = () => {
  const [isRotated, setIsRotated] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const [totalAmount, setTotalAmount] = useState(0);

  const onClickHandler = () => {
    setIsOpened(!isOpened);
    setIsRotated(!isRotated);
  };

  const windowsize = useWindowSize();
  console.log(windowsize)

  return (
    <div className="container">
      <div className="container__containerForm">
        <h1 className="container__header">PAYMENT AND SHIPPING</h1>
        <PaymentForm />
      </div>
      <div className="container__headerSummary" onClick={onClickHandler}>
        <div className="container__shoppingCart"></div>
        <div className="container__dropdown">
          <h1>order summary</h1>
          <span
            className={
              isRotated ? "container__arrow rotated" : "container__arrow"
            }
          ></span>
        </div>
        <div className="container__total">
          <h1>${totalAmount}</h1>
        </div>
      </div>
      {windowsize.width < 1024 ? (<div
        className={
          !isOpened
            ? "container__responsiveSummary"
            : "container__responsiveSummary visible"
        }
      >
        <Summary setTotalAmount={setTotalAmount} />
      </div>) : (      <div className="container__containerSummary">
        <Summary setTotalAmount={setTotalAmount}/>
      </div>)}

    </div>
  );
};

export default Checkout;

