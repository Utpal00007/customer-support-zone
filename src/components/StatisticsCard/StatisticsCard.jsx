import Container from "../Container/Container";
import vectorImg from "../../assets/vector1.png";

const StatisticsCard = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-6 my-21 mx-2 lg:mx-0">
        <div className="relative overflow-hidden flex flex-col  justify-center items-center py-8 text-white h-44 sm:h-52 lg:h-62 rounded-md flex-1 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          {/* left img  */}
          <img src={vectorImg} alt="" className="absolute left-0 top-0 " />
          {/* right side mirror img  */}
          <img
            src={vectorImg}
            alt=""
            className="absolute right-0 top-0 -scale-x-100"
          />

          <div className="relative z-10 flex flex-col  justify-center items-center">
            <h2 className="text-xl  sm:text-2xl">In-Progress</h2>

            <p className="font-semibold text-4xl lg:text-6xl">0</p>
          </div>
        </div>
        <div className="relative overflow-hidden flex flex-col  justify-center items-center py-8 text-white h-44 sm:h-52 lg:h-62 rounded-md flex-1 bg-gradient-to-r from-[#54CF68] to-[#00827A]">
          {/* left img  */}
          <img src={vectorImg} alt="" className="absolute left-0 top-0 " />
          {/* right side mirror img  */}
          <img
            src={vectorImg}
            alt=""
            className="absolute right-0 top-0 -scale-x-100"
          />

          <div className="relative z-10 flex flex-col  justify-center items-center">
            <h2 className="text-xl  sm:text-2xl">Resolved</h2>

            <p className="font-semibold text-4xl lg:text-6xl">0</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default StatisticsCard;
