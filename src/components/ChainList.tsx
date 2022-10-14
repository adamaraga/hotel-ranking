import { useAppSelector } from "../hooks/reduxHooks";
import ChainCard from "./ChainCard";

const ChainList = () => {
  const chains = useAppSelector((state) => state.chains.chains);

  return (
    <div>
      {chains.length > 0 ? (
        <div className="chainList">
          {chains.map((chain) => {
            return <ChainCard key={chain.id} chain={chain} />;
          })}
        </div>
      ) : (
        <div className="noData">No Chains</div>
      )}
    </div>
  );
};

export default ChainList;
