import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

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

const Home = () => {
  const [Type, setType] = useState("Income");
  const [OutcomType, setOutcomType] = useState("Food");

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };
  const handleOutcomeTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOutcomType(event.target.value);
  };

  return (
    <div className="page">
      <Box component="form" noValidate autoComplete="off">
        <TextField className="itemInput" label="Item" variant="filled" />
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
        {Type === "Outcome" ? (
          <TextField
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
        ) : null}
        <Button variant="contained" size="large">
          Contained
        </Button>
      </Box>
    </div>
  );
};

export { Home };
