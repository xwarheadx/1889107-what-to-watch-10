import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
export default function LoadingScreen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
      </header>
      <div>
        <div style={{marginBottom: 40}}>
          <h1 className="page-title" style={{textAlign: 'center'}}>Loading...</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
