export type PollData = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  stars: number;
  comments: number;
};

function usePolls() {
  const polls: PollData[] = [
    {
      id: 4,
      title:
        '2020 하반기 해커스 GSAT 삼성직무적성검사 최신기출유형 + 온라인 시험 대비 2회',
      description: '해커스 파랭이 2회',
      tags: ['GSAT', '해커스', '파랭이'],
      image: 'http://image.yes24.com/goods/91236307/800x0',
      stars: 3,
      comments: 0,
    },
    {
      id: 3,
      title:
        '2020 하반기 해커스 GSAT 삼성직무적성검사 최신기출유형 + 온라인 시험 대비 1회',
      description: '해커스 파랭이 1회',
      tags: ['GSAT', '해커스', '파랭이'],
      image: 'http://image.yes24.com/goods/91236307/800x0',
      stars: 27,
      comments: 5,
    },
    {
      id: 2,
      title:
        '2020 하반기 해커스 GSAT 삼성직무적성검사 실전모의고사 + 온라인 시험 대비 2회',
      description: '해커스 하양이 2회',
      tags: ['GSAT', '해커스', '하양이'],
      image: 'http://image.yes24.com/goods/91619250/800x0',
      stars: 33,
      comments: 3,
    },
    {
      id: 1,
      title:
        '2020 하반기 해커스 GSAT 삼성직무적성검사 실전모의고사 + 온라인 시험 대비 1회',
      description: '해커스 하양이 1회',
      tags: ['GSAT', '해커스', '하양이'],
      image: 'http://image.yes24.com/goods/91619250/800x0',
      stars: 121,
      comments: 10,
    },
  ];

  return { polls };
}

export default usePolls;
