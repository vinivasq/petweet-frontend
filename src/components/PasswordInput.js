import {
  FormHelperText,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import Label from "./Label";

const PasswordInput = (props) => {
  const { helper } = props;
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Stack>
      <Label>Senha</Label>
      <InputGroup>
        <Input
          id="password"
          name="password"
          type={show ? "text" : "password"}
          placeholder="Senha"
        />
        <InputRightElement>
          <Box onClick={handleClick}>
            {show ? <ViewOffIcon /> : <ViewIcon />}
          </Box>
        </InputRightElement>
      </InputGroup>
      {helper ? (
        <FormHelperText fontSize="0.625rem">{helper}</FormHelperText>
      ) : (
        ""
      )}
    </Stack>
  );
};

export default PasswordInput;
