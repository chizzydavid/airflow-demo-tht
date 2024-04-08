import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './listdag.css'

const apiUrl = import.meta.env.VITE_API_URL;

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.dag_id}
        </TableCell>
        <TableCell>{row.owner}</TableCell>
        <TableCell>{row.schedule_interval}</TableCell>
        <TableCell>{row.executor}</TableCell>
        <TableCell>{row.start_date}</TableCell>
        <TableCell>{row.last_run_ts}</TableCell>
        <TableCell>{row.last_run_status}</TableCell>

      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Tasks
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Task ID</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Operator</TableCell>
                    <TableCell>Created At</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.tasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell component="th" scope="row">{task.task_id}</TableCell>
                      <TableCell>{task.description}</TableCell>
                      <TableCell>{task.operator}</TableCell>
                      <TableCell>{task.created_date}</TableCell>
     
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export default function CollapsibleTable() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [dags, setDags] = React.useState([])

  React.useEffect(() => {
    fetchDagList()
  }, [])

  const fetchDagList = async () => {
    try {
      setIsLoading(true)
      let response = await fetch(`${apiUrl}dags/`, {    
        method: 'GET',   
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json()
      setDags(data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    } 
  }

  return (
    <>
      <div className='listdag__container_sec'>
        <div className='listdag__header_sec'>
          <h2 className='header_text'>All DAGS</h2>
        </div>

        {isLoading 
          ? <div className='spinner_sec'> 
              <Box>
                <CircularProgress />
              </Box>
            </div> 
          : 
            <TableContainer sx={{ color: 'text.secondary' }} component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell size='small'/>
                    <TableCell>Dag ID</TableCell>
                    <TableCell>Owner</TableCell>
                    <TableCell>Schedule Interval</TableCell>
                    <TableCell>Executor</TableCell>
                    <TableCell>Start Date</TableCell>
                    <TableCell>Last Run</TableCell>
                    <TableCell>Last Run Status </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {dags.map((row) => (
                    <Row key={row.id} row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        }
      </div>
    </>
  );
}

