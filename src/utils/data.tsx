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
    title: "당신의 하루에 쉼이 되는 문장 '글순희 문장집'",
    subTitle: "글순희",
    description: "문장집",
    price: 24000,
    subdescription:
      "Sleek cut creates a polished and sophisticated look with clean lines",
    contents: [
      { textContents: "", image: "/images/id1/id1_1.jpeg" },
      { textContents: "", image: "/images/id1/id1_2.jpeg" },
      { textContents: "", image: "/images/id1/id1_3.jpeg" },
      { textContents: "", image: "/images/id1/id1_4.jpeg" },
      { textContents: "", image: "/images/id1/id1_5.jpeg" },
      { textContents: "", image: "/images/id1/id1_6.jpeg" },
      { textContents: "", image: "/images/id1/id1_7.jpeg" },
      { textContents: "", image: "/images/id1/id1_8.jpeg" },
      { textContents: "", image: "/images/id1/id1_9.jpeg" },
      { textContents: "", image: "/images/id1/id1_10.jpeg" },
      { textContents: "", image: "/images/id1/id1_11.jpeg" },
      { textContents: "", image: "/images/id1/id1_12.jpeg" },
      { textContents: "", image: "/images/id1/id1_13.jpeg" },
      { textContents: "", image: "/images/id1/id1_14.jpeg" },
      { textContents: "", image: "/images/id1/id1_15.jpeg" },
      { textContents: "", image: "/images/id1/id1_16.jpeg" },
      { textContents: "", image: "/images/id1/id1_17.jpeg" },
      { textContents: "", image: "/images/id1/id1_18.jpeg" },
      { textContents: "", image: "/images/id1/id1_19.jpeg" },
      { textContents: "", image: "/images/id1/id1_20.jpeg" },
      { textContents: "", image: "/images/id1/id1_21.jpeg" },
      { textContents: "", image: "/images/id1/id1_22.jpeg" },
      { textContents: "", image: "/images/id1/id1_23.jpeg" },
      { textContents: "", image: "/images/id1/id1_24.jpeg" },
      { textContents: "", image: "/images/id1/id1_25.jpeg" },
      { textContents: "", image: "/images/id1/id1_26.jpeg" },
      { textContents: "", image: "/images/id1/id1_27.jpeg" },
      { textContents: "", image: "/images/id1/id1_28.jpeg" },
      { textContents: "", image: "/images/id1/id1_29.jpeg" },
      { textContents: "", image: "/images/id1/id1_30.jpeg" },
      { textContents: "", image: "/images/id1/id1_31.jpeg" },
      { textContents: "", image: "/images/id1/id1_32.jpeg" },
      { textContents: "", image: "/images/id1/id1_33.jpeg" },
      { textContents: "", image: "/images/id1/id1_34.jpeg" },
      { textContents: "", image: "/images/id1/id1_35.jpeg" },
      { textContents: "", image: "/images/id1/id1_36.jpeg" },
      { textContents: "", image: "/images/id1/id1_37.jpeg" },
      { textContents: "", image: "/images/id1/id1_38.jpeg" },
      { textContents: "", image: "/images/id1/id1_39.jpeg" },
    ],

    cover: "/images/id1_cover.png",
  },
];
