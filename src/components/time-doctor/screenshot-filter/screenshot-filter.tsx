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
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import type { Dayjs } from "dayjs";
import type { FC } from "react";
import { useState } from "react";

import type {
  IResponseProject,
  IResponseUsers,
} from "../../../store/slices/time-doctor/interfaces/responses.interface";

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
  projectData: IResponseProject;
  onApplyClick: (personIds: string[], dateFilter: string) => void;
};

export const ScreenshotFilter: FC<Props> = ({
  usersData,
  projectData,
  onApplyClick,
}) => {
  const [personIds, setPersonIds] = useState<string[]>([]);
  const [projectIds, setProjectIds] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const handleUserChange = (event: SelectChangeEvent<typeof personIds>) => {
    const {
      target: { value },
    } = event;
    setPersonIds(typeof value === "string" ? value.split(",") : value);
  };

  const handleProjectChange = (event: SelectChangeEvent<typeof personIds>) => {
    const {
      target: { value },
    } = event;
    setProjectIds(typeof value === "string" ? value.split(",") : value);
  };

  const getSelectedUserNames = (selectedIds: string[]) =>
    selectedIds
      .map((id) => usersData.data.find((user) => user.id === id)?.name)
      .filter(Boolean)
      .join(", ");

  const getSelectedProjectNames = (selectedIds: string[]) =>
    selectedIds
      .map((id) => projectData.data.find((project) => project.id === id)?.name)
      .filter(Boolean)
      .join(", ");

  const getDateFilter = () => {
    if (startDate && endDate) {
      return `${startDate.toISOString()}_${endDate.toISOString()}`;
    }
    if (startDate) {
      return `${startDate.toISOString()}_`;
    }
    if (endDate) {
      return `_${endDate.toISOString()}`;
    }
    return "";
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        gap: "15px",
      }}
    >
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="multiple-checkbox-label-user">Users</InputLabel>
        <Select
          labelId="multiple-checkbox-label-user"
          id="multiple-checkbox-user"
          multiple
          value={personIds}
          onChange={handleUserChange}
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
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="multiple-checkbox-label-project">Projects</InputLabel>
        <Select
          labelId="multiple-checkbox-label-project"
          id="multiple-checkbox-project"
          multiple
          value={projectIds}
          onChange={handleProjectChange}
          input={<OutlinedInput label="Projects" />}
          renderValue={(selected) =>
            getSelectedProjectNames(selected as string[])
          }
          MenuProps={MenuProps}
        >
          {projectData.data.map((project) => (
            <MenuItem key={project.id} value={project.id}>
              <Checkbox checked={projectIds.includes(project.id)} />
              <ListItemText primary={project.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <DatePicker
                label="Start date"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
              />
              <DatePicker
                label="End date"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
              />
            </Box>
          </DemoContainer>
        </LocalizationProvider>
      </Box>
      <Button
        variant="contained"
        onClick={() => onApplyClick(personIds, getDateFilter())}
      >
        Apply
      </Button>
    </Box>
  );
};
