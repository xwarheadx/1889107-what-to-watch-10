import {Footer} from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
export default function PageNotFound404(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
      </header>
      <div>
        <div style={{marginBottom: 40}}>
          <h1 className="page-title" style={{textAlign: 'center'}}>404 Page Not Found</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
