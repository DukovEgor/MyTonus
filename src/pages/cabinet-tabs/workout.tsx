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


export default function Workout() {

  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };


  return (
    <>
      <Typography variant='h5' component={'h2'} mb={2}>Основной раздел с тренировочными комплексами. Здесь вы найдете все наши рекомендации по упражнениям, видео инструкции по выполнению и текстовые файлы с пояснениями и периодизацией.</Typography>
      <Typography variant='h5' component={'h3'} mb={2}>Отнеситесь к тренировкам ответственно: мы разработали наши комплексы с уклоном для начинающий. Это означает, что нагрузки будут постепенно возрастать по мере того, как Вы будете двигаться по курсу, однако для опытных спортсменов мы подготовили некоторые ремарки в текстовых файлах, чтобы Вы могли работать в повышенном темпе.</Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ borderRadius: '10px', mb: 1 }}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant='h5'>Формат тренировок и удвоенная эффективность</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ borderRadius: '10px', mb: 1 }}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant='h5'>Организация силовых</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ borderRadius: '10px', mb: 1 }}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant='h5'>Тренировочные комплексы</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ borderRadius: '10px', mb: 1 }}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant='h5'>Замены</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{ borderRadius: '10px', mb: 1 }}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant='h5'>Комплекс 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} sx={{ borderRadius: '10px', mb: 4 }}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant='h5'>Комплекс 2</Typography>
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
