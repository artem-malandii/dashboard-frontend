import type { SelectChangeEvent } from "@mui/material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import type { FC } from "react";
import { useState } from "react";

import type { IResponseUsers } from "../../../store/slices/time-doctor/interfaces/responses.interface";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type Props = {
  usersData: IResponseUsers;
  onApplyClick: (personIds: string[]) => void;
};

export const ScreenshotFilter: FC<Props> = ({ usersData, onApplyClick }) => {
  const [personIds, setPersonIds] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personIds>) => {
    const {
      target: { value },
    } = event;
    setPersonIds(typeof value === "string" ? value.split(",") : value);
  };

  const getSelectedUserNames = (selectedIds: string[]) =>
    selectedIds
      .map((id) => usersData.data.find((user) => user.id === id)?.name)
      .filter(Boolean)
      .join(", ");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="multiple-checkbox-label">Users</InputLabel>
        <Select
          labelId="multiple-checkbox-label"
          id="multiple-checkbox"
          multiple
          value={personIds}
          onChange={handleChange}
          input={<OutlinedInput label="Users" />}
          renderValue={(selected) => getSelectedUserNames(selected as string[])}
          MenuProps={MenuProps}
        >
          {usersData.data.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              <Checkbox checked={personIds.includes(user.id)} />
              <ListItemText primary={user.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" onClick={() => onApplyClick(personIds)}>
        Apply
      </Button>
    </Box>
  );
};
