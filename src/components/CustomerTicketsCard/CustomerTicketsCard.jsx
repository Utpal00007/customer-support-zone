import Container from "../Container/Container";
import { Calendar } from "lucide-react";

const CustomerTicketsCard = () => {
  return (
    <Container>
      {" "}
      <div className="grid grid-cols-12 gap-4">
        {/* left side */}
        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-2xl font-semibold text-[#34485A]">
            Customer Tickets
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className=" shadow-md p-4 rounded-md border-1 border-gray-100  ">
              <div className="flex flex-col my-2  sm:flex-row sm:justify-between sm:items-center space-y-4">
                <h2 className="text-xl text-[#001931] font-medium">
                  Login Issues - Can't Access Account
                </h2>
                <span className="flex w-fit shrink-0 items-center gap-2 rounded-xl bg-[#B9F8CF] px-4 py-1  whitespace-nowrap">
                  {" "}
                  <span className="h-4 w-4 shrink-0 rounded-full bg-[#02A53B]"></span>{" "}
                  Open{" "}
                </span>
              </div>
              <p className="text-base text-[#627382]">
                Customer is unable to log in to their account. They've tried
                resetting their password multiple times but still...
              </p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-4 justify-start items-center">
                  <h2 className="text-sm text-[#627382]">#12345</h2>
                  <span className="text-sm text-[#F83044]">HIGH PRIORITY</span>
                </div>
                <div className="flex gap-4 justify-start items-center">
                  <h2 className="text-sm text-[#627382]">John Smith</h2>
                  <span className="text-sm text-[#627382] flex items-center gap-2">
                    {" "}
                    <Calendar /> <span>1/15/2024</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="shadow-md p-4 rounded-md border-1 border-gray-100">
              <div className="flex justify-between items-center space-y-4">
                <h2 className="text-xl text-[#001931] font-medium">
                  Unable to Download Invoice
                </h2>
                <span className="flex items-center gap-2 rounded-xl bg-[#F8F3B9] px-4 py-1 whitespace-nowrap">
                  <span className="h-4 w-4 rounded-full bg-[#FEBB0C]"></span>
                  In-Progress
                </span>
              </div>
              <p className="text-base text-[#627382]">
                Customer is unable to log in to their account. They've tried
                resetting their password multiple times but still...
              </p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-4 justify-start items-center">
                  <h2 className="text-base text-[#627382]">#12345</h2>
                  <span className="text-sm text-[#FEBB0C]">
                    Medium PRIORITY
                  </span>
                </div>
                <div className="flex gap-4 justify-start items-center">
                  <h2 className="text-base text-[#627382]">John Smith</h2>
                  <span className="text-sm text-[#627382] flex items-center gap-2">
                    {" "}
                    <Calendar /> <span>1/15/2024</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="col-span-12 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default CustomerTicketsCard;
