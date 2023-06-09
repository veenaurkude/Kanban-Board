import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Style from "../Work/Work.module.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../Redux/slice/slice";

const Work = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.dataList.list);
  const [task, setTask] = React.useState({ id: 0, task: "" });
  return (
    <Box component="div" className={Style.root}>
      {lists.map((ele) => {
        return (
          <Box
            key={ele.id}
            component="div"
            sx={{
              minWidth: "20%",
            }}
          >
            <Box component="div" className={Style.box}>
              <Typography component="div" className={Style.title}>
                <Typography variant="body1">{ele.task}</Typography>
                <IconButton>
                  <MoreHorizIcon />
                </IconButton>
              </Typography>
              <Box
                component="div"
                className={Style.title}
                sx={{
                  boxSizing: "border-box",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start !important",
                }}
              >
                <Card id={ele.id} />
              </Box>
            </Box>
          </Box>
        );
      })}
      <Box
        sx={{
          boxSizing: "border-box",
          backgroundColor: task.task ? "white" : "",
          padding: "0.5rem 0rem 1rem 1rem ",
          minWidth: "20%",
        }}
      >
        <TextField
          hiddenLabel
          onChange={(e) => {
            setTask({
              id: lists[lists.length - 1].id + 1,
              task: e.target.value,
            });
          }}
          id="filled-basic"
          placeholder="+ Add another list"
          variant="filled"
          value={task.task}
          sx={{
            backgroundColor: "whitesmoke",
            opacity: "0.4",
            height: "3rem",
            width: "90%",
            borderBottom: 0,
          }}
          inputProps={{
            style: {
              color: "black",
              fontWeight: "bold",
            },
          }}
        />
        {task.task && (
          <Button
            variant="contained"
            sx={{
              margin: "1rem",
              textTransform: "none",
            }}
            onClick={() => {
              dispatch(addTask({ id: task.id, task: task.task }));
              setTask({
                id: 0,
                task: "",
              });
            }}
          >
            Add list
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Work;
