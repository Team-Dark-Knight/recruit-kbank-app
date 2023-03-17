import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'mui-image'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const itemData = [
  {
    img: 'https://kbank.recruiter.co.kr/upload/68209/site/myImage/202207/49063388-af2a-449a-9219-e9138e7cffb0.jpg',
    title: '케이뱅크 1호 인턴 이야기',
    author: '@수신개발팀 김채원님, 준법지원팀 이강병님, 여신1팀 허동규님, 리스크모델링Lab 황서진님',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://kbank.recruiter.co.kr/upload/68209/site/myImage/202208/461e6d97-0345-4707-b560-b520ed51ad20.jpg',
    title: '방구석R&D는 체질이 아니라',
    author: '@금융기술Lab 김홍종님 & 김하영님',
  },
  {
    img: 'https://kbank.recruiter.co.kr/upload/68209/site/myImage/202111/51e775d6-a491-495c-ba4a-299a96f51499.jpeg',
    title: ' "나"라는 브랜드를 만들어가다',
    author: '@UX팀 김송현님',
  },
  {
    img: 'https://kbank.recruiter.co.kr/upload/68209/site/myImage/202111/856f1c0e-5059-4068-8fa4-343aaac7aac0.jpeg',
    title: '내 코드가 고객에게 닿기를',
    author: '@수신개발팀 서원대님',
    cols: 2,
  },
  {
    img: 'https://kbank.recruiter.co.kr/upload/68209/site/myImage/202111/eefe8103-a8a3-4d3d-b9e3-e39a7a8d37df.jpeg',
    title: 'IT기획자가 하는 일',
    author: '@금융HUB기획팀 남인수님',
    cols: 2,
  },
  {
    img: 'https://kbank.recruiter.co.kr/upload/68209/site/myImage/202111/05cf0927-a444-4fe2-b2c6-7589c213dece.jpeg',
    title: '15년차 금융인, 인터넷은행의 매력을 말하다',
    author: '@수신팀 윤혜령님',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://kbank.recruiter.co.kr/upload/68209/site/myImage/202210/8e1aa28a-b63b-46d6-9b89-88cfc8467366.jpg',
    title: '케이뱅크를 인터넷전문은행이라는 정체성에 맞게, 일반은행*의 대면창구기능을 디지털화하는 팀',
    author: '@디지털채널팀 진보성님',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://kbank.recruiter.co.kr/upload/68209/site/myImage/202210/8c5f9305-3f26-492a-8f43-6e7bcb5e5b7b.jpg',
    title: '케이뱅크가 법과 규정을 잘 준수하여 은행의 지속적 영업을 할 수 있도록 지원하는 팀',
    author: '@준법지원팀 이강병님',
  },
  {
    img: 'https://kbank.recruiter.co.kr/upload/68209/site/myImage/202210/3deee708-cf09-44bc-ae88-d0916671d773.jpg',
    title: '카드, 방카/간편결제, 금융혁신, 이렇게 세 파트로 나뉘어 비즈니스 로직 개발, 즉 Back-end 개발 팀',
    author: '@지급결제개발팀 정제일님',
  },
  {
    img: 'https://kbank.recruiter.co.kr/upload/68209/site/myImage/202210/a473757d-ff4f-4a53-9bfb-1bb45fe9979a.jpg',
    title: 'UX팀은 말 그대로 케이뱅크 App/Web의 전체 사용자 경험을 담당',
    author: '@UX팀 재은님, 현경님',
    cols: 2,
  },
  {
    img: 'https://kbank.recruiter.co.kr/upload/68209/site/myImage/202210/95c3478e-0b65-4c86-b10c-da57ea2295ea.jpg',
    title: '회계는 회사의 가계부를 만드는 일(결산)이며, 세무는 세금을 신고/납부하는 팀',
    author: '@회계팀 윤소정님',
    cols: 2,
  },
];
function StoryView() {
  return (
    <Box component="main" sx={{ p: 2 }}>
      <Toolbar />
      <Typography
        variant="h4"
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
      >케미 스토리</Typography>
      <Typography>
        <Image fit="contain" src="https://kbank.recruiter.co.kr/upload/68209/site/myImage/202210/529b8258-b59f-4da9-a17b-0f5a26ad7625.jpg" />
        대한민국 제1호 인터넷은행 케이뱅크에서는 어떻게 일하고 있을까요?
        케이뱅크에서 일하는 우리의 케미* 좋은 이야기를 공유할게요.

        * 케미는 케이뱅크의 K, 그리고 친구를 뜻하는 프랑스단어 ami를 합친 말로, 아직은 채용 콘텐츠 크리에이터가 나홀로 밀고 있어요.
        여러분이 케이뱅크에 합류하신 뒤, 힘을 실어주시길 기다리고 있습니다. 목이 빠져라요~
      </Typography>
      <ImageList sx={{ width: 360, height: 450 }}>
        {/* <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem> */}
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>


  );
}

export default StoryView;