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
		</main>
	);
}
