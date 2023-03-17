import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function SupportView() {
  return (
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          나의지원현황
        </Typography>
        <Typography>
          지원 현황 조회는 PC에 최적화되어 있습니다.
        </Typography>
        <Button variant="contained" href="https://kbank.recruiter.co.kr/app/applicant/myPage/login">마이페이지로 이동</Button>

      </Box>

    
  );
}

export default SupportView;