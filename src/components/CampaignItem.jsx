import { useContext } from "react"
import CampaignContext from "../context/CampaignContext"

function CampaignItem({ campaign }) {
	const { deleteCampaign, setCampaignData, setCreating, setEditing } =
		useContext(CampaignContext)

	const onClick = () => {
		setCampaignData(campaign)
		setEditing(true)
		setCreating(false)
		window.scrollTo(0, 0)
	}

	return (
		<li>
			<div className="item">
				<p className="paragraph p-name">{campaign.name}</p>
				<p className="paragraph p-keywords">{campaign.keywords}</p>

				<div className="more-info">
					<p>
						Bid amount: <span className="info">{campaign.bidAmount} $</span>
					</p>
					<p>
						Fund: <span className="info">{campaign.fund} $</span>
					</p>
					<p>
						Status: <span className="info">{campaign.status}</span>
					</p>
					<p>
						Town: <span className="info">{campaign.town}</span>
					</p>
					<p>
						Radius: <span className="info">{campaign.radius} km</span>
					</p>
				</div>

				<div className="btns">
					<button className="btn btn-item" onClick={onClick}>
						Edit
					</button>
					<button
						className="btn btn-item"
						onClick={() => deleteCampaign(campaign.id)}
					>
						Delete
					</button>
				</div>
			</div>
		</li>
	)
}

export default CampaignItem
