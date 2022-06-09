import { useContext } from "react"
import CampaignContext from "../context/CampaignContext"
import CampaignItem from "./CampaignItem"

function List() {
	const { campaigns, isLoading } = useContext(CampaignContext)

	if (isLoading) {
		return <h5>Loading...</h5>
	}
	return (
		<div className="list">
			<h2>Campaign List</h2>
			<ul>
				{campaigns.map((campaign, index) => (
					<CampaignItem key={index} campaign={campaign} />
				))}
			</ul>
		</div>
	)
}

export default List
