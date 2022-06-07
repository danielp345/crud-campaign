import { useContext } from "react"
import CampaignContext from "../context/CampaignContext"
import CampaignItem from "./CampaignItem"

function List() {
	const { campaigns, isLoading } = useContext(CampaignContext)

	console.log(campaigns)

	if (isLoading) {
		return <h5>Loading...</h5>
	}
	return (
		<div>
			<ul>
				{campaigns.map((campaign, index) => (
					<CampaignItem key={index} campaign={campaign} />
				))}
			</ul>
		</div>
	)
}

export default List
