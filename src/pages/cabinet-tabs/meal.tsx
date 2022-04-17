import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography } from '@mui/material';
import { useState } from 'react';


const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: '1px solid #8659f2',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.2rem', color: '#fff' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#8659f2',
  borderRadius: '9px',
  color: '#fff',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: 'none',
}));


export default function Meal() {

  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };


  return (
    <>
      <Typography variant='h5' component={'h2'} mb={2}>Здесь собраны наши рекомендации по питанию. На этой вкладке вы найдете видео- и текстовые материлы по составлению Вашего нового рациона.</Typography>
      <Typography variant='h5' component={'h3'} mb={2}>Помните: живот строится на кухне! - поэтому старайтесь следовать нашим рационам питания и скорее отказывайтесь от вредных пищевых привычек. Наша система рационов отличается высокой гибкость, это означает, что Вам доступные некоторые продукты и ингредиенты для замены, но без потери жиросжигающего эффекта!</Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ borderRadius: '10px', mb: 1 }}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant='h5'>Питание. Теория</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ borderRadius: '10px', mb: 1 }}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant='h5'>Питание. Практика</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
