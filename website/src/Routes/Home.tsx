import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { MyDatePicker } from "../Components/MyDatePicker"
const Home = () => {
  const [date, setDate] = useState<Date>(new Date())
  const [amout, setAmount] = useState<string | undefined>(undefined)
  const [type, setType] = useState<string | undefined>(undefined)
  const [outcome, setOutcome] = useState<string | undefined>(undefined)

  const handleSubmit = () => {
    console.log("submitted")
  }

  return (
    <div className="page">
      <InputForm setDate={setDate} setAmount={setAmount} setType={setType} setOutcome={setOutcome} handleSubmit={handleSubmit} />
      <section className="dataPresentation">

      </section>
    </div>
  );
};



const InputForm = (props: {
  setDate: React.Dispatch<React.SetStateAction<Date>>,
  setAmount: React.Dispatch<React.SetStateAction<string | undefined>>,
  setType: React.Dispatch<React.SetStateAction<string | undefined>>
  setOutcome: React.Dispatch<React.SetStateAction<string | undefined>>,
  handleSubmit: () => void
}) => {
  //VARIABLES//
  const types = [
    {
      value: 1,
      label: "Income"
    },
    {
      value: 2,
      label: "Outcome"
    }
  ];

  const outcomeTypes = [
    {
      value: 3,
      label: "Food"
    },
    {
      value: 4,
      label: "Habitation"
    },
    {
      value: 5,
      label: "Investment"
    },
    {
      vlaue: 6,
      label: "Other"
    }
  ];
  //STATES//
  const [Type, setType] = useState<string>("Income");
  const [OutcomType, setOutcomType] = useState<string>("Food");
  const [OutcomeDisabled, setOutcomeDisabled] = useState<boolean>(true)
  const [Amount, setAmount] = useState<string>("")
  const [AmountInputError, setAmountInputError] = useState<boolean>(false)


  const valueRef = useRef(null)
  //PASS TO PARRENT//
  useEffect(() => {
    props.setType(Type)
  }, [Type])
  useEffect(() => {
    props.setOutcome(OutcomType)
  }, [OutcomType])
  useEffect(() => {
    props.setAmount(Amount)
  }, [Amount])

  //FUNCTIONS//
  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    Type === "Income" ? setOutcomeDisabled(false) : setOutcomeDisabled(true)
    setType(event.target.value);
  };
  const handleOutcomeTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    setOutcomType(event.target.value);
  };
  const handleAmountTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const regEx = /^[+]?\d+([.]\d+)?$/
    const testRes = regEx.test(event.target.value)
    setAmountInputError(!testRes)
    setAmount(event.target.value);
  };

  //SETUP//
  return (
    <Box className="inputForm" component="form" noValidate autoComplete="off">
      <MyDatePicker setDate={props.setDate} />
      <TextField
        value={Amount}
        ref={valueRef}
        error={AmountInputError}
        className="amountInput"
        label="Amount"
        variant="filled"
        type="number"
        helperText="Only positive numbers."
        onChange={handleAmountTypeChange}
      />
      <TextField
        className="typeInput"
        select
        label="Type"
        value={Type}
        onChange={handleTypeChange}
        helperText="Please select type."
        variant="filled"
      >
        {types.map((option) => (
          <MenuItem key={option.value} value={option.label}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        disabled={OutcomeDisabled}
        className="outcomeTypeInput"
        select
        label="Outcome type"
        value={OutcomType}
        onChange={handleOutcomeTypeChange}
        helperText="Please select outcome type."
        variant="filled"
      >
        {outcomeTypes.map((option) => (
          <MenuItem key={option.value} value={option.label}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>


      <Button
        className="addItemButton"
        variant="contained"
        size="large"
        onClick={() => { props.handleSubmit(); setType("Income"); setOutcomType("Food"); setAmount("") }}
      >
        Add item
      </Button>
    </Box>
  )
}
export { Home };
