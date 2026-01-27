import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

const decorativeElements = [
  {
    emoji: "🌳",
    topClass: "top-[65px]",
    rightClass: "right-[246px]",
    emojiTopClass: "top-[76px]",
    emojiRightClass: "right-[255px]",
  },
  {
    emoji: "☕",
    topClass: "top-[135px]",
    rightClass: "right-[52px]",
    emojiTopClass: "top-[146px]",
    emojiLeftClass: "left-[1161px]",
  },
];

const textBlocks = [
  {
    topClass: "top-44",
    rightClass: "right-[111px]",
    text: "We produce",
    text2: "packaging in Europe",
  },
  {
    topClass: "top-[311px]",
    rightClass: "right-[110px]",
    text: "We produce",
    text2: "packaging in Europe",
  },
];

export const PackagingIntroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-auto py-8">
      <Card className="relative w-full max-w-[1240px] mx-auto h-[422px] bg-white rounded-[20px] border-0 shadow-none">
        <CardContent className="relative w-full h-full p-0">
          <img
            className="absolute top-[84px] right-[261px] w-[148px] h-16"
            alt="Vector"
            src="https://c.animaapp.com/mkved9hrg5UXzm/img/vector-2.svg"
          />

          <img
            className="absolute top-[99px] left-[870px] w-[79px] h-[31px]"
            alt="Group"
            src="https://c.animaapp.com/mkved9hrg5UXzm/img/group-322.png"
          />

          {decorativeElements.map((element, index) => (
            <div key={`decorative-${index}`}>
              <div
                className={`absolute ${element.topClass} ${element.rightClass} w-[46px] h-[46px] bg-white rounded-[23px] border border-solid border-[#7ba0d0]`}
              />
              <div
                className={`absolute ${element.emojiTopClass} ${element.emojiRightClass || element.emojiLeftClass} w-[26px] text-2xl leading-[normal] whitespace-nowrap [font-family:'Inter',Helvetica] font-medium text-black tracking-[0]`}
              >
                {element.emoji}
              </div>
            </div>
          ))}

          <Badge className="absolute top-[366px] right-7 w-9 h-9 bg-bord rounded-[18px] hover:bg-bord" />

          <img
            className="absolute top-[378px] right-10 w-3 h-3"
            alt="Img"
            src="https://c.animaapp.com/mkved9hrg5UXzm/img/-.svg"
          />

          <img
            className="absolute top-[158px] right-[62px] w-[268px] h-[84px]"
            alt="Vector"
            src="https://c.animaapp.com/mkved9hrg5UXzm/img/vector-6.svg"
          />

          {textBlocks.map((block, index) => (
            <div
              key={`text-block-${index}`}
              className={`absolute ${block.topClass} ${block.rightClass} w-[195px] [font-family:'Inter',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal]`}
            >
              {block.text} <br />
              {block.text2}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};
