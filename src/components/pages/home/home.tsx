
import styles from './Home.module.scss';
import logo from '../../../assets/logo-negativo-img.png';
import email from '../../../assets/mail.png';
import { CgPhone } from 'react-icons/cg';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


export default function Home() {
	return (
		<main>
			<nav className={styles.menu}>

				<div className={styles.alinhar}>
					<div>
						<img src={email} className={styles.email} />
					</div>
					<div className={styles.contato}>
						contato@contato.com.br
					</div>
					<div className={styles.telefone}>

						<CgPhone />
						(11)5089-2060
					</div>
				</div>
			</nav>

			<header className={styles.header}>

				<img src={logo} className={styles.imagemLogo} />

				<Navbar bg="primary" variant="dark">
						<Nav>
							<div className="nav-list">
								<h2>Unibrary</h2>
								<Link to="./home" className="li">Início</Link>
								<Link to="./about" className="li">Quem Somos</Link>
								{/* <Link to="./reserva" className="li">Reserva</Link>
              <Link to="./contato" className="li">Contato</Link> */}
							</div>
						</Nav>
				</Navbar>
				</header>
				</main>
				/*       
				<div className={styles.header__text}>
        QUEM SOMOS
				</div> 
				<div className={styles.header__text}>
          SOLUÇÕES
				</div>
				<div className={styles.header__text}>
          SEGMENTO
				</div>
				<div className={styles.header__text}>
          CONTEÚDOS
				</div>
				<div className={styles.header__text}>
          BLOG
				</div>
				<div className={styles.header__text}>
          CONTATO
				</div>
			</header>
			<div> */
	);
}
