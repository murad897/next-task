import { UseAuth } from "hooks/UseAuth";
import Header from "components/Header";
import List from "components/List";
import { listProps } from "types";
import { getProducts } from "services";
import Navigation from "components/Navgation";

const Products = ({ list }: listProps) => {
  const { authCheck, token } = UseAuth();
  authCheck();
  if (token) {
    return (
      <div className="container mt-3">
        <Header />
        <List list={list} />
        <Navigation />
      </div>
    );
  } else {
    return <h1>Something happen with network</h1>;
  }
};

export default Products;

export async function getServerSideProps(context: any) {
  const data = await getProducts({ context, limit: 5, offset: 1 });
  return {
    props: {
      list: data,
    },
  };
}
