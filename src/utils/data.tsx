interface Food {
  id: number;
  category: "highball" | "cuisine" | "dessert" | "etc" | "menu";
  nameKr: string;
  nameEn: string;
  price: number; // KRW
  descriptionKr: string; // 한국어 설명
  descriptionEn: string; // 영어 설명
  etc: string | null; // 기타 설명

  image: string;
}

export interface Book {
  id: number;
  category: string;
  view: number;
  description: string;
  title: string;
  subTitle: string;
  price: number; // KRW
  subdescription: string;
  contents: {
    textContents: string;
    image: string;
  }[]; // 한국어 설명
  cover: string;
}
export interface Hair {
  id: number;
  sex: string;
  best: boolean;
  styleName: string;
  nameKr: string;
  nameEn: string;
  price: number; // KRW
  subdescriptionKr: string;
  subdescriptionEn: string;
  descriptionKr: string; // 한국어 설명
  descriptionEn: string; // 영어 설명
  etc: string; // 기타 설명
  image: string;
}

// 스타일 네임이 한줄 제목
// nameKr이 책제목
// 영어는 잡종
//subdescriptionKr는 책뒷장

export const BookData: Book[] = [
  {
    id: 1,
    category: "헤어",
    view: 0,
    title: "그대를 위해 봄날을 우려내며 봄을 준비했지'무너진 계절을 긁어모아'",
    subTitle: "유준경",
    description: "문장집",
    price: 24000,
    subdescription:
      "Sleek cut creates a polished and sophisticated look with clean lines",
    contents: [
      {
        textContents:
          "봄날의 찻잔\n-\n\n새롭게 돋아나며\n푸름으로 색칠된\n찻잔을 준비했지\n\n풀향이 물씬나며\n햇살을 머금은\n찻잔을 준비했지\n\n이 잔에 봄을 담고\n이 잔에 풀을 담아\n계절을 우려내었지\n\n그대를 위해\n봄날을 우려내며\n봄을 준비했지",
        image: "",
      },
      {
        textContents:
          "상처에 여름을 뿌린다던데\n-\n\n떠나간 자리에 상처가 남았다\n뜨거웠던 공기가 식어갈 때쯤\n\n통증을 잊기 위해\n붉어진 상처 위에\n뜨거운 여름을 뿌린다\n\n열기 속에 나를 가둬둔다\n잠시나마 통증이 가라앉을 때쯤\n\n괜찮아지기 위해\n익숙해지기 위해\n빈자리에 눈물을 흘린다\n\n흘리는 눈물에 많은 것을 담아\n상처를 치유하기 위해 떠나보낸다\n\n여름을 뿌리고\n눈물을 흘리며\n상처가 굳어지고\n통증이 사라지길\n\n그리고 여름이 지나갈 때\n지워진 상처를 잊고\n온전히 홀로 서서 맞서야지\n\n괜찮아지기 위해\n붉어진 상처 위에\n여름을 뿌린다던데\n\n그럼 괜찮아진다고 하던데",
        image: "",
      },
      {
        textContents:
          "동이 틀 때까지 지켜야 할 것\n-\n\n어둠이 자신을 드러낼 때\n강했던 여름도 한 걸음 물러난다\n\n뜨거웠던 열기도 밤이 오면\n머물렀었던 흔적만 남기고\n자신을 드러내지 않는다\n\n여름의 모두가 한 걸음 물러날 때\n너와 나의 흔적을 지켜줄 이 하나 없다\n\n오히려 어둠으로 지워내기를\n밤을 빌려 우리를 식혀내기를\n바라는 것일지도 모른다\n\n“그 누구도 우리의 여름을 빼앗을 순 없다”\n\n나는 몰려오는 어둠에게 선언한다\n우릴 식히려고 작정한 어둠에게 전한다\n\n동이 틀 때까지\n다른 여름이 비추러 올 때까지\n나는 이 자리에서 우리의 여름을 지킨다\n\n동이 틀 때까지 지켜야 할 것은\n우리가 함께 보낸 지난여름\n그리고 앞으로 함께 보낼 여름",
        image: "",
      },
      {
        textContents:
          "화가\n-\n\n빈 곳에 하나\n그리고 또 하나\n그렇게 채워간다\n여러 색이 빈 곳을 채웠다\n\n빈 곳에 네 웃음을\n그리고 또 네 한마디를\n그렇게 채워갔다\n하지만 지금은 지워졌다\n\n난 뭘 그릴 수 있을까\n붓을 내려놓았다",
        image: "",
      },
      {
        textContents:
          "12월 그 때\n-\n\n찬란하게 빛나며\n따스한 온기를 머금고\n뚜렷한 색깔로 그려진\n우리의 12월\n\n네가 있기에 빛났고\n네기 있기에 따스했으며\n네가 있던 순간만이 뚜렷하던\n나의 12월\n\n너와 함께 간 12월이\n그리운 건 나 만일까\n너도 내가 그리울까\n\n우연히라도 만난다면\n말이라도 걸어볼게\n그리움과 온기를 머금고서",
        image: "",
      },
      {
        textContents:
          "오르골\n-\n\n한 곳을 기준으로 머물며 움직인다\n흐르는 선율에 맞춰\n\n네가 있는 곳을 기준으로 머물며 서성인다\n어떤 음악이 흐를까\n지금 내 마음과 같다면\n슬픈 선율이겠지",
        image: "",
      },
    ],

    cover: "/images/id1_cover.png",
  },
];
