import { useContext } from "react"
import CampaignContext from "../context/CampaignContext"

function CampaignItem({ campaign }) {
	const { deleteCampaign, setCampaignData, setCreating, setEditing } =
		useContext(CampaignContext)

	const onClick = () => {
		setCampaignData(campaign)
		setEditing(true)
		setCreating(false)
	}

	return (
		<li>
			<h2>{campaign.name}</h2>
			<h3>{campaign.keywords}</h3>
			<h4>{campaign.fund}</h4>

			<div>
				<button onClick={onClick}>edit</button>
				<button onClick={() => deleteCampaign(campaign.id)}>delete</button>
			</div>
		</li>
	)
}

export default CampaignItem
