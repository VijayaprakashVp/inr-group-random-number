import React from "react";
import { useState } from "react";
import "../App.css";
import { Spinner } from "@chakra-ui/react";

const TickerNumber = () => {
  const [enterNumber, setEnterNumber] = useState("");
  const [spin, setSpin] = useState(false);
  const [randomNumber, setRandomNumber] = useState("");
  const [selectedNumberArr, setSeletedNumberArr] = useState([]);
  const [lengthCheck, setLengthCheck] = useState(false);
  // const [manualInput, setManualInput] = useState(false);

  const handleSpin = () => {
    setSpin(!spin);
  };

  if (spin === true) {
    setTimeout(() => {
      let temp = Math.floor(Math.random(6) * 1000000 + 1);
      setRandomNumber(temp);
      setSpin(!spin);
      console.log(temp.toString().length);
      console.log(temp);
      setLengthCheck(true);
    }, 3000);
  }

  const handleAddNumber = (request) => {
    let flag = 0;
    if (request === "random") {
      if (lengthCheck === true && selectedNumberArr.length < 5) {
        flag = 1;
        let temp = [...selectedNumberArr];
        temp.push(randomNumber);
        setSeletedNumberArr(temp);
      }
    }

    // }
    else if (request === "entered") {
      if (lengthCheck === true && selectedNumberArr.length < 5) {
        flag = 1;
        let temp = [...selectedNumberArr];
        temp.push(enterNumber);
        setSeletedNumberArr(temp);
        setEnterNumber("");
        return;
      }
    }
    if (selectedNumberArr.length === 5) {
      return alert(
        "Spin Limit Exceeded, Refresh the Page and Start from Scratch"
      );
    } else {
      if (flag === 0) alert("Please Try Again");
    }
  };

  const handleKeyInput = (value) => {
    // if (enterNumber.length > 0) {
    //   setManualInput(true);
    // }
    if (value === "Backspace") {
      let numToArr = enterNumber.split("");
      numToArr.pop();
      let arrToStr = numToArr.toString().split(",").join("");
      setEnterNumber(arrToStr);
      return;
    }
    if (value === "Delete") {
      setEnterNumber("");
      return;
    }
    if (enterNumber.length === 6) {
      setLengthCheck(true);
    }
    if (enterNumber.length < 6) {
      // input_count++;
      let temp = enterNumber;
      temp += value;
      setEnterNumber(temp);
    } else {
      alert("Ticket length exceeded");
    }
  };

  return (
    <div style={{ backgroundColor: "grey" }}>
      <div className="outerdiv">
        <div className="dialpad">
          <button onClick={() => handleKeyInput("1")}>1</button>
          <button onClick={() => handleKeyInput("2")}>2</button>
          <button onClick={() => handleKeyInput("3")}>3</button>
          <button onClick={() => handleKeyInput("4")}>4</button>
          <button onClick={() => handleKeyInput("5")}>5</button>
          <button onClick={() => handleKeyInput("6")}>6</button>
          <button onClick={() => handleKeyInput("7")}>7</button>
          <button onClick={() => handleKeyInput("8")}>8</button>
          <button onClick={() => handleKeyInput("9")}>9</button>
          <button onClick={() => handleKeyInput("Backspace")}>Backspace</button>
          <button onClick={() => handleKeyInput("0")}>0</button>
          <button onClick={() => handleKeyInput("Delete")}>Delete</button>
        </div>
        <div className="spinwheel">
          <p>Click Here to generate a random tickets</p>
          {spin ? (
            <Spinner
              thickness="100px"
              speed="0.65s"
              emptyColor="white"
              color="blue.500"
              size="3xl"
            />
          ) : (
            <img
              src="https://ml8ygptwlcsq.i.optimole.com/WWPmFhQ.THK2~1cd60/w:1000/h:628/q:mauto/https://www.gaming.net/wp-content/uploads/2021/08/roulette-4.jpg"
              alt=""
              style={{
                width: "250px",
                borderRadius: "50%",
                height: "40vh",
                cursor: "pointer",
              }}
              onClick={() => {
                handleSpin();
              }}
            />
          )}
          <p>Tickets Number Range : 100000 - 999999 </p>
          <p>
            Entered Ticket :{" "}
            <input
              type="text"
              placeholder="Enter value"
              value={enterNumber}
              style={{
                fontSize: "24px",
                borderRadius: "20px",
                paddingLeft: "20px",
                width: "170px",
              }}
            />
            <br />
            {/* <button onClick={() => handleAddNumber("entered")}>
              Add Number
            </button> */}
            <button
              className="button-3"
              onClick={() => handleAddNumber("entered")}
            >
              Add Number
            </button>
          </p>
          <p>
            Random Ticket :{" "}
            <span>
              <input
                type="text"
                placeholder="Ticket Number"
                style={{
                  fontSize: "24px",
                  borderRadius: "20px",
                  paddingLeft: "20px",
                  width: "170px",
                }}
                value={randomNumber}
              />
            </span>
            <br />
            {/* <button onClick={() => handleAddNumber("random")}>
              Add Number
            </button> */}
            <button
              className="button-3"
              onClick={() => handleAddNumber("random")}
            >
              Add Number
            </button>
          </p>
        </div>
      </div>
      <br />
      <div
        style={{
          border: "1px solid red",
          height: "10vh",
          width: "70%",
          margin: "auto",
          marginTop: "1%",
          backgroundColor: "white",
        }}
      >
        {selectedNumberArr.length > 0
          ? selectedNumberArr.map((e) => (
              <span
                style={{
                  marginRight: "20px",
                  padding: "5px 20px",
                  marginTop: "10px",
                  borderRadius: "15px",
                  backgroundColor: "yellow",
                }}
              >
                {e}
              </span>
            ))
          : "Please Enter the Ticket to display here"}
      </div>
      {/* <br /> */}
      {/* <button style={{ marginBottom: "4%" }} onClick={handleReset}> */}
      {/* Reset Spin Count
      </button> */}
    </div>
  );
};

export default TickerNumber;
