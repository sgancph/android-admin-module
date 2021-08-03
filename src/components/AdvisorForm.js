import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Modal from "./Modal";
import { countryCodeOptions } from "../data";

const getSequence = (start, end) =>
  Array.from({ length: end - start }, (_, i) => i + start + 1);
const yearOptions = getSequence(2000, 2021).reverse();

const AdvisorCreate = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  agentCode,
  setAgentCode,
  gender,
  setGender,
  masRepNumber,
  setMasRepNumber,
  yearJoinedIncome,
  setYearJoinedIncome,
  phoneCountryCode,
  setPhoneCountryCode,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  bio,
  setBio,
  image,
  setImage,
  isDisabled,
  submitTitle,
}) => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [agentCode, setAgentCode] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [masRepNumber, setMasRepNumber] = useState("");
  //   const [yearJoinedIncome, setYearJoinedIncome] = useState("");
  //   const [phoneCountryCode, setPhoneCountryCode] = useState("65");
  //   const [phoneNumber, setPhoneNumber] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [bio, setBio] = useState("");
  //   const [image, setImage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <form noValidate autoComplete="off">
        <TextField
          required
          label="First Name"
          variant="outlined"
          size="small"
          fullWidth
          margin="dense"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          size="small"
          fullWidth
          margin="dense"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <TextField
          label="Agent Code"
          variant="outlined"
          size="small"
          fullWidth
          margin="dense"
          value={agentCode}
          onChange={(event) => setAgentCode(event.target.value)}
        />
        <TextField
          select
          label="Gender"
          variant="outlined"
          size="small"
          fullWidth
          margin="dense"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          {["Male", "Female"].map((genderOption, i) => (
            <MenuItem key={i} value={genderOption}>
              {genderOption}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="MAS Rep. No."
          variant="outlined"
          size="small"
          fullWidth
          margin="dense"
          value={masRepNumber}
          onChange={(event) => setMasRepNumber(event.target.value)}
        />
        <TextField
          select
          label="Year Joined Income"
          variant="outlined"
          size="small"
          fullWidth
          margin="dense"
          value={yearJoinedIncome}
          onChange={(event) => setYearJoinedIncome(event.target.value)}
        >
          {yearOptions.map((yearOption, i) => (
            <MenuItem key={i} value={yearOption}>
              {yearOption}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Country Code"
          variant="outlined"
          size="small"
          fullWidth
          margin="dense"
          value={phoneCountryCode}
          onChange={(event) => setPhoneCountryCode(event.target.value)}
        >
          {Object.keys(countryCodeOptions).map((countryCodeOption, i) => (
            <MenuItem key={i} value={countryCodeOption}>
              {countryCodeOptions[countryCodeOption]}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Phone Number"
          variant="outlined"
          size="small"
          fullWidth
          margin="dense"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          size="small"
          fullWidth
          margin="dense"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="Bio"
          variant="outlined"
          size="small"
          multiline
          rows={4}
          fullWidth
          margin="dense"
          value={bio}
          onChange={(event) => setBio(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<CloudUploadIcon />}
          onClick={handleClickOpen}
          disabled={isDisabled}
        >
          {submitTitle}
        </Button>
      </form>
      <Modal
        isOpen={isOpen}
        handleClose={handleClose}
        title={submitTitle}
        text="Are you sure you want to add advisor X to the platform?"
        yesLabel="Yes, I want to add the advisor"
        noLabel="No"
      />
    </>
  );
};

export default AdvisorCreate;