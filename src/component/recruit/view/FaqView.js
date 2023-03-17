import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


function FaqView() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Toolbar />
      <Box sx={{ my: 3, mx: 2 }}>
        <Typography gutterBottom variant="h4" component="div">
          자주묻는질문
        </Typography>        
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab variant="extended" size="medium" color="primary" aria-label="add">
            영입절차
          </Fab>
          <Fab variant="extended" size="medium" color="primary" aria-label="add">
            혜택 및 복지
          </Fab>
        </Box>
      </Box>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: 'text.secondary' }}>평판조회는 어떻게 진행되나요?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2차면접 후 필요한 후보자에 한하여 평판조회 진행됩니다.
            평판조회 전 동의서 및 추천인 명단을 작성하시게 되며,
            지원자 본인이 추천한 인물 및 추천하지 않은 인물에 대해 평판조회를 할 수 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ color: 'text.secondary' }}>
            채용 프로세스가 궁금해요.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            경력직 기준 채용 프로세스는 아래와 같습니다.

            ▶ 지원서 접수 → 서류 전형 → 인성검사 및 코딩테스트 → 면접전형 → 처우협의 및 평판조회 → 최종합격

            * Tech직군의 경우, 온라인 코딩테스트가 진행되며 실무면접 시 해당 내용에 대한 질의응답이 진행됩니다.
            * 면접 전형은 1차 실무진 면접과 2차 임원면접으로 진행됩니다.
            * 뽑고자 하는 포지션의 특징에 따라 세부 전형 절차가 변경될 수 있으니, 꼭 지원을 희망하는 직무의 모집공고를 확인해주세요.

            ※ 입사 전 신용정보조회 및 KYE(Know Your Employee) 수행 안내
            임원면접 합격자 대상으로 신용정보조회와 KYE를 수행하고 있습니다.
            신용정보조회를 통해 케이뱅크 대출상품 이용이 어려운 등급인 경우,
            KYE 수행 결과 자금세탁행위의 위험이 높은 것으로 판단될 경우 이후 전형 진행이 어렵습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ color: 'text.secondary' }}>
            전형 결과는 언제 알 수 있을까요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            단계별 전형 결과는 합격/불합격에 관계없이 안내드리고 있으며 최대 한 달의 기간이 소요될 수 있습니다.

            결과를 기다리고 계신 모든 분들의 시간을 아끼고자 최선을 다하고 있지만
            여러분의 역량을 놓침 없이 보고자 신중하게 검토하고 있으니 너른 마음으로 이해 부탁드립니다.

            혹시 한 달이 지나도 결과안내를 받지 못하셨나요? 케이뱅크 채용 페이지 내의 Q&A 혹은 recruit@kbanknow.com으로 문의 남겨주시면 빠르게 안내 드리겠습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ color: 'text.secondary' }}>코딩테스트는 어떤 전형인가요?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            개발/빅데이터 등 Tech 직군을 지원하신 경우 온라인 코딩테스트가 진행됩니다.
            약 3~4일 정도의 응시기간을 드리며, 기간 내 원하시는 때 응시하여 주세요.
            시험에서는 지원하신 분야에서 주로 사용되는 언어가 출제되며, 실무진 면접시 작성하신 코드에 대한 리뷰도 진행됩니다.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ color: 'text.secondary' }}>보다 상세한 공고 내용이 궁금합니다.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            채용공고의 내용이 이해가 되지 않거나, 다른 문의사항이 있으면
            케이뱅크 채용 페이지 내의 Q&A에 남겨주세요. 담당자가 확인 후 답변드리고 있습니다.
            다만 지원자들간의 공정성을 위해서 게시된 공고 이외의 정보는 공유되기 어려울 수도 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Toolbar />
      <Box sx={{ my: 3, mx: 2 }}>
        <Typography gutterBottom variant="h4" component="div">
          원하는 답변을 찾을 수 없었나요?
        </Typography>
        <Box sx={{ '& button': { m: 1 } }}>
          <Button variant="contained" size="large">
            메일 문의
          </Button>
          <Button variant="contained" size="large">
            전화 문의
          </Button>
        </Box>
      </Box>
    </Box>


  );
}

export default FaqView;