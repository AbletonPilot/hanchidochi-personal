import React from "react";
import { Rating } from "@mui/material";

interface CampModalProps {
  onClose: () => void;
}

const ReviewModal = ({ onClose }: CampModalProps) => {
  const reviewData = [
    {
      id: "1",
      title: "캐릭터가 귀여워요!",
      star: <Rating size="small" precision={0.5} readOnly value={4.5} />,
      date: "2022-11-30",
    },
    {
      id: "2",
      title: "괜찮은 걸음용 내비게이션인거 같습니다",
      star: <Rating size="small" precision={0.5} readOnly value={5} />,
      date: "2022-11-30",
    },
    {
      id: "3",
      title: "길찾기를 즐겁게 할 수 있다는게 신기해요!",
      star: <Rating size="small" precision={0.5} readOnly value={4.5} />,
      date: "2022-11-30",
    },
    {
      id: "4",
      title: "캐릭터가 더 있으면 좋을 거 같아요",
      star: <Rating size="small" precision={0.5} readOnly value={4} />,
      date: "2022-11-30",
    },
    {
      id: "5",
      title: "저희 지역 캐릭터도 해주세요!",
      star: <Rating size="small" precision={0.5} readOnly value={4} />,
      date: "2022-11-30",
    },
    {
      id: "6",
      title: "괜찮은 걸음용 내비게이션인거 같습니다",
      star: <Rating size="small" precision={0.5} readOnly value={4.5} />,
      date: "2022-11-30",
    },
    {
      id: "7",
      title: "괜찮은 보도용 내비게이션",
      star: <Rating size="small" precision={0.5} readOnly value={5} />,
      date: "2022-11-30",
    },
    {
      id: "8",
      title: "길안내를 해주는게 더 정확하면 좋을거 같아요",
      star: <Rating size="small" precision={0.5} readOnly value={3.5} />,
      date: "2022-11-30",
    },
    {
      id: "9",
      title:
        "걸을 때 핸드폰을 필수적으로 봐야되서 위험하지만 AR길안내로서는 충분한거 같습니다.",
      star: <Rating size="small" precision={0.5} readOnly value={4} />,
      date: "2022-11-30",
    },
    {
      id: "10",
      title: "최고!",
      star: <Rating size="small" precision={0.5} readOnly value={5} />,
      date: "2022-11-30",
    },
    {
      id: "11",
      title: "캐릭터가 걷는게 꽤나 자연스러워요",
      star: <Rating size="small" precision={0.5} readOnly value={4} />,
      date: "2022-11-29",
    },
    {
      id: "12",
      title: "굿",
      star: <Rating size="small" precision={0.5} readOnly value={4.5} />,
      date: "2022-11-29",
    },
    {
      id: "13",
      title: "제 주변에 행사가 이렇게 많은지 처음알았어요!",
      star: <Rating size="small" precision={0.5} readOnly value={5} />,
      date: "2022-11-29",
    },
  ];

  return (
    <>
      <div className="fixed top-0 bg-[#00000034] w-screen h-screen z-10 flex items-center justify-center">
        <div className="bg-[#ffffff] max-h-max p-4 w-1/3 m-5 rounded-lg shadow-lg border border-black flex flex-col justify-center pt-5">
          {reviewData.map((data) => (
            <div key={data.id} className="pb-2">
              <div className="w-full flex mb-1">
                <h1 className="text-md font-semibold text-black ">
                  {data.title}
                </h1>
              </div>
              <div className="w-full flex justify-between">
                <div className="w-full flex justify-start items-center rounded-md">
                  {data.star}
                </div>
                <div className="w-full flex justify-end">
                  <span className=" text-gray-500 font-semibold text-xs">
                    {data.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="w-full grid grid-cols-3">
            <div className="flex justify-end">
              <button className="px-1 hover:text-white hover:bg-black hover:border-white  text-black border border-black rounded-md transition-all mx-2">
                이전
              </button>
            </div>
            <div className="w-full flex justify-center">
              <button className="font-bold p-1">1</button>
              <button className="p-1">2</button>
              <button className="p-1">3</button>
              <button className="p-1">4</button>
              <button className="p-1">5</button>
              <button className="p-1">6</button>
              <button className="p-1">7</button>
              <button className="p-1">8</button>
              <button className="p-1">9</button>
              <button className="p-1">10</button>
            </div>

            <div className="flex justify-start">
              <button className="px-1 hover:text-white hover:bg-black hover:border-white  text-black border border-black rounded-md transition-all mx-2">
                다음
              </button>
            </div>
          </div>
          <div className="w-full flex justify-around mt-4">
            <button
              className=" w-36 h-8 hover:text-white hover:bg-black hover:border-white  text-black border border-black rounded-md transition-all"
              onClick={onClose}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(ReviewModal);
