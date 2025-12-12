import ProductList from '../components/ProductList';
//Because I moved this from index to Store needed to switch from './components to ../components

export default function Store() {
  return (
    <>
      <section>
        <h1>Crochet Store</h1>
      </section>

      <section>
        <ProductList />
      </section>
    </>
  );
}
