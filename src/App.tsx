import { Categories } from './components';
import { PageHeader } from './layouts';
import { PageNavigation } from './layouts/PageNavigation';

export default function App() {
  return (
    <div>
      <div className="sticky top-0 z-10 bg-white">
        <PageHeader />
        <Categories />
      </div>
      <div className="min-h-screen"></div>
      <PageNavigation />
    </div>
  );
}
