import React from "react";
import { useState } from "react";
import "../App.css";
import { Spinner } from "@chakra-ui/react";

const TickerNumber = () => {
  //   const [enterNumber, setEnterNumber] = useState("");
  const [spin, setSpin] = useState(false);
  const [randomNumber, setRandomNumber] = useState("");
  const [selectedNumberArr, setSeletedNumberArr] = useState([]);
  const [lengthCheck, setLengthCheck] = useState(false);

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
      if (temp.length === 6) setLengthCheck(true);
    }, 3000);
  }

  const handleAddNumber = () => {
    let flag = 0;
    console.log("30", selectedNumberArr);
    console.log(lengthCheck);
    if (lengthCheck === true && selectedNumberArr.length < 5) {
      flag = 1;
      let temp = [...selectedNumberArr];
      temp.push(randomNumber);
      setSeletedNumberArr(temp);
      console.log("38", selectedNumberArr);
    }
    if (selectedNumberArr.length === 5) {
      return alert(
        "Spin Limit Exceeded, Refresh the Page and Start from Scratch"
      );
    } else {
      if (flag === 0) alert("Please Try Again");
    }
  };

  const handleReset = () => {
    selectedNumberArr([]);
  };

  return (
    <div style={{ backgroundColor: "grey" }}>
      <div className="outerdiv">
        <div className="dialpad">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>Backspace</p>
          <p>0</p>
          <p>Delete</p>
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
            <button onClick={handleAddNumber}>Add Number</button>
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
                  border: "1px solid red",
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
      <button style={{ marginBottom: "4%" }} onClick={handleReset}>
        Reset Spin Count
      </button>
    </div>
  );
};

export default TickerNumber;
