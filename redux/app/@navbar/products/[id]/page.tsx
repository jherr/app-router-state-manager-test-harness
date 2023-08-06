import Products from "@/app/_rscProductComponents/Products";
import WrapperBox from "@/app/_components/WrapperBox";
import LayoutStoreDisplay from "@/app/_layoutStoreComponents/LayoutStoreDisplay";

export default function NavBar() {
  return (
    <WrapperBox title="NavBar" type="rsc">
      <Products />
      <LayoutStoreDisplay />
    </WrapperBox>
  );
}
