import Layout from "../components/layout/layout.connect";

const withLayout = (Component) => (props) => {
  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

export default withLayout;
