import { Box } from '@mui/material';

export default function Chart() {
  return (
    <Box>
      <Box display={'flex'} justifyContent='space-between' flexDirection={'row'} mb={3} sx={{ color: '#8759f2' }}>
        <p>Апрель, 2</p>
        <p>Май, 2</p>
      </Box>
      <svg viewBox="0 0 496 185" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M235.5 72.2502C136.3 11.0502 38.5 0.0835636 2 2.25023V185H494.5V135.75C449.5 140.083 334.7 133.45 235.5 72.2502Z" fill="url(#paint0_linear_898_785)" />
        <path d="M2 2.25023C38.5 0.0835636 136.3 11.0502 235.5 72.2502C334.7 133.45 449.5 140.083 494.5 135.75" stroke="url(#paint1_linear_898_785)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="103" cy="16" r="8.5" fill="url(#paint2_linear_898_785)" stroke="white" strokeWidth="3" />
        <circle cx="397" cy="127" r="8.5" fill="url(#paint3_linear_898_785)" stroke="white" strokeWidth="3" />
        <defs>
          <linearGradient id="paint0_linear_898_785" x1="248.25" y1="2" x2="248.25" y2="185" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.17" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.06" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear_898_785" x1="-41.4004" y1="92.9082" x2="728.312" y2="10.7122" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FBA24F" />
            <stop offset="1" stopColor="#FF1E1E" />
          </linearGradient>
          <linearGradient id="paint2_linear_898_785" x1="91.2375" y1="19.4866" x2="122.824" y2="18.5633" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FBA24F" />
            <stop offset="1" stopColor="#FF1E1E" />
          </linearGradient>
          <linearGradient id="paint3_linear_898_785" x1="385.238" y1="130.487" x2="416.824" y2="129.563" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FBA24F" />
            <stop offset="1" stopColor="#FF1E1E" />
          </linearGradient>
        </defs>
      </svg>
      <Box display={'flex'} justifyContent='space-between' flexDirection={'row'} sx={{ color: '#8759f2' }}>
        <p>40кг</p>
        <p>30кг</p>
      </Box>
    </Box>
  );
}

