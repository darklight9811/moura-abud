import a from "./style.module.scss"
import { FaArrowLeft, FaHome, FaGripLines, FaBatteryHalf } from "react-icons/fa"
import { getApps } from "../../utils/utils"

const Sites = () => {
	return (
		<div className={a.smartphone}>
			<nav>
				<div>
					<div>07:40</div>
					
					<div>
						4G <FaBatteryHalf />
					</div>
				</div>

				<input placeholder="🔎 Pesquisa de aplicativos" />
			</nav>

			<div className={a.apps}>
				{getApps().map((i) => (<main key={i.name}><div style={{ backgroundColor: i.color, color: i.font }}><i.Icon /></div>{i.name}</main>))}
			</div>

			<div className={a.bts}>
				Todas as noticias do BTS
			</div>

			<div className={a.jogos}>
				<div>
					<img src="/teams/01.png" />
					Corintians
				</div>

				x
				
				<div>
					<img src="/teams/02.png" />
					São Paulo
				</div>

				<nav>
					17:00
					<br />
					11/02/2022
					<br />
					Taubaté - SP
				</nav>
			</div>

			<div className={a.actions}>
				<FaArrowLeft />
				<FaHome />
				<FaGripLines />
			</div>
		</div>
	)
}

export default Sites