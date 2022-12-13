import { useAuth } from "hooks/useAuth";
import Header from "components/Header";
import List from "components/List";
import { ListProps } from "types";
import { getProducts } from "services";
import Navigation from "components/Navgation";

const Products = ({ list }: ListProps) => {
  useAuth();
  if (list) {
    return (
      <div className="container mt-3">
        <Header />
        <List list={list} />
        <Navigation />
      </div>
    );
  } else {
    return <h1 className="container mt-5">Something happen with network</h1>;
  }
};

export default Products;

export async function getServerSideProps(context: any) {
  const data = await getProducts({ context, limit: 5, page: 1 });
  return {
    props: {
      list: data || null,
    },
  };
}
