import StatisticsCard from "../StatisticsCard/StatisticsCard";
import { use } from "react";
import CustomerTicketsCard from "../CustomerTicketsCard/CustomerTicketsCard";
import Container from "../Container/Container";

const IssuesManagement = ({ fetchPromise }) => {
  const initialData = use(fetchPromise);
  console.log(initialData);
  return (
    <div>
      <StatisticsCard></StatisticsCard>

      {/* Cards */}

      <Container>
        <div className="grid grid-cols-12 gap-4">
          {/* left side */}
          <div className="col-span-12 lg:col-span-9">
            <h2 className="text-2xl font-semibold text-[#34485A]">
              Customer Tickets
            </h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {initialData.map((item) => {
                console.log(item);
                return (
                  <div>
                    <CustomerTicketsCard
                      key={item.id}
                      item={item}
                    ></CustomerTicketsCard>
                  </div>
                );
              })}
            </div>
          </div>
          {/* right side */}
          <div className="col-span-12 lg:col-span-3">
            <h2 className="text-2xl font-semibold">Task Status </h2>

            <p className="text-base text-[#627382] mt-4">
              Select a ticket to add to Task Status
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IssuesManagement;
